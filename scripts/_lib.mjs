/**
 * 工程脚本共享工具：路径、彩色日志、命令执行、版本读取、packageManager 解析。
 * 仅依赖 Node 内置模块，保证跨平台（Windows / macOS / Linux）零额外依赖。
 */
import { spawnSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

const c = {
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  cyan: (s) => `\x1b[36m${s}\x1b[0m`,
  gray: (s) => `\x1b[90m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
}
export const color = c

export function readRootPkg() {
  return JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))
}

/** 解析 packageManager 字段，如 pnpm@12.4.1 -> { name:'pnpm', version:'12.4.1' } */
export function parsePackageManager(pkg) {
  const raw = pkg.packageManager ?? 'pnpm'
  const [name, version] = raw.split('@')
  return { name, version }
}

/** 打印一步标题 */
export function step(n, total, title) {
  console.log(`\n${c.cyan(`[${n}/${total}]`)} ${c.bold(title)}`)
}

export function ok(msg) {
  console.log(`${c.green('✔')} ${msg}`)
}
export function warn(msg) {
  console.log(`${c.yellow('!')} ${msg}`)
}
export function fail(msg) {
  console.log(`${c.red('✘')} ${msg}`)
}
export function info(msg) {
  console.log(`${c.gray('·')} ${msg}`)
}

/**
 * 执行命令（跨平台；shell:true 以解析 Windows 的 .cmd/.ps1 shim）。
 * @returns {{status:number, stdout:string, stderr:string}}
 */
export function run(cmd, args = [], opts = {}) {
  const res = spawnSync(cmd, args, {
    cwd: ROOT,
    shell: true,
    encoding: 'utf8',
    stdio: opts.silent ? ['ignore', 'pipe', 'pipe'] : 'inherit',
  })
  return {
    status: res.status ?? 1,
    stdout: (res.stdout ?? '').trim(),
    stderr: (res.stderr ?? '').trim(),
  }
}

/** 读取某命令的 --version；命令不存在返回 null（静默） */
export function getVersion(cmd, args = ['--version']) {
  const r = run(cmd, args, { silent: true })
  if (r.status !== 0) return null
  return r.stdout.split(/\r?\n/)[0].trim() || null
}

/** 取 major 版本号；无法解析返回 null */
export function majorOf(version) {
  if (!version) return null
  const m = version.match(/(\d+)\.(\d+)\.(\d+)/)
  return m ? Number(m[1]) : null
}

export function exists(relPath) {
  return existsSync(join(ROOT, relPath))
}
