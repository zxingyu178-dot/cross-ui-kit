/**
 * 环境体检（pnpm doctor）——只读检查，不改动任何文件。
 * 必需项（Node / pnpm / 依赖 / token 产物 / registry）任一不过则退出码 1；
 * 各端可选工具链（Rust / 微信开发者工具 / Android / iOS）仅提示，不阻断。
 */
import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import {
  ROOT,
  color,
  readRootPkg,
  parsePackageManager,
  ok,
  warn,
  fail,
  getVersion,
  majorOf,
} from './_lib.mjs'

const pkg = readRootPkg()
const pm = parsePackageManager(pkg)
const needNodeMajor = majorOf(pkg.engines?.node?.replace(/[^\d.]/g, '') + '.0') ?? 22

const required = []
const optional = []
const record = (arr, name, pass, detail, hint) => arr.push({ name, pass, detail, hint })

// ---- 必需：Node ----
const nodeMajor = majorOf(process.version)
record(
  required,
  `Node.js >= ${needNodeMajor}`,
  nodeMajor !== null && nodeMajor >= needNodeMajor,
  `当前 ${process.version}`,
  '到 https://nodejs.org/ 安装 22 LTS',
)

// ---- 必需：pnpm ----
const pnpmVer = getVersion(pm.name)
record(
  required,
  `pnpm（锁定 ${pm.version}）`,
  !!pnpmVer,
  pnpmVer ? `当前 ${pnpmVer}` : '未找到',
  `运行 corepack enable，或 npm i -g ${pm.name}@${pm.version}`,
)

// ---- 必需：git ----
const gitVer = getVersion('git')
record(required, 'git', !!gitVer, gitVer ? gitVer : '未找到', '安装 git：https://git-scm.com/')

// ---- 必需：依赖已安装 ----
const depsInstalled = existsSync(join(ROOT, 'node_modules', '.pnpm'))
record(
  required,
  '依赖已安装（node_modules）',
  depsInstalled,
  depsInstalled ? 'node_modules/.pnpm 存在' : '缺失',
  '运行 pnpm install（或 pnpm setup）',
)

// ---- 必需：Token 11 产物 ----
const tokenOutputs = [
  'web/tokens.light.css',
  'web/tokens.dark.css',
  'mini/tokens.light.scss',
  'mini/tokens.dark.scss',
  'mini/tokens.light.css',
  'mini/tokens.dark.css',
  'mini/tokens.light.ts',
  'mini/tokens.dark.ts',
  'native/tamagui.light.ts',
  'native/tamagui.dark.ts',
  'docs/tokens-table.md',
]
const tokenDist = join(ROOT, 'packages', 'tokens', 'dist')
const missingTokens = tokenOutputs.filter((f) => !existsSync(join(tokenDist, f)))
record(
  required,
  'Design Token 产物（11 个）',
  missingTokens.length === 0,
  missingTokens.length === 0
    ? '全部存在'
    : `缺 ${missingTokens.length} 个：${missingTokens.join(', ')}`,
  '运行 pnpm tokens:build（或 pnpm setup）',
)

// ---- 必需：registry 合法（不经 shell，避免 node.exe 路径含空格被截断）----
const reg = spawnSync(process.execPath, [join(ROOT, 'scripts', 'validate-registry.mjs')], {
  cwd: ROOT,
  encoding: 'utf8',
})
record(
  required,
  'registry 校验',
  reg.status === 0,
  reg.status === 0 ? '通过' : '未通过',
  '运行 pnpm registry:validate 查看明细',
)

// ---- 可选：corepack ----
record(
  optional,
  'corepack（免全局装 pnpm）',
  !!getVersion('corepack'),
  getVersion('corepack') ?? '未找到',
  'Node 自带；被精简的 Node 发行版需手动启用',
)

// ---- 可选：Tauri 桌面（Rust）----
const rustVer = getVersion('rustc')
record(
  optional,
  'Rust / cargo（Tauri 桌面打包）',
  !!rustVer,
  rustVer ?? '未安装',
  '安装 rustup：https://rustup.rs/ ，并装 VS C++ Build Tools(Win) 与 WebView2',
)

// ---- 可选：Android（Expo native / 模拟器）----
const adbVer = getVersion('adb')
record(
  optional,
  'adb / Android SDK（Expo 安卓）',
  !!adbVer,
  adbVer ? adbVer.split(/\r?\n/)[0] : '未安装',
  '安装 Android Studio；配置 ANDROID_HOME',
)

// ---- 可选：iOS（仅 macOS）----
if (process.platform === 'darwin') {
  const xcode = getVersion('xcodebuild', ['-version'])
  record(
    optional,
    'Xcode（Expo iOS）',
    !!xcode,
    xcode ? xcode.split(/\r?\n/)[0] : '未安装',
    '从 App Store 安装 Xcode 并执行 xcode-select --install',
  )
}

// ---- 可选：微信开发者工具（小程序）----
function detectWechatDevtools() {
  const candidates = []
  if (process.platform === 'win32') {
    const pf =
      process.env['ProgramFiles(x86)'] ?? process.env.ProgramFiles ?? 'C:\\Program Files (x86)'
    const pf64 = process.env.ProgramFiles ?? 'C:\\Program Files'
    candidates.push(
      join(pf, 'Tencent', '微信web开发者工具', 'cli.bat'),
      join(pf64, 'Tencent', '微信web开发者工具', 'cli.bat'),
    )
  } else if (process.platform === 'darwin') {
    candidates.push('/Applications/wechatwebdevtools.app/Contents/MacOS/cli')
  } else {
    candidates.push('/opt/wechatwebdevtools/cli')
  }
  return candidates.find((p) => existsSync(p))
}
const wechat = detectWechatDevtools()
record(
  optional,
  '微信开发者工具（小程序调试）',
  !!wechat,
  wechat ? `已安装：${wechat}` : '未在常见路径发现',
  '下载稳定版：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html',
)

// ---------- 输出 ----------
console.log(color.bold('\ncross-ui-kit · 环境体检\n'))
console.log(color.bold('必需项'))
let requiredFail = 0
for (const r of required) {
  if (r.pass) {
    ok(`${r.name}  ${color.gray('— ' + r.detail)}`)
  } else {
    requiredFail++
    fail(`${r.name}  ${color.gray('— ' + r.detail)}\n      修复：${r.hint}`)
  }
}
console.log(`\n${color.bold('可选项（按需，不影响网页预览）')}`)
for (const r of optional) {
  if (r.pass) {
    ok(`${r.name}  ${color.gray('— ' + r.detail)}`)
  } else {
    warn(`${r.name}  ${color.gray('— ' + r.detail)}\n      ${r.hint}`)
  }
}

console.log(
  `\n${color.bold('结论：')}`,
  requiredFail === 0
    ? color.green('必需项全部就绪，可开始开发（pnpm --filter play-web dev）。')
    : color.red(`${requiredFail} 个必需项未就绪，按上面“修复”提示处理，或直接运行 pnpm setup。`),
)
process.exit(requiredFail === 0 ? 0 : 1)
