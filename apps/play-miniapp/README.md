# play-miniapp · 小程序 + H5 演示壳（Taro 4 + NutUI-React）

用途：验证 `@kit/ui-mini` 在微信小程序与移动 H5 可用。

## 初始化（P1 执行，一次）

```bash
# 在 apps/ 目录下（选择 React + TypeScript + Vite 模板）
pnpm create taro play-miniapp
cd play-miniapp
# 主力组件库
pnpm add @nutui/nutui-react-taro
# 小程序原子样式（二选一，推荐 weapp-tailwindcss；Tailwind v4 注意 cssEntries 绝对路径配置）
pnpm add -D weapp-tailwindcss
# 工作区依赖
pnpm add @kit/tokens @kit/core @kit/icons @kit/ui-mini
```

## 接入要求

- 全局样式引入 `@kit/tokens` 的 `tokens.light.scss/dark.scss`，并配置 NutUI 主题变量覆盖（`nutui-theme.scss`）；
- 组件只从 `@kit/ui-mini` 引用；平台 API 收敛到 core adapter；
- 设计基准 750rpx，热区 ≥44px；
- 小程序工程如遇依赖提升问题，在本目录 `.npmrc` 内单独覆盖（根 `.npmrc` 默认严格 hoist）。

## 启动

```bash
pnpm dev:weapp     # 微信小程序：用微信开发者工具打开 dist/dev/weapp
pnpm dev:h5        # 移动 H5（hub 手机框预览来源）
pnpm build:weapp   # 生产构建（CI 冒烟）
pnpm build:h5
# 其他端：dev:alipay / dev:tt（字节）等
```

## 真机预览

微信开发者工具 → 预览/真机调试生成二维码；hub 的小端卡片直接展示该二维码。
