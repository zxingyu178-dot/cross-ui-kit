#!/usr/bin/env node
/**
 * Beta → Stable 毕业门工具（标准见 docs/12-graduation.md）。
 *
 * 重要：成熟度（planned→beta→stable）是【每个 stack 独立的生命周期】。
 * 某一栈的测试/证据只能使该栈毕业，禁止跨栈自动翻转。
 *
 *   node scripts/graduate.mjs --stack web  [--check] [canonical...]   查看/执行 web 毕业
 *   node scripts/graduate.mjs --stack mini [--check] [canonical...]  mini
 *   node scripts/graduate.mjs --stack native [--check] [canonical...] native
 *   node scripts/graduate.mjs --stack <s> --dry-run [canonical...]    预览，不写入
 *   node scripts/graduate.mjs --stack <s> --regress [canonical...]    仅回退该栈 stable→beta
 *
 * 不指定 canonical 时，默认取 registry/graduation/first-batch.json。
 * 自动门实时计算；证据门读 registry/graduation/evidence/<stack>/<canonical>.json；
 * pipeline 门只接受【绑定当前 HEAD SHA】的 quality:stable 验证产物。
 *
 * 测试接缝（仅用于回归测试）：
 *   KIT_ROOT=<dir>      覆盖仓库根
 *   KIT_HEAD_SHA=<sha>  覆盖当前 HEAD SHA
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const root = process.env.KIT_ROOT ? resolve(process.env.KIT_ROOT) : resolve(scriptDir, '..')
const REG_DIR = join(root, 'registry')
const STACKS = ['web', 'mini', 'native']
const STACK_PKG = {
  web: 'packages/ui-web',
  mini: 'packages/ui-mini',
  native: 'packages/ui-native',
}

// --- 参数解析 ---
const rawArgs = process.argv.slice(2)
let stack = null
const args = []
for (let i = 0; i < rawArgs.length; i++) {
  const a = rawArgs[i]
  if (a === '--stack') {
    stack = rawArgs[++i]
  } else if (a.startsWith('--stack=')) {
    stack = a.slice('--stack='.length)
  } else {
    args.push(a)
  }
}
const checkOnly = args.includes('--check')
const dryRun = args.includes('--dry-run')
const regressMode = args.includes('--regress')
const names = args.filter((a) => !a.startsWith('--'))

if (!stack) {
  console.error(
    '用法：node scripts/graduate.mjs --stack <web|mini|native> [--check|--dry-run|--regress] [canonical...]',
  )
  process.exit(2)
}
if (!STACKS.includes(stack)) {
  console.error(`未知 stack：${stack}（可选 web | mini | native）`)
  process.exit(2)
}

// --- 门定义：id / 标签 / 是否自动（自动门实时计算，其余读分栈证据） ---
const GATES = [
  ['registered', '本栈登记一致', true],
  ['pipeline', 'quality:stable 全绿（绑定当前提交）', true],
  ['unitTest', '基础单测', true],
  ['story', 'Story 覆盖主要状态', true],
  ['interaction', '关键交互测试', false],
  ['lightDark', '亮色/暗色', false],
  ['longText', '超长/极端文本', true],
  ['a11y', '无障碍', false],
  ['visual', '视觉回归', false],
  ['demo', 'Demo 实运行', false],
]

// web 组件 → 支撑它的 core 逻辑测试（core 已测即视为该组件逻辑门通过）
const CORE_TEST_MAP = {
  DataTable: 'packages/core/src/utils/__tests__/sort.test.ts',
  Pagination: 'packages/core/src/utils/__tests__/pagination.test.ts',
  Steps: 'packages/core/src/utils/__tests__/step.test.ts',
}

const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'))

/** 递归列出目录下所有文件（忽略 node_modules） */
function walk(dir) {
  if (!existsSync(dir)) return []
  const out = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules') continue
    const full = join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}
const rel = (abs) =>
  abs
    .replace(root + '\\', '')
    .replace(root + '/', '')
    .replaceAll('\\', '/')
const isTestFile = (p) => /\.(test|spec)\.(ts|tsx)$/.test(p)

