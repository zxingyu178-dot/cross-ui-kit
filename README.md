# cross-ui-kit · 跨端统一 UI/交互模板库

一套标准、三栈实现、统一出口，供**开发者直接取用**与 **AI 直接生成**的跨端组件/页面模板库。

- **覆盖端**：Web 网页 · PC 桌面（Tauri 2，Win/macOS/Linux）· 微信/支付宝/字节小程序 + 移动 H5（Taro 4）· iOS/Android 原生 App（Expo + Tamagui）
- **统一标准**：一份 Design Token、一套命名规范、一份三栈组件映射表、一个组件 registry、一个预览 Hub、一份 AI 契约
- **建设原则**：吸收成熟开源底座（shadcn/ui、NutUI-React、Tamagui），只自研业务组件、页面骨架与三栈适配层，不重复造基础组件

---

## 1. 仓库结构

```
cross-ui-kit/
├─ apps/                      # 演示/验收壳工程（验证库在各端可用）
│  ├─ play-web/               #   网页（React 18.3 + Vite + shadcn/ui）
│  ├─ play-desktop/           #   PC 桌面（Tauri 2，复用 web）
│  ├─ play-miniapp/           #   小程序 + H5（Taro 4 + NutUI-React）
│  └─ play-native/            #   原生 App（Expo + Tamagui）
├─ packages/
│  ├─ tokens/                 # Design Token 唯一源（Style Dictionary 三栈导出）
│  ├─ core/                   # 三栈共享逻辑内核（请求/表格/表单/状态/校验/hooks）
│  ├─ icons/                  # 图标源与三栈产物
│  ├─ ui-web/                 # 大端组件（shadcn/ui 封装 + 自研业务组件）
│  ├─ ui-mini/                # 小端组件（NutUI/Taroify 封装 + 自研业务组件）
│  ├─ ui-native/              # 原生组件（Tamagui 封装 + 自研业务组件）
│  ├─ patterns-web/           # 页面模板（大端）
│  ├─ patterns-mini/          # 页面模板（小端）
│  ├─ patterns-native/        # 页面模板（原生）
│  └─ interaction/            # 交互规范的可复用实现（四态/反馈/手势）
├─ registry/                  # 统一组件出口：web / mini / native 三份 registry.json + 映射表
├─ hub/                       # preview-hub 统一预览站（人看的入口）
├─ templates/                 # 新增组件/页面的标准文件模板（脚手架）
├─ scripts/                   # 工程脚本（registry 校验等）
└─ docs/                      # 开发标准与流程（见下索引）
```

## 2. 文档索引（docs/）

| 文档 | 内容 |
|---|---|
| [01-toolchain.md](docs/01-toolchain.md) | 工具清单：每个工具的用途、版本策略、安装命令、备选 |
| [02-development-workflow.md](docs/02-development-workflow.md) | 严格开发流程：环境、分支、新增组件/页面 SOP、自检与提交 |
| [03-naming-convention.md](docs/03-naming-convention.md) | 命名规范：包/文件/组件/props/事件/hooks/token/分支/commit |
| [04-design-tokens.md](docs/04-design-tokens.md) | Token 分层、命名、新增流程、三栈导出机制 |
| [05-component-standard.md](docs/05-component-standard.md) | 组件开发标准：目录、props、四态、无障碍、暗色、i18n、文档 |
| [06-registry.md](docs/06-registry.md) | registry 规范：命名空间、item 字段、托管、CLI 与 MCP |
| [07-interaction-spec.md](docs/07-interaction-spec.md) | 交互规范：加载/空/错误/断网四态、手势、反馈、热区、动效 |
| [08-ai-contract.md](docs/08-ai-contract.md) | AI 契约：AGENTS 规则、MCP 配置、AI 产出检查清单 |
| [09-quality-gate.md](docs/09-quality-gate.md) | 质量门：lint/typecheck/test/校验/发布流程 |
| [10-stacks.md](docs/10-stacks.md) | 三栈技术架构、共享边界与组件映射总表 |
| [11-portability.md](docs/11-portability.md) | 可移植性与分发：一键引导 `setup`、环境体检 `doctor`、可发送打包 `pack:portable`、新电脑上手与故障排查 |

> AI 工具（Cursor / Claude Code / Copilot / Windsurf）进入本仓库**首先读 [AGENTS.md](AGENTS.md)**。

## 3. 环境要求

| 工具 | 版本 | 说明 |
|---|---|---|
| Node.js | 22 LTS（见 `.nvmrc`） | 强制 |
| pnpm | ≥ 10（仓库锁定 12.4.1，见 `packageManager`） | 唯一包管理器，禁用 npm/yarn |
| git | ≥ 2.40 | |
| Rust stable | 最新稳定版 | 仅 Tauri 桌面打包需要：`rustup default stable` |
| 微信开发者工具 | 最新稳定版 | 仅小程序调试需要 |
| 其余工具 | 见 [docs/01-toolchain.md](docs/01-toolchain.md) | |

## 4. 快速开始

新机器拿到源码后，**只需一条命令**即可就绪（自动检查环境、装依赖、构建 token、校验 registry；没有 pnpm 会经 corepack 自动激活）：

