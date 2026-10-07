import { defineConfig } from 'vitest/config'

/**
 * @kit/ui-web 组件测试配置。
 * happy-dom 承载 React Testing Library 渲染；视觉样式（Tailwind）不参与断言，
 * 测试聚焦行为、角色、受控状态与可访问性。视觉/真实交互由 Playwright（apps/play-web/e2e）覆盖。
 */
export default defineConfig({
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})
