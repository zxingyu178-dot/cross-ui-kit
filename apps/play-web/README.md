# play-web —— 大端组件预览壳（网页 / Tauri 桌面与移动 Web）

cross-ui-kit 的大端实时演示工程：消费 `@kit/ui-web` 组件与 `@kit/tokens` 设计令牌，供人和 AI 直观预览组件真实渲染（含暗色联动）。

## 技术栈

- React 18.3 + TypeScript（严格模式，继承仓库 `tsconfig.base.json`）
- Vite 6（@vitejs/plugin-react）
- Tailwind CSS v4（`@tailwindcss/vite`，主题类经 `@theme inline` 映射到 `--kit-*` CSS 变量）
- 组件库 `@kit/ui-web`（shadcn/ui 模式：Radix + cva）

## 命令

```bash
pnpm --filter play-web dev        # 启动开发预览（默认 http://localhost:5173）
pnpm --filter play-web build      # 类型检查 + 生产构建（dist/）
pnpm --filter play-web preview    # 预览生产构建
pnpm --filter play-web lint       # ESLint（根 flat config）
pnpm --filter play-web typecheck  # tsc 严格类型检查
```

## 关键约定

- **源码直引**：vite alias 把 `@kit/ui-web` / `@kit/core` / `@kit/icons` 指向 `packages/*/src`（含 `@kit/ui-web/src/**` 深层示例路径），dev/build 始终消费最新源码；`@kit/tokens` 的 CSS 走包 exports 消费 `dist/` 产物（改 token 后先 `pnpm tokens:build`）。
- **Tailwind 扫描**：`src/index.css` 中 `@source '../../../packages/ui-web/src/**/*.{ts,tsx}'`（相对 CSS 文件三级回到仓库根），组件库内的工具类才会被编译——新增组件包目录时同步扩展。
- **暗色**：必须给 `document.documentElement`（`<html>`）切换 `.dark` 类（App.tsx 用 useEffect 实现，`@custom-variant dark`），同时驱动 tokens.dark.css 与 Tailwind dark 变体；禁止挂内层容器（body 在容器外会漏切换），不跟随系统。
- **演示即资产**：演示分节直接引用组件目录下的 `__examples__/*`（与 hub / Storybook 同源），不在演示工程里另写一次性 demo。

## 当前演示内容

- Button：五种视觉层级、三种尺寸、loading/禁用/撑满、提交锁（防重复提交）、暗色切换联动。
