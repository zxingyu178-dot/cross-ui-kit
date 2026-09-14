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

```bash
# 1. 安装依赖（仓库根目录）
pnpm install

# 2. 构建 Design Token（三栈变量产物）
pnpm tokens:build

# 3. 校验 registry 合法性
pnpm registry:validate

# 4. 全量质量门
pnpm quality

# 5. 启动各端演示（apps 初始化后，见各 app 的 README）
pnpm dev
```

## 5. 常用命令

| 命令 | 作用 |
|---|---|
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
- [ ] 三端 hello 壳工程初始化（play-web / play-miniapp / play-native / play-desktop）——P1，各 app README 已备好标准初始化命令（Tauri 需先装 Rust 工具链）
- [ ] 一个示例组件三栈落地、登记 registry 并实测 CLI 拉取安装——P1（模板与 SOP 已在 templates/、docs/02、docs/06 备好）

## 7. 版本与提交

- 提交信息遵循 Conventional Commits（commitlint 强制）：`feat(web): ...`、`token: ...`、`registry: ...`
- 分支模型、评审与发布流程见 [docs/02-development-workflow.md](docs/02-development-workflow.md) 与 [docs/09-quality-gate.md](docs/09-quality-gate.md)