// --- 载入数据 ---
const mapping = readJson(join(REG_DIR, 'component-mapping.json'))
const registries = Object.fromEntries(
  STACKS.map((s) => [s, readJson(join(REG_DIR, s, 'registry.json'))]),
)
const firstBatch = readJson(join(REG_DIR, 'graduation', 'first-batch.json'))
const targets = names.length ? names : firstBatch.components.map((c) => c.canonical)

function getHeadSha() {
  if (process.env.KIT_HEAD_SHA) return process.env.KIT_HEAD_SHA
  const r = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' })
  if (r.status !== 0) return null
  return r.stdout.trim()
}

/** pipeline 门：只接受绑定当前 HEAD、且覆盖本栈的 quality:stable 产物 */
function pipelineGate() {
  const sha = getHeadSha()
  if (!sha) return { status: 'pending', note: '无法获取 HEAD SHA（非 git 仓库？）' }
  const p = join(REG_DIR, 'graduation', 'verify', `${sha}.json`)
  if (!existsSync(p))
    return {
      status: 'pending',
      note: `HEAD ${sha.slice(0, 7)} 无验证产物，先运行 pnpm quality:stable`,
    }
  const art = readJson(p)
  if (art.sha !== sha) return { status: 'pending', note: '验证产物 SHA 与 HEAD 不一致' }
  if (!art.allPass) return { status: 'pending', note: '验证产物存在但有阶段未通过' }
  const stacks = art.verifiedStacks ?? []
  if (!stacks.includes(stack))
    return {
      status: 'pending',
      note: `验证产物未覆盖栈 ${stack}（仅覆盖 ${stacks.join(',') || '无'}），禁止跨栈毕业`,
    }
  return { status: 'pass', note: `quality:stable @ ${sha.slice(0, 7)}` }
}

const loadStackEvidence = (canonical) => {
  const p = join(REG_DIR, 'graduation', 'evidence', stack, `${canonical}.json`)
  if (!existsSync(p)) return {}
  return readJson(p).gates ?? {}
}

// --- 自动门计算（按栈） ---
function autoGate(id, canonical) {
  const mapEntry = mapping.components.find((c) => c.canonical === canonical)

  if (id === 'registered') {
    if (!mapEntry) return { status: 'fail', note: 'mapping 无此 canonical' }
    const sm = mapEntry.stacks?.[stack]
    const item = registries[stack].items.find((i) => i.canonical === canonical)
    if (!sm || !item) return { status: 'fail', note: `栈 ${stack} 未登记该组件` }
    return { status: 'pass' }
  }

  if (id === 'pipeline') return pipelineGate()

  if (id === 'unitTest') {
    const dir = join(root, STACK_PKG[stack], 'src', canonical)
    const local = walk(dir).filter((f) => isTestFile(rel(f)))
    if (local.length) return { status: 'pass', note: rel(local[0]) }
    if (stack === 'web') {
      const coreTest = CORE_TEST_MAP[canonical]
      if (coreTest && existsSync(join(root, coreTest)))
        return { status: 'pass', note: `core: ${coreTest}` }
    }
    return { status: 'pending', note: `${STACK_PKG[stack]} 中该组件暂无真实单测` }
  }

  if (id === 'story') {
    if (stack !== 'web')
      return { status: 'pending', note: '该栈暂无 Storybook（P1 实机化后补齐故事清单）' }
    const storyPath = join(root, STACK_PKG.web, 'src', canonical, `${canonical}.stories.tsx`)
    if (!existsSync(storyPath)) return { status: 'pending', note: '无 story 文件' }
    const src = readFileSync(storyPath, 'utf8')
    const count = (src.match(/export const /g) ?? []).length
    if (count < 2) return { status: 'pending', note: `story 仅 ${count} 个，需覆盖主要状态` }
    return { status: 'pass', note: `${count} 个 story` }
  }

  if (id === 'longText') {
    if (stack !== 'web') return { status: 'pending', note: '该栈暂无超长文本场景（P1 后补齐）' }
    const storyPath = join(root, STACK_PKG.web, 'src', canonical, `${canonical}.stories.tsx`)
    if (!existsSync(storyPath)) return { status: 'pending', note: '无 story' }
    const src = readFileSync(storyPath, 'utf8')
    return /Long|超长|ellipsis|截断/.test(src)
      ? { status: 'pass' }
      : { status: 'pending', note: 'story 未含超长文本场景' }
  }

  return { status: 'pending' }
}

