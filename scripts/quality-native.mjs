/**
 * quality:native —— Native 工程完整性检查（不含毕业语义，不会把 beta 改 stable）。
 * 阶段：
 *  1. native 导入冒烟（20 组件目录 / 导出 / Gallery 入口）
 *  2. play-native TypeScript
 *  3. play-native ESLint
 *  4. expo export（android bundle，最能暴露模块解析 / 打包错误，无需设备）
 * Native 组件毕业仍须独立走 `pnpm graduate --stack native`。
 */
import { execSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const appDir = resolve(root, 'apps/play-native')

function run(label, cmd, cwd = root) {
  console.log(`\n=== ${label} ===`)
  execSync(cmd, { cwd, stdio: 'inherit' })
}

try {
  run('1/4 native 导入冒烟', 'node scripts/native-smoke.mjs')
  run('2/4 play-native TypeScript', 'pnpm --filter @kit/play-native typecheck')
  run('3/4 play-native ESLint', 'pnpm --filter @kit/play-native lint')
  run('4/4 Expo export (android)', 'pnpm export', appDir)
  console.log('\n✓ quality:native 全部通过（工程完整性；native 状态仍为 beta）')
} catch (err) {
  console.error('\n✗ quality:native 失败：', err?.message ?? err)
  process.exit(1)
}
