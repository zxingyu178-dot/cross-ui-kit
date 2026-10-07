import { defineConfig } from 'vitest/config'

/**
 * 根级 vitest：仅运行 scripts/ 下的【工程机制回归测试】（如毕业门 graduate）。
 * 各包组件/逻辑单测仍由各包自己的 vitest 配置 + turbo test 运行，互不干扰。
 */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['scripts/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/dist/**'],
  },
})
