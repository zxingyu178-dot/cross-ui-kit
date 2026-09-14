# 01 · 工具链清单（Toolchain）

本仓库"用什么工具、装在哪、什么版本、干什么用、备选是什么"的唯一清单。新增工具必须先更新本文档并评审（许可证、维护活跃度、体积）。

## 1. 基础环境（全局安装）

| 工具 | 版本要求 | 用途 | 安装 | 备选/备注 |
|---|---|---|---|---|
| Node.js | 22 LTS（`.nvmrc`） | 运行时 | nvm-windows：`nvm install 22 && nvm use 22` | 禁止低于 20 |
| pnpm | ≥10，锁定 12.4.1 | **唯一包管理器** | `npm i -g pnpm` 或 `corepack enable` | 禁用 npm/yarn 安装依赖 |
| git | ≥2.40 | 版本管理 | 官网安装 | 提交钩子依赖 |
| Rust stable | 最新 stable | Tauri 桌面/移动打包 | `rustup default stable`（Windows 还需 VS Build Tools + WebView2） | 仅 `play-desktop` 需要 |
| 微信开发者工具 | 最新稳定版 | 小程序预览/上传/真机调试 | 官网下载，开启 CLI 与服务端口 | 仅 `play-miniapp` 需要 |
| Android Studio / Xcode | 最新稳定版 | 原生 App 模拟器与打包 | 按 Expo 官方指南 | 仅 `play-native` 打包需要 |

## 2. 仓库级工具（devDependencies，随 `pnpm install` 安装）

| 工具 | 用途 | 配置位置 |
|---|---|---|
| Turborepo（turbo ^2） | monorepo 任务编排与缓存 | `turbo.json` |
| TypeScript ^5.6（strict 全开） | 类型安全 | `tsconfig.base.json` |
| ESLint 9（flat config）+ typescript-eslint | 静态检查 | `eslint.config.js` |
| Prettier 3 | 代码格式 | `.prettierrc.json` |
| Style Dictionary 4 | Design Token 一份源导出三栈 | `packages/tokens/sd.config.mjs` |
| husky 9 + lint-staged + commitlint | 提交钩子、暂存区检查、提交信息规范 | `.husky/`、`.commitlintrc.json` |

## 3. 三栈技术底座（在对应 app/包内安装，版本统一登记在 pnpm-workspace.yaml catalogs）

> **React 版本矩阵（P0 实测锁定，勿随意单端升级）**：全库统一 **React 18.3.1**。
> 约束来自小端：Taro 4 官方运行时与 @nutui/nutui-react-taro、react-spring 的 peer 上限为 React 18（React 19 需第三方兼容构建 vite-plugin-taro-react）。
> 对应地，原生栈锁定 **Expo SDK 52（RN 0.76，React 18.3.1；SDK 53 起已升 React 19）+ Tamagui 1.121.x（1.129+/v2 面向 React 19、RN 0.81+）**。
> web 栈 shadcn/Radix/Vite 6 在 React 18.3 下完全可用。待 Taro/NutUI 官方支持 React 19 后，只改 pnpm-workspace.yaml 的 catalog/catalogs 即全库联动升级。

### 3.1 web 栈（网页 + PC + Tauri 移动版）

| 工具/库 | 用途 | 备注 |
|---|---|---|
| Vite 6 + @vitejs/plugin-react | 开发/构建 | play-web |
| React 18.3.1 + react-dom | 视图框架 | catalog 统一版本，原因见上 |
| Tailwind CSS v4 | 原子样式，消费 token CSS 变量 | 与 shadcn 标配 |
| shadcn/ui（CLI + registry） | 组件源码分发模式，组件入库 | 不是传统依赖，源码进 `ui-web` |
| Radix UI（随 shadcn） | 无头行为层（焦点/弹层/无障碍） | 不直接写裸 DOM 交互 |
| react-router | 大端路由 | |
| Tauri 2（@tauri-apps/cli/api） | PC 桌面壳（Win/macOS/Linux）+ 移动 target | play-desktop |
| Storybook（latest，React 版） | 组件预览 + **官方 MCP**（AI 查询/测试组件） | ui-web |

### 3.2 mini 栈（小程序 + 移动 H5）

