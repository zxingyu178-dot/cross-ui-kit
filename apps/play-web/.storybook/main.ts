import tailwindcss from '@tailwindcss/vite'
import type { StorybookConfig } from '@storybook/react-vite'
import { fileURLToPath, URL } from 'node:url'
import { mergeConfig } from 'vite'

// .storybook 位于 apps/play-web/.storybook，上溯三级到仓库根
const pkgDir = (pkg: string) => fileURLToPath(new URL(`../../../packages/${pkg}/`, import.meta.url))

// 与 apps/play-web/vite.config.ts 保持一致的 workspace 源码别名
const aliases = [
  { find: /^@kit\/ui-web\/(.*)$/, replacement: pkgDir('ui-web') + '$1' },
  { find: /^@kit\/core\/(.*)$/, replacement: pkgDir('core') + '$1' },
  { find: /^@kit\/ui-web$/, replacement: pkgDir('ui-web') + 'src/index.ts' },
  { find: /^@kit\/core$/, replacement: pkgDir('core') + 'src/index.ts' },
  { find: /^@kit\/icons$/, replacement: pkgDir('icons') + 'src/index.ts' },
]

const config: StorybookConfig = {
  stories: ['../../../packages/ui-web/src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: { autodocs: 'tag' },
  viteFinal: async (viteConfig) =>
    mergeConfig(viteConfig, {
      plugins: [tailwindcss()],
      resolve: { alias: aliases },
    }),
}

export default config
