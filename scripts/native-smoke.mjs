/**
 * Native 导入冒烟（静态、确定性）：
 *  - 首批 20 canonical 在 ui-native 都有组件目录 + index + 被 src/index.ts 导出
 *  - play-native Gallery 清单为每个 canonical 建了独立演示入口
 *  - 清单状态在 native 端必须为 beta（未独立毕业）
 * 纯 Node，无设备依赖；这是“20 个组件均可被工程取用”的静态保证，不代表运行时毕业。
 */
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => readFileSync(resolve(root, p), 'utf8')

const firstBatch = JSON.parse(read('registry/graduation/first-batch.json'))
const canonicals = Array.isArray(firstBatch)
  ? firstBatch
  : (firstBatch.components ?? firstBatch.items ?? [])

const nativeIndex = read('packages/ui-native/src/index.ts')
const manifest = read('apps/play-native/src/gallery/manifest.ts')

const errors = []

for (const raw of canonicals) {
  const canonical = typeof raw === 'string' ? raw : (raw.name ?? raw.canonical)
  const dir = `packages/ui-native/src/${canonical}`
  if (!existsSync(resolve(root, `${dir}/index.ts`))) {
    errors.push(`缺少组件出口：${dir}/index.ts`)
  }
  const re = new RegExp(`export \\* from '\\./${canonical}'`)
  if (!re.test(nativeIndex)) {
    errors.push(`ui-native/src/index.ts 未导出 ${canonical}`)
  }
  if (!manifest.includes(`name: '${canonical}'`)) {
    errors.push(`play-native Gallery 缺少 ${canonical} 的演示入口`)
  }
}

// native 未毕业：清单条目不允许出现 stable（类型联合 'stable' | 'beta' 不算）
if (/status:\s*'stable'\s*,/.test(manifest)) {
  errors.push('native Gallery 出现 stable 条目，但 native 尚未独立毕业')
}

if (errors.length > 0) {
  for (const e of errors) console.error('✗', e)
  process.exit(1)
}

console.log(`✓ native smoke：${canonicals.length} 个组件目录/导出/演示入口齐全，状态均 beta`)