| 工具/库 | 用途 | 备注 |
|---|---|---|
| Taro 4（@tarojs/taro、@tarojs/cli，React 模式 + Vite） | 一套代码编译微信/支付宝/字节小程序 + H5 | play-miniapp |
| @nutui/nutui-react-taro | 主力移动端组件库（京东，80+ 组件，与 Taro 同厂） | ui-mini 封装底座 |
| Taroify（@taroify/core） | 备选视觉体系（Vant 风格），NutUI 缺口时补充 | |
| weapp-tailwindcss（或 unocss-applet + unocss-preset-weapp） | 小程序端原子样式：类名转义、rpx 转换 | 消费同一套 token |
| 微信开发者工具 CLI | 预览/上传 | 见 §1 |

### 3.3 native 栈（iOS/Android 原生 App）

| 工具/库 | 用途 | 备注 |
|---|---|---|
| Expo SDK 52（~52.0.0）+ Expo Router | 原生工程与路由（RN 0.76 / React 18.3.1） | play-native；SDK 53+ 已升 React 19，与小端冲突，勿升 |
| Tamagui 1.121.x（~1.121.0） | 跨 web/RN 的同构组件 + token 系统 + 编译优化 | ui-native 底座，token 由 tokens 包生成其 config；1.129+/v2 需 React 19 |
| React Native 0.76.x（随 Expo SDK 52） | 原生渲染 | catalogs.native 锁定，不单独升版本 |
| @shopify/flash-list、@gorhom/bottom-sheet 等 | 长列表、底部弹层等原生能力 | 按需评审引入 |

### 3.4 三栈共享逻辑内核（packages/core，headless，全部三栈通用）

| 库 | 用途 |
|---|---|
| @tanstack/react-query | 请求/缓存/重试/loading（封装为 `useRequest`） |
| @tanstack/react-table | 表格/列表列模型（headless，三栈各自渲染） |
| @tanstack/react-virtual | 虚拟滚动（长列表） |
| zustand | 客户端状态 |
| zod | 运行时校验 + 类型推导（接口/表单） |
| react-hook-form + @hookform/resolvers | 表单状态与校验（web/mini-H5/native 均可用） |
| clsx + tailwind-merge | 类名组合（web/mini H5） |
| dayjs | 日期处理 |

## 4. AI 工具接入

| 能力 | 工具 | 说明 |
|---|---|---|
| AI 规则入口 | `AGENTS.md`（根） | Cursor/Windsurf 自动读取；Claude Code 读 `CLAUDE.md`（内容仅 `@AGENTS.md` 引用一行）；Copilot 读 `.github/copilot-instructions.md`（同引用） |
| 组件检索/安装 | shadcn MCP Server + 私有 registry | 见 `docs/06-registry.md`、`docs/08-ai-contract.md` |
| 组件理解/测试 | Storybook MCP（web 栈，React 支持最完整） | AI 读 props/文档、生成 story、跑交互与无障碍测试 |
| 小程序组件理解 | Taro H5 形态进 Storybook；原生小程序侧以 registry 文档 + 微信开发者工具为准 | MCP 不覆盖部分由 registry item 描述字段兜底 |

## 5. 统一版本管理规则

- 三栈共享依赖：`pnpm-workspace.yaml` → `catalog:`；
- 栈专有依赖：`pnpm-workspace.yaml` → `catalogs.web / mini / native`；
- 任何包 package.json **不得手写版本号**（根 devDependencies 工具链除外）；
- 升级流程：改 catalog → `pnpm install` → 全量 `pnpm quality` → 变更记录进 CHANGELOG。

## 6. 各端初始化命令（P1 执行，P0 仅登记）

```bash
# web 演示工程
pnpm create vite@latest apps/play-web --template react-ts
# Tauri 桌面壳（在 play-desktop，前端指向 play-web 或独立前端）
pnpm create tauri-app
# Taro 小程序工程（React + Vite 模板）
pnpm create taro apps/play-miniapp
# Expo 原生工程
pnpm create expo-app apps/play-native
# Storybook（ui-web）
pnpm dlx storybook@latest init
```

> 初始化后必须回到本文件与 AGENTS.md 校正目录、别名（`@kit/*`）、token 接入方式，不允许保留脚手架默认样式体系。
