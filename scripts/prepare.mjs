/**
 * install 生命周期钩子（package.json -> scripts.prepare）。
 * 仅在真实 git 仓库内启用 husky 钩子；当源码以 zip 形式分发（不含 .git）时，
 * 直接跳过，避免 `pnpm install` 因 husky 找不到 .git 而中断，保证可移植性。
 */
import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const gitDir = join(root, '.git')

if (!existsSync(gitDir)) {
  console.log('[prepare] 未检测到 .git（源码分发包），跳过 husky 钩子安装。')
  process.exit(0)
}

const require = createRequire(import.meta.url)
let huskyBin
try {
  const pkgPath = require.resolve('husky/package.json', { paths: [root] })
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
  const binField = typeof pkg.bin === 'string' ? pkg.bin : pkg.bin?.husky
  huskyBin = join(dirname(pkgPath), binField)
} catch {
  console.log('[prepare] husky 尚未安装，跳过（依赖安装完成后可重跑 pnpm install）。')
  process.exit(0)
}

const res = spawnSync(process.execPath, [huskyBin], { cwd: root, stdio: 'inherit' })
process.exit(res.status ?? 0)
