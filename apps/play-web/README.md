# play-web · 网页演示壳（React 18.3 + Vite + shadcn/ui）

用途：验证 `@kit/ui-web` 组件在真实网页工程可用，作为 hub 的大端预览来源之一。**只做演示，不沉淀通用能力。**

## 初始化（P1 执行，一次）

```bash
# 在 apps/ 目录下
pnpm create vite@latest play-web --template react-ts
cd play-web
pnpm install
# Tailwind v4
pnpm add tailwindcss @tailwindcss/vite
# shadcn 初始化（registries 指向仓库 registry/web，见 docs/06）
pnpm dlx shadcn@latest init
# 工作区依赖
pnpm add @kit/tokens @kit/core @kit/icons @kit/ui-web
```

## 接入要求

- 入口引入 `@kit/tokens` 产物 `tokens.light.css`，暗色在根节点切换 `.dark` class；
- 路径别名 `@kit/*` 走 workspace 源码；
- 组件只从 `@kit/ui-web` 引用，不在演示工程内自造通用组件；
- 每个组件在 `src/pages/` 有一页演示（与 Storybook 互补）。

## 启动

```bash
pnpm dev        # Vite dev server
pnpm build      # 生产构建（CI 冒烟）
```
