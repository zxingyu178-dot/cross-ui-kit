import { defineConfig } from 'vitest/config'

/**
 * play-web 的 vitest 配置：本壳暂无单测（test 用 --passWithNoTests），
 * 必须排除 e2e/——那是 Playwright 测试（调用 @playwright/test 的 test()），
 * 若被 vitest 收录会报 "Playwright Test did not expect test() to be called here"。
 */
export default defineConfig({
  test: {
    exclude: ['e2e/**', '**/node_modules/**', '**/dist/**', 'storybook-static/**'],
  },
})
