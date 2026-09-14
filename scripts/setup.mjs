/**
 * 一键冷启动引导（pnpm setup）——新电脑拿到源码后只跑这一条命令即可就绪。
 *
 * 流程：环境检查（Node / pnpm，缺 pnpm 自动尝试 corepack）
 *      -> pnpm install -> pnpm tokens:build -> pnpm registry:validate
 *      -> （可选 --check）pnpm quality
 *
 * 参数：
 *   --skip-install   跳过依赖安装（已装过，仅重建 tokens 并校验）
 *   --check          末尾追加全量质量门 pnpm quality
 *   --help, -h       帮助
 *
 * 跨平台、仅依赖 Node 内置模块；幂等，可重复执行。
 */
import {
  ROOT,
  color,
  readRootPkg,
  parsePackageManager,
  step,
  ok,
  fail,
  info,
  run,
  getVersion,
  majorOf,
} from './_lib.mjs'

const argv = process.argv.slice(2)
if (argv.includes('--help') || argv.includes('-h')) {
  console.log(`cross-ui-kit 一键引导
  node scripts/setup.mjs [--skip-install] [--check]
  --skip-install  跳过 pnpm install
  --check         末尾跑全量质量门 pnpm quality`)
  process.exit(0)
}
const skipInstall = argv.includes('--skip-install')
const withQuality = argv.includes('--check')

const pkg = readRootPkg()
const pm = parsePackageManager(pkg)
const needNodeMajor = majorOf(pkg.engines?.node?.replace(/[^\d.]/g, '') + '.0') ?? 22
const TOTAL = withQuality ? 4 : 3

console.log(color.bold('\ncross-ui-kit · 一键环境引导'))
info(`仓库根：${ROOT}`)
info(`要求 Node >= ${needNodeMajor}，包管理器 ${pm.name}@${pm.version}`)

// ---------- Step 0：环境检查 ----------
step(0, TOTAL, '检查运行环境（Node / pnpm）')

const nodeMajor = majorOf(process.version)
if (nodeMajor === null || nodeMajor < needNodeMajor) {
  fail(`Node 版本过低：当前 ${process.version}，需要 >= ${needNodeMajor}.x LTS`)
  console.log(
    `  请安装 Node ${needNodeMajor} LTS：https://nodejs.org/ （安装后重开终端再运行本脚本）`,
  )
  process.exit(1)
}
ok(`Node ${process.version}`)

/** 解析可用的 pnpm 运行器，返回命令数组（如 ['pnpm'] 或 ['corepack','pnpm']），不可用返回 null */
function resolvePnpmRunner() {
  if (getVersion(pm.name)) return [pm.name]
  // 尝试 corepack（Node 自带）激活仓库锁定版本
  info('未找到 pnpm，尝试通过 corepack 激活…')
  run('corepack', ['enable'], { silent: true })
  run('corepack', ['prepare', `${pm.name}@${pm.version}`, '--activate'], { silent: true })
  if (getVersion(pm.name)) return [pm.name]
  // shim 未进入当前 PATH 时，直接用 corepack 作为运行器
  if (
    getVersion('corepack') &&
    run('corepack', [pm.name, '--version'], { silent: true }).status === 0
  ) {
    return ['corepack', pm.name]
  }
  return null
}

const runner = resolvePnpmRunner()
if (!runner) {
  fail('未找到 pnpm，且 corepack 自动激活失败。')
  console.log(
    `  请手动安装后重试：${color.cyan(`npm i -g ${pm.name}@${pm.version}`)}，或先运行 ${color.cyan('corepack enable')}（可能需要管理员权限）。`,
  )
  process.exit(1)
}
const pnpmVersion =
  runner.length === 1
    ? getVersion(pm.name)
    : run('corepack', [pm.name, '--version'], { silent: true }).stdout
ok(`pnpm ${pnpmVersion}（运行器：${runner.join(' ')}）`)

const runPnpm = (args, opts) => run(runner[0], [...runner.slice(1), ...args], opts)

// ---------- Step 1：依赖安装 ----------
let cursor = 1
if (!skipInstall) {
  step(cursor, TOTAL, '安装依赖（pnpm install，含原生依赖构建）')
  const r = runPnpm(['install'])
  if (r.status !== 0) {
    fail('依赖安装失败。请检查网络/registry；必要时删除 node_modules 后重试。')
    process.exit(1)
  }
  ok('依赖安装完成')
  cursor++
} else {
  info('已跳过依赖安装（--skip-install）')
}

// ---------- Step 2：构建 Design Token（dist 不入库，必须生成） ----------
step(cursor, TOTAL, '构建 Design Token 三栈产物（pnpm tokens:build）')
{
  const r = runPnpm(['tokens:build'])
  if (r.status !== 0) {
    fail('Token 构建失败：检查 packages/tokens/src 源 JSON 与 sd.config.mjs。')
    process.exit(1)
  }
  ok('Token 产物已生成（web/mini/native 共 11 个）')
}
cursor++

// ---------- Step 3：registry 校验 ----------
step(cursor, TOTAL, '校验组件 registry（pnpm registry:validate）')
{
  const r = runPnpm(['registry:validate'])
  if (r.status !== 0) {
    fail('registry 校验未通过，按提示修正 registry/*.json。')
    process.exit(1)
  }
  ok('registry 校验通过')
}
cursor++

// ---------- 可选：全量质量门 ----------
if (withQuality) {
  step(cursor, TOTAL, '全量质量门（pnpm quality）')
  const r = runPnpm(['quality'])
  if (r.status !== 0) {
    fail('质量门未通过，请按上面的报错修复。')
    process.exit(1)
  }
  ok('质量门全部通过')
}

console.log(`\n${color.green(color.bold('✔ 环境就绪'))}  下一步：`)
console.log(
  `  启动网页预览：${color.cyan('pnpm --filter play-web dev')}  ->  http://localhost:5173/`,
)
console.log(`  环境体检：    ${color.cyan('pnpm doctor')}`)
console.log(`  其他端（小程序/桌面/原生）前置工具见 ${color.cyan('docs/11-portability.md')}`)
