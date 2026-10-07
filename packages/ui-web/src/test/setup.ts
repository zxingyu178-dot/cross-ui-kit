/**
 * 组件测试全局初始化：
 * 1. 注入 jest-dom 匹配器（toBeInTheDocument / toHaveAttribute 等）；
 * 2. 补齐 happy-dom 缺失、Radix 运行依赖的浏览器 API（matchMedia / ResizeObserver / scrollIntoView）。
 */
import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

// matchMedia（Radix 暗色/媒体查询探测）
if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

// ResizeObserver（Radix Select/Popover/Tooltip 定位）
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.ResizeObserver ??= ResizeObserverMock
window.ResizeObserver ??= ResizeObserverMock as unknown as typeof ResizeObserver

// scrollIntoView（Radix Select 选项滚动）
Element.prototype.scrollIntoView ??= vi.fn()

// Pointer Capture（happy-dom 缺失，Radix Select 拖拽/焦点捕获依赖）
Element.prototype.hasPointerCapture ??= vi.fn(() => false)
Element.prototype.setPointerCapture ??= vi.fn()
Element.prototype.releasePointerCapture ??= vi.fn()
