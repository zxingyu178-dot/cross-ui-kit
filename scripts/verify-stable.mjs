#!/usr/bin/env node
/**
 * quality:stable —— Stable 毕业的【完整可信质量门】。
 *
 * 与快速质量门 pnpm quality 的区别：quality 只做静态检查与单测；
 * quality:stable 额外要求真实构建与浏览器验收（Storybook 构建、Playwright
 * 关键交互 / axe 无障碍 / 亮暗视觉回归），全部通过后生成一份
 * 【绑定当前 Git commit SHA】的机器可读验证产物：
 *
 *   registry/graduation/verify/<sha>.json
 *
 * scripts/graduate.mjs 的 pipeline 门只接受当前 HEAD 的该产物，
 * 从而禁止用旧提交的测试结果毕业。产物不入库（可由本命令重建）。
 *
 *   node scripts/verify-stable.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'
import { tmpdir } from 'node:os'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const REG_DIR = join(root, 'registry')

function git(args) {
  const r = spawnSync('git', args, { cwd: root, encoding: 'utf8' })
  return r.status === 0 ? r.stdout.trim() : null
}

const sha = git(['rev-parse', 'HEAD'])
if (!sha) {
  console.error('无法获取 HEAD SHA（不在 git 仓库中？），拒绝生成验证产物。')
  process.exit(2)
}
const shortSha = sha.slice(0, 7)
const dirty = git(['status', '--porcelain']) ?? ''
const treeClean = dirty.length === 0

// --- 阶段定义（顺序执行；任一失败即终止，不产出 artifact） ---
const PW = 'corepack pnpm --filter play-web exec playwright test'
const STAGES = [
  ['registry', 'registry 校验', 'corepack pnpm run registry:validate'],
  ['format', 'prettier 格式检查', 'corepack pnpm run format:check'],
  ['lint', 'ESLint', 'corepack pnpm run lint'],
  ['typecheck', 'TypeScript 严格类型', 'corepack pnpm run typecheck'],
  ['unitTest', '单元测试（turbo）', 'corepack pnpm run test'],
  ['graduationTests', '毕业机制回归测试', 'corepack pnpm run test:scripts'],
  ['playBuild', 'play-web 生产构建', 'corepack pnpm --filter play-web run build'],
  ['storybookBuild', 'Storybook 构建', 'corepack pnpm --filter play-web run build-storybook'],
  ['interaction', 'Playwright 关键交互', `${PW} interaction`],
  ['a11y', 'Playwright axe 无障碍', `${PW} a11y`],
  ['visual', 'Playwright 亮/暗视觉回归', `${PW} visual`],
]

const logDir = join(tmpdir(), 'kit-verify', shortSha)
mkdirSync(logDir, { recursive: true })

const results = {}
let allPass = true
const started = Date.now()
for (const [id, label, command] of STAGES) {
  const t0 = Date.now()
  process.stdout.write(`▶ [${id}] ${label} ... `)
  const logPath = join(logDir, `${id}.log`)
  const r = spawnSync(command, {
    cwd: root,
    shell: true,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    env: {
      ...process.env,
      PLAYWRIGHT_DOWNLOAD_HOST: 'https://cdn.npmmirror.com/binaries/playwright',
    },
  })
  const output = `${r.stdout ?? ''}${r.stderr ?? ''}`
  writeFileSync(logPath, output)
  const pass = r.status === 0
  const durationMs = Date.now() - t0
  results[id] = { label, status: pass ? 'pass' : 'fail', durationMs, log: logPath }
  console.log(pass ? `✓ (${durationMs}ms)` : `✗ (${durationMs}ms, exit ${r.status})`)
  if (!pass) {
    allPass = false
    const tail = output.trim().split(/\r?\n/).slice(-25).join('\n')
    console.error(`\n---- ${id} 失败，日志尾部（完整：${logPath}）----\n${tail}\n`)
    break
  }
}

if (!allPass) {
  console.error('✗ quality:stable 有阶段失败，未生成验证产物；Stable 毕业被阻断。')
  process.exit(1)
}

// --- 写出绑定当前 SHA 的验证产物 ---
const verifyDir = join(REG_DIR, 'graduation', 'verify')
mkdirSync(verifyDir, { recursive: true })
const artifact = {
  sha,
  shortSha,
  generatedAt: new Date().toISOString(),
  treeClean,
  dirtyCount: treeClean ? 0 : dirty.split(/\r?\n/).filter(Boolean).length,
  verifiedStacks: ['web'],
  durationMs: Date.now() - started,
  stages: results,
  allPass: true,
}
writeFileSync(join(verifyDir, `${sha}.json`), JSON.stringify(artifact, null, 2) + '\n')

console.log(
  `\n✓ quality:stable 全部通过（${Object.keys(results).length} 阶段，${artifact.durationMs}ms）`,
)
console.log(`  验证产物：registry/graduation/verify/${sha}.json`)
console.log(`  treeClean=${treeClean}；verifiedStacks=web`)
if (!treeClean)
  console.log('  提示：工作区有未提交改动；产物仍绑定 HEAD，但建议在干净的提交上验收。')
console.log('  现在可运行：pnpm graduate --stack web')