// --- 逐组件评估（仅针对选定栈） ---
const reports = targets.map((canonical) => {
  const evidence = loadStackEvidence(canonical)
  const gates = Object.fromEntries(
    GATES.map(([id, , automated]) => {
      if (automated) return [id, autoGate(id, canonical)]
      const e = evidence[id]
      return [
        id,
        e?.status === 'pass'
          ? { status: 'pass', note: e.ref ?? e.evidence?.join(',') ?? 'evidence' }
          : { status: e?.status ?? 'pending', note: `需 ${stack} 栈证据文件 pass` },
      ]
    }),
  )
  const blocking = GATES.filter(([id]) => gates[id].status !== 'pass').map(([id, label]) => ({
    id,
    label,
    status: gates[id].status,
    note: gates[id].note,
  }))
  return { canonical, gates, ready: blocking.length === 0, blocking }
})

// --- 输出报告 ---
const icon = { pass: '✓', pending: '~', fail: '✗' }
console.log(`\n=== 毕业门检查 · stack=${stack} ===`)
for (const r of reports) {
  const line = GATES.map(([id]) => `${icon[r.gates[id].status]}${id}`).join('  ')
  console.log(`\n${r.ready ? '✓' : '✗'} ${r.canonical}${r.ready ? '  [可毕业]' : ''}`)
  console.log(`  ${line}`)
  for (const b of r.blocking)
    console.log(`    ${icon[b.status]} ${b.id}（${b.label}）：${b.note ?? b.status}`)
}
const readyCount = reports.filter((r) => r.ready).length
console.log(
  `\n门状态汇总（${stack}）：${readyCount}/${reports.length} 可毕业（✓通过 ~待证据/待补 ✗失败）`,
)

function persist() {
  writeFileSync(join(REG_DIR, 'component-mapping.json'), JSON.stringify(mapping, null, 2) + '\n')
  for (const s of STACKS)
    writeFileSync(join(REG_DIR, s, 'registry.json'), JSON.stringify(registries[s], null, 2) + '\n')
}

// --- 回退模式（仅选定栈） ---
if (regressMode) {
  if (checkOnly || dryRun) {
    console.log(`将把 ${stack} 栈以下组件降回 beta：`, targets.join(', '))
    process.exit(0)
  }
  let changed = false
  for (const canonical of targets) {
    const me = mapping.components.find((c) => c.canonical === canonical)
    if (me?.stacks?.[stack] && me.stacks[stack].status !== 'beta') {
      me.stacks[stack].status = 'beta'
      changed = true
    }
    const item = registries[stack].items.find((i) => i.canonical === canonical)
    if (item && item.status !== 'beta') {
      item.status = 'beta'
      changed = true
    }
  }
  if (changed && !dryRun) persist()
  console.log(
    changed
      ? `已回退 ${stack} 栈为 beta：${targets.join(', ')}（其他栈未改动）`
      : `${stack} 栈本就为 beta，无需改动（幂等）`,
  )
  process.exit(0)
}

if (checkOnly) process.exit(0)

// --- 毕业翻转（仅选定栈） ---
const notReady = reports.filter((r) => !r.ready)
if (notReady.length) {
  console.error(`\n✗ ${notReady.length} 个组件门未通过，不做任何修改。`)
  process.exit(1)
}

let changed = false
for (const canonical of targets) {
  const me = mapping.components.find((c) => c.canonical === canonical)
  if (me?.stacks?.[stack] && me.stacks[stack].status !== 'stable') {
    me.stacks[stack].status = 'stable'
    changed = true
  }
  const item = registries[stack].items.find((i) => i.canonical === canonical)
  if (item && item.status !== 'stable') {
    item.status = 'stable'
    changed = true
  }
}

if (dryRun) {
  console.log(
    `\n[dry-run] 将翻转 ${stack} 栈中`,
    targets.join(', '),
    '的 status → stable（未写入；其他栈不动）',
  )
  process.exit(0)
}

if (!changed) {
  console.log(`\n✓ ${stack} 栈这些组件已是 stable，无需改动（幂等）：`, targets.join(', '))
  process.exit(0)
}

persist()
console.log(`\n✓ ${stack} 栈已毕业为 stable：`, targets.join(', '), '（其他栈未改动）')
console.log('  下一步：pnpm format，然后按 AGENTS.md §11 提交并 push。')
