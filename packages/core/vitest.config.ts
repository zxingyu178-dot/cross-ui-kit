import { defineConfig } from 'vitest/config'

/**
 * @kit/core 测试配置。
 * 环境用 happy-dom：源码本身 headless（不碰 DOM），但 Hook 测试（useRequest）
 * 需要一个 DOM 来承载 renderHook；纯函数测试在此环境同样通过。
 */
export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
})