```bash
pnpm setup            # = 环境检查 → pnpm install → pnpm tokens:build → pnpm registry:validate
pnpm doctor           # 可选：环境体检，逐项报告缺什么、怎么修
pnpm --filter play-web dev   # 启动网页预览 → http://localhost:5173/
```

> `pnpm setup --check` 会在末尾追加全量质量门；`pnpm setup --skip-install` 仅重建 token 并校验。

手动分步（等价于 setup 内部步骤，排查时使用）：

```bash
pnpm install          # 安装依赖（仓库根目录）
pnpm tokens:build     # 构建 Design Token（三栈变量产物，dist 不入库，必须生成）
pnpm registry:validate# 校验 registry 合法性
pnpm quality          # 全量质量门
pnpm dev              # 启动各端演示（apps 初始化后，见各 app 的 README）
```

### 4.1 发送到其他电脑（可移植打包）

```bash
pnpm pack:portable            # 生成不含 node_modules/dist/.git 的干净源码 zip → releases/
pnpm pack:portable --with-git # 连同提交历史一起（团队内传递）
```

对方解压（建议放到**纯英文、无空格**路径）后执行 `pnpm setup` 即可。完整说明（各端前置工具、中文路径注意、故障排查）见 [docs/11-portability.md](docs/11-portability.md)。

## 5. 常用命令

| 命令 | 作用 |
|---|---|
| `pnpm setup` | 一键冷启动引导（环境检查 + install + tokens:build + registry 校验），新机器只跑这一条 |
| `pnpm doctor` | 只读环境体检（必需项 + 各端可选工具链），输出修复建议 |
| `pnpm pack:portable` | 打包可发送的源码 zip 到 `releases/`（排除依赖与构建产物） |
| `pnpm tokens:build` | 由 token 源 JSON 生成三栈变量（CSS/SCSS/TS/Tamagui config） |
| `pnpm tokens:watch` | token 源改动时自动重新导出 |
| `pnpm registry:validate` | 校验三份 registry.json 与映射表结构、引用完整性 |
| `pnpm dev` / `pnpm build` | turbo 并行启动/构建全部包与应用 |
| `pnpm lint` / `pnpm typecheck` / `pnpm test` | 代码质量检查 |
| `pnpm format` | Prettier 全仓格式化 |
| `pnpm quality` | 提交前全量质量门（registry 校验 + 格式 + lint + 类型 + 测试） |

## 6. P0 验收标准

- [x] monorepo 骨架与 workspace 联通（11 个包，pnpm workspace + turbo 编排）
- [x] Token 单一事实源三栈联动：改 `packages/tokens/src` 后 `pnpm tokens:build`，一次产出 web CSS 变量（亮/暗）、mini SCSS、TS 常量、native Tamagui themes、文档表共 9 个产物，语义别名自动解析、暗色仅输出语义色（已实测）
- [x] `pnpm quality` 全绿（registry 校验 + 格式 + ESLint + 严格 tsc + 测试，16/16 任务通过，peer 依赖零冲突）
- [x] 工具链版本矩阵锁定并可安装（React 18.3.1 / Taro 4 / NutUI 3 / Tamagui 1.121 / Expo SDK 52 / Vite 6，见 docs/01 §3）
- [x] play-web 演示壳初始化（Vite 6 + Tailwind v4 + token CSS 接入，build 冒烟通过，含 Button 演示与暗色切换）；play-miniapp / play-native / play-desktop 待初始化（各 app README 已备好标准初始化命令，Tauri 需先装 Rust 工具链）
- [x] 首个组件 Button 三栈落地并 registry 转正（beta）：ui-web（cva + Radix Slot）、ui-mini（NutUI 封装）、ui-native（Tamagui），统一 variant/size/loading/onPress 契约，`pnpm registry:validate` 与全量质量门通过
- [ ] shadcn CLI 从本地 registry 拉取安装实测——P1 遗留（components.json 配置与 `pnpm dlx shadcn add` 指向 registry/web）
- [ ] Storybook 8 接入 ui-web（Button.stories.tsx 已就位，依赖未装；接入后移除 ui-web tsconfig 的 stories exclude 并验证 MCP）

## 6.1 P1 进展（2026-09-14）

- 版本矩阵经实测锁定 React 18.3.1（Taro 4 / NutUI 3 peer 上限 React 18，Tamagui 锁 ~1.121 配 Expo SDK 52 / RN 0.76，依据见 docs/01 §3）
- tokens 产物从 9 个增至 11 个：新增 mini CSS 变量产物（`page` / `.dark` 选择器）支持小程序运行时换肤
- core 落地首个工具 `cn()`（clsx + tailwind-merge）
- 提交：`dc3b011`（P0 骨架）、`a1a724d`（Button 三栈 + play-web 演示）

## 7. 版本与提交

- 提交信息遵循 Conventional Commits（commitlint 强制）：`feat(web): ...`、`token: ...`、`registry: ...`
- 分支模型、评审与发布流程见 [docs/02-development-workflow.md](docs/02-development-workflow.md) 与 [docs/09-quality-gate.md](docs/09-quality-gate.md)
