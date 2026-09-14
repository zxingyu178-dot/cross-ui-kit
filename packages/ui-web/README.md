# @kit/ui-web · 大端组件栈

服务于**网页**与 **Tauri 2 桌面/移动版**（React DOM 环境）。

## 技术底座

- shadcn/ui：组件源码经 CLI 拉取进入本包（不是 npm 黑盒依赖），外层做统一封装；
- Radix UI：无头行为层（焦点、弹层、键盘、WAI-ARIA），不手写裸交互；
- Tailwind CSS v4：`@theme` 映射 `@kit/tokens` 导出的 CSS 变量（`dist/web/tokens.light.css` / `tokens.dark.css`）；
- Storybook：组件预览 + 官方 MCP（AI 查询 props/生成 story/跑交互与无障碍测试）。

## 接入方式（P1 执行）

```bash
# 1) 初始化 shadcn（在消费工程或本包目录），components.json 的 registries 指向本仓库 registry/web
pnpm dlx shadcn@latest init
# 2) 拉取底座组件源码（示例）
pnpm dlx shadcn@latest add button dialog select table
# 3) 统一封装后登记到 registry/web/registry.json 并从 src/index.ts 导出
```

## 目录约定

```
src/
├─ Button/
│  ├─ Button.tsx
│  ├─ Button.types.ts
│  ├─ Button.stories.tsx
│  ├─ index.ts
│  ├─ README.md
│  └─ __examples__/
└─ index.ts            # 统一出口
```

## 硬性要求

- 视觉值只用 token（语义类/CSS 变量），禁止 Tailwind 原色类（bg-blue-500）与硬编码；
- 组件外层统一 API（props 命名/枚举遵循 docs/03 §4），不直接暴露 shadcn 原始 API 给业务；
- 四态、暗色、a11y（Radix 保证行为，aria-label 补齐）、i18n 必做；
- 每个组件必须有 story（normal/loading/empty/error/边界值）。
