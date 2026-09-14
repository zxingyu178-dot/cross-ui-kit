/**
 * 可移植打包（pnpm pack:portable）——生成可直接发送到其他电脑的源码 zip。
 *
 * 设计：
 *  - 只打包“源”：排除 node_modules / dist / .turbo / 构建产物 / 日志 / 密钥 / 压缩包；
 *    node_modules 含平台相关原生二进制（esbuild/swc），跨机不可复用，由对方 pnpm install 重建；
 *    tokens dist 不入库，由对方 pnpm setup 里的 tokens:build 生成。
 *  - 默认不含 .git（给他人的干净源码）；加 --with-git 可连提交历史一起（团队内传递）。
 *  - 先复制到系统“英文临时目录”再压缩，规避项目路径含中文/空格导致部分压缩工具异常。
 *  - 跨平台：Windows 用 PowerShell Compress-Archive；macOS/Linux 用 zip。
 *
 * 参数：
 *   --with-git     连同 .git 历史一起打包
 *   --out <路径>   自定义 zip 输出位置（默认 releases/cross-ui-kit-portable-<时间戳>.zip）
 */
import { spawnSync } from 'node:child_process'
import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  rmSync,
  statSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { ROOT, color, ok, fail, info } from './_lib.mjs'

const argv = process.argv.slice(2)
const withGit = argv.includes('--with-git')
const outIdx = argv.indexOf('--out')
const customOut = outIdx >= 0 ? argv[outIdx + 1] : null

const PKG_ROOT_NAME = 'cross-ui-kit'

// 任意层级出现即排除的目录名
const EXCLUDE_DIRS = new Set([
  'node_modules',
  'dist',
  '.turbo',
  '.taro',
  '.swc',
  'target', // Tauri src-tauri/target
  '.expo',
  '.tamagui',
  'android', // Expo prebuild 生成物
  'ios',
  'coverage',
  'releases', // 本脚本输出目录，避免递归打包
  'out',
  'build',
  '.pnpm-store',
])
if (!withGit) EXCLUDE_DIRS.add('.git')

// 文件级排除（相对路径的文件名）
function isExcludedFile(base) {
  if (base === '.env') return true
  if (/^\.env\.(?!example)/.test(base)) return true // 保留 .env.example
  if (/\.(tsbuildinfo|log|zip|7z|rar|tgz|tar|gz)$/i.test(base)) return true
  if (/\.orig\./.test(base)) return true
  if (base === 'Thumbs.db' || base === '.DS_Store') return true
  if (/^(pnpm-debug|npm-debug|yarn-error)/i.test(base)) return true
  return false
}

// ---------- 1. 复制到英文临时目录（手写递归，绝不解引用 node_modules 的 junction/symlink） ----------
const stageRoot = mkdtempSync(join(tmpdir(), 'cross-ui-kit-pack-'))
const stagePkg = join(stageRoot, PKG_ROOT_NAME)
console.log(color.bold('\ncross-ui-kit · 打包可移植源码'))
info(`暂存目录：${stagePkg}`)

let count = 0
const copyTree = (srcDir, destDir, relParts) => {
  mkdirSync(destDir, { recursive: true })
  for (const ent of readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = join(srcDir, ent.name)
    const destPath = join(destDir, ent.name)
    const rel = [...relParts, ent.name]
    // 符号链接 / junction：pnpm 的 node_modules 全是链接，一律不跟随、不复制
    let lst
    try {
      lst = lstatSync(srcPath)
    } catch {
      continue
    }
    if (lst.isSymbolicLink()) continue
    if (ent.isDirectory()) {
      if (EXCLUDE_DIRS.has(ent.name)) continue // 整目录跳过，不进入
      copyTree(srcPath, destPath, rel)
    } else if (ent.isFile()) {
      if (isExcludedFile(ent.name)) continue
      copyFileSync(srcPath, destPath)
      count++
    }
  }
}
copyTree(ROOT, stagePkg, [])
ok(`已收集 ${count} 个源文件（已排除依赖与构建产物）`)

// 健全性：关键文件必须在
const mustHave = [
  'package.json',
  'pnpm-workspace.yaml',
  'pnpm-lock.yaml',
  'AGENTS.md',
  'README.md',
  '.gitignore',
  '.gitattributes',
  'packages',
  'apps',
  'docs',
  'registry',
  'scripts',
]
const missing = mustHave.filter((f) => !existsSync(join(stagePkg, f)))
if (missing.length) {
  fail(`暂存内容缺失关键项：${missing.join(', ')}，终止打包。`)
  rmSync(stageRoot, { recursive: true, force: true })
  process.exit(1)
}
// 健全性：绝不能混入 node_modules / dist
for (const bad of ['node_modules', join('packages', 'tokens', 'dist')]) {
  if (existsSync(join(stagePkg, bad))) {
    fail(`暂存内容意外包含 ${bad}，终止打包。`)
    rmSync(stageRoot, { recursive: true, force: true })
    process.exit(1)
  }
}
ok('内容健全性校验通过（无 node_modules / dist，关键文件齐全）')

// ---------- 2. 压缩 ----------
const stamp = () => {
  const d = new Date()
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`
}
const releasesDir = join(ROOT, 'releases')
mkdirSync(releasesDir, { recursive: true })
const outZip = customOut ? customOut : join(releasesDir, `cross-ui-kit-portable-${stamp()}.zip`)
mkdirSync(join(outZip, '..'), { recursive: true })

info('正在压缩…')
let zipRes
if (process.platform === 'win32') {
  const cmd = `Compress-Archive -LiteralPath '${stagePkg}' -DestinationPath '${outZip}' -Force`
  zipRes = spawnSync('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-Command', cmd], {
    encoding: 'utf8',
  })
} else {
  zipRes = spawnSync('zip', ['-rqy', outZip, PKG_ROOT_NAME], { cwd: stageRoot, encoding: 'utf8' })
}
if (zipRes.status !== 0 || !existsSync(outZip)) {
  fail('压缩失败：' + (zipRes.stderr || zipRes.stdout || '未知错误'))
  rmSync(stageRoot, { recursive: true, force: true })
  process.exit(1)
}

const sizeMb = (statSync(outZip).size / 1024 / 1024).toFixed(2)
rmSync(stageRoot, { recursive: true, force: true })

console.log(`\n${color.green(color.bold('✔ 打包完成'))}`)
console.log(`  输出：${color.cyan(outZip)}`)
console.log(
  `  大小：${sizeMb} MB，源文件 ${count} 个${withGit ? '（含 .git 历史）' : '（不含 .git）'}`,
)
console.log(`\n${color.bold('对方电脑使用三步：')}`)
console.log(`  1) 安装 Node 22 LTS（https://nodejs.org/，自带 corepack）`)
console.log(`  2) 解压 zip（建议放到${color.bold('纯英文、无空格')}路径，如 D:\\cross-ui-kit）`)
console.log(
  `  3) 在解压目录执行 ${color.cyan('pnpm setup')}（无 pnpm 会自动经 corepack 激活），完成后 ${color.cyan('pnpm --filter play-web dev')}`,
)
console.log(`  详见 ${color.cyan('docs/11-portability.md')}`)
