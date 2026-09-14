# @kit/ui-mini · 小端组件栈

服务于**微信/支付宝/字节小程序**与**移动 H5**（Taro 4 编译，React 语法）。

## 技术底座

- Taro 4（React + Vite）：一套代码编译多端小程序 + H5；
- NutUI-React-Taro（主力，京东同厂、80+ 组件）；Taroify（Vant 视觉体系，缺口补充）；
- 样式：weapp-tailwindcss / unocss-applet（类名转义、rpx 转换）+ `@kit/tokens` 产物 `dist/mini/tokens.*.scss`，并覆盖 NutUI 主题 CSS 变量；
- 预览：H5 形态可进 Storybook；小程序原生形态以 `__examples__` 示例页 + 微信开发者工具为准。

## 封装要求

- 不直接把 NutUI 原始 API 暴露给业务：在本包做包装组件，统一 props/事件命名（与 ui-web/ui-native 对齐映射表）；
- 触控热区 ≥ 44px（`touch-min` token）；下拉刷新/触底加载/安全区/NavBar 按 docs/07 实现；
- 视觉值只引用 token SCSS 变量，NutUI 主题通过 `nutui-theme.scss` 全局覆盖，禁止组件内硬编码；
- 平台能力（存储/路由/扫码/剪贴板）走 Taro API 并收敛到 core adapter，业务组件不直接调。

## 目录约定

```
src/
├─ Button/
│  ├─ Button.tsx          # NutUI 封装
│  ├─ Button.types.ts
│  ├─ Button.scss? 可按需
│  ├─ index.ts
│  ├─ README.md
│  └─ __examples__/       # 示例页（H5 与小程序共用）
└─ index.ts
```
