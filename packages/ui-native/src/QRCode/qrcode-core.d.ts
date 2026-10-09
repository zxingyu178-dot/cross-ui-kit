/**
 * qrcode 包平台无关核心（lib/core/qrcode）的最小类型声明。
 *
 * 背景：qrcode 的默认入口在 Metro 下会按 package.json 的 `browser` 字段
 * 解析到 lib/browser.js，其顶层 require 的 renderer/canvas.js 引用
 * `document.createElement('canvas')`，在 React Native 中不存在 document，
 * 会导致 bundle 在模块求值期直接崩溃（白屏）。
 * Native 端只需要矩阵数据（create().modules），因此直接引用不依赖
 * DOM / fs / zlib 的 core/qrcode，并在此补充其类型。
 */
declare module 'qrcode/lib/core/qrcode' {
  export interface QRModules {
    size: number
    data: Uint8Array | number[]
  }
  export interface QRCreated {
    modules: QRModules
  }
  export interface QRCoreOptions {
    errorCorrectionLevel?: string
    version?: number
    maskPattern?: number
    margin?: number
  }
  export function create(data: string | ReadonlyArray<unknown>, options?: QRCoreOptions): QRCreated
}
