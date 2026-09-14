import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// workspace 源码包直接指到 TS 源码，保证 dev/build 都消费最新源码与类型
const pkgDir = (pkg: string) => fileURLToPath(new URL(`../../packages/${pkg}/`, import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      // 深层路径（如 @kit/ui-web/src/Button/__examples__/...，捕获组自带 src/）
      { find: /^@kit\/ui-web\/(.*)$/, replacement: pkgDir('ui-web') + '$1' },
      { find: /^@kit\/core\/(.*)$/, replacement: pkgDir('core') + '$1' },
      // 包入口
      { find: /^@kit\/ui-web$/, replacement: pkgDir('ui-web') + 'src/index.ts' },
      { find: /^@kit\/core$/, replacement: pkgDir('core') + 'src/index.ts' },
      { find: /^@kit\/icons$/, replacement: pkgDir('icons') + 'src/index.ts' },
      // @kit/tokens 的 CSS 走包 exports（dist 产物），不在此 alias
    ],
  },
})
