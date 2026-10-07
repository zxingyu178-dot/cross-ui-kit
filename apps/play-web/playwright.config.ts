import { defineConfig, devices } from '@playwright/test'

/**
 * 组件验收：以 Storybook 为被测对象
 * - e2e/a11y.spec.ts   遍历首批毕业组件的 story，axe 断言无 serious/critical（毕业门 G8）
 * - e2e/visual.spec.ts 首批组件亮色/暗色截图 golden 视觉回归（毕业门 G6/G9）
 * 首次生成/更新基线：pnpm e2e:update
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: 1,
  workers: 2,
  reporter: [['list'], ['html', { open: 'never' }]],
  timeout: 60000,
  expect: {
    timeout: 10000,
    toHaveScreenshot: { maxDiffPixelRatio: 0.02, animations: 'disabled' },
  },
  use: {
    baseURL: 'http://localhost:6006',
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'pnpm storybook',
    url: 'http://localhost:6006',
    reuseExistingServer: true,
    timeout: 180000,
  },
})
