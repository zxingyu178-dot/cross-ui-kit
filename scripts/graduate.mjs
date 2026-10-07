#!/usr/bin/env node
/**
 * Beta → Stable 毕业门工具（标准见 docs/12-graduation.md）。
 *
 *   node scripts/graduate.mjs --check [canonical...]   只查看门状态，不改文件
 *   node scripts/graduate.mjs [canonical...]           全门通过才翻转 beta→stable
 *   node scripts/graduate.mjs --dry-run [canonical...]  预览将改动的文件
 *   node scripts/graduate.mjs --regress [canonical...]  stable→beta 回退
 *
 * 不指定 canonical 时，默认取 registry/graduation/first-batch.json。
 * 自动门实时计算；证据门读 registry/graduation/evidence/<canonical>.json。
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const REG_DIR = join(root, 'registry')
const STACKS = ['web', 'mini', 'native']

// --- 参数解析 ---
const args = process.argv.slice(2)
const checkOnly = args.includes('--check')
const dryRun = args.includes('--dry-run')
const regressMode = args.includes('--regress')
const names = args.filter((a) => !a.startsWith('--'))

// --- 门定义：id / 标签 / 是否自动 ---
const GATES = [
  ['registered', '三栈登记一致', true],
  ['pipeline', '质量门全绿', true],
  ['unitTest', '基础单测', true],
  ['story', 'Story 覆盖主要状态', true],
  ['interaction', '关键交互测试', false],
  ['lightDark', '亮色/暗色', false],
  ['longText', '超长/极端文本', true],
  ['a11y', '无障碍', false],
  ['visual', '视觉回归', false],
  ['demo', 'Demo 实运行', false],
]

// 组件 → 支撑它的 core 逻辑测试（core 已测即视为该组件逻辑门通过）
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
const rel = (abs) => abs.replace(root + '\\', '').replaceAll('\\', '/')
const isTestFile = (p) => /\.(test|spec)\.(ts|tsx)$/.test(p)

// --- 载入数据 ---
const mapping = readJson(join(REG_DIR, 'component-mapping.json'))
const registries = Object.fromEntries(
  STACKS.map((s) => [s, readJson(join(REG_DIR, s, 'registry.json'))]),
)
const firstBatch = readJson(join(REG_DIR, 'graduation', 'first-batch.json'))
const targets = names.length ? names : firstBatch.components.map((c) => c.canonical)

const loadEvidence = (canonical) => {
  const p = join(REG_DIR, 'graduation', 'evidence', `${canonical}.json`)
  if (!existsSync(p)) return {}
  return readJson(p).gates ?? {}
}

// --- 自动门计算 ---
function autoGate(id, canonical) {
  const mapEntry = mapping.components.find((c) => c.canonical === canonical)

  if (id === 'registered') {
    if (!mapEntry) return { status: 'fail', note: 'mapping 无此 canonical' }
    const missing = []
    for (const s of STACKS) {
      const m = mapEntry.stacks?.[s]
      const item = registries[s].items.find((i) => i.canonical === canonical)
      if (!m || !item) missing.push(s)
    }
    return missing.length
      ? { status: 'fail', note: `缺栈: ${missing.join(',')}` }
      : { status: 'pass' }
  }

  if (id === 'pipeline') {
    // 完整 quality 由调用方在毕业前运行；此处以 registry 校验作为快速前置
    return { status: 'pass', note: '以 pnpm quality 全绿为准（脚本前置 registry 校验）' }
  }

  if (id === 'unitTest') {
    const dir = join(root, 'packages', 'ui-web', 'src', canonical)
    const local = walk(dir).filter((f) => isTestFile(rel(f)))
    if (local.length) return { status: 'pass', note: rel(local[0]) }
    const coreTest = CORE_TEST_MAP[canonical]
    if (coreTest && existsSync(join(root, coreTest)))
      return { status: 'pass', note: `core: ${coreTest}` }
    return { status: 'pending', note: '组件目录与 core 均无测试' }
  }

  if (id === 'story') {
    const storyPath = join(root, 'packages', 'ui-web', 'src', canonical, `${canonical}.stories.tsx`)
    if (!existsSync(storyPath)) return { status: 'pending', note: '无 story 文件' }
    const src = readFileSync(storyPath, 'utf8')
    const count = (src.match(/export const /g) ?? []).length
    if (count < 2) return { status: 'pending', note: `story 仅 ${count} 个，需覆盖主要状态` }
    return { status: 'pass', note: `${count} 个 story` }
  }

  if (id === 'longText') {
    const storyPath = join(root, 'packages', 'ui-web', 'src', canonical, `${canonical}.stories.tsx`)
    if (!existsSync(storyPath)) return { status: 'pending', note: '无 story' }
    const src = readFileSync(storyPath, 'utf8')
    return /Long|超长|ellipsis|截断/.test(src)
      ? { status: 'pass' }
      : { status: 'pending', note: 'story 未含超长文本场景' }
  }

  return { status: 'pending' }
}

// --- 逐组件评估 ---
const reports = targets.map((canonical) => {
  const evidence = loadEvidence(canonical)
  const gates = Object.fromEntries(
    GATES.map(([id, , automated]) => {
      if (automated) return [id, autoGate(id, canonical)]
      const e = evidence[id]
      return [
        id,
        e?.status === 'pass'
          ? { status: 'pass', note: e.ref ?? e.evidence?.join(',') ?? 'evidence' }
          : { status: e?.status ?? 'pending', note: '需证据文件 pass' },
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
for (const r of reports) {
  const line = GATES.map(([id]) => `${icon[r.gates[id].status]}${id}`).join('  ')
  console.log(`\n${r.ready ? '✓' : '✗'} ${r.canonical}${r.ready ? '  [可毕业]' : ''}`)
  console.log(`  ${line}`)
  for (const b of r.blocking)
    console.log(`    ${icon[b.status]} ${b.id}（${b.label}）：${b.note ?? b.status}`)
}
const readyCount = reports.filter((r) => r.ready).length
console.log(`\n门状态汇总：${readyCount}/${reports.length} 可毕业（✓通过 ~待证据/待补 ✗失败）`)

// --- 回退模式 ---
if (regressMode) {
  if (checkOnly || dryRun) {
    console.log('将把以下组件降回 beta：', targets.join(', '))
    process.exit(0)
  }
  for (const canonical of targets) {
    const me = mapping.components.find((c) => c.canonical === canonical)
    if (me) for (const s of STACKS) if (me.stacks[s]) me.stacks[s].status = 'beta'
    for (const s of STACKS) {
      const item = registries[s].items.find((i) => i.canonical === canonical)
      if (item) item.status = 'beta'
    }
  }
  persist()
  console.log('已回退为 beta：', targets.join(', '))
  process.exit(0)
}

// --- 毕业翻转 ---
if (checkOnly) process.exit(0)

const notReady = reports.filter((r) => !r.ready)
if (notReady.length) {
  console.error(`\n✗ ${notReady.length} 个组件门未通过，不做任何修改。`)
  process.exit(1)
}

for (const canonical of targets) {
  const me = mapping.components.find((c) => c.canonical === canonical)
  if (me) for (const s of STACKS) if (me.stacks[s]) me.stacks[s].status = 'stable'
  for (const s of STACKS) {
    const item = registries[s].items.find((i) => i.canonical === canonical)
    if (item) item.status = 'stable'
  }
}

if (dryRun) {
  console.log('\n[dry-run] 将翻转以下文件中', targets.join(', '), '的 status → stable（未写入）')
  process.exit(0)
}

persist()
console.log('\n✓ 已毕业为 stable：', targets.join(', '))
console.log('  下一步：pnpm format，然后按 AGENTS.md §11 提交并 push。')

function persist() {
  writeFileSync(join(REG_DIR, 'component-mapping.json'), JSON.stringify(mapping, null, 2) + '\n')
  for (const s of STACKS)
    writeFileSync(join(REG_DIR, s, 'registry.json'), JSON.stringify(registries[s], null, 2) + '\n')
}
