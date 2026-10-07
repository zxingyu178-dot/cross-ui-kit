# AGENTS.md —— AI 协作铁律（本仓库最高约束）

> 本文件是所有 AI 编码助手（Cursor / Claude Code / GitHub Copilot / Windsurf / 豆包等）在本仓库工作的**强制规则**。
> 开始任何改动前必须通读本文件；规则冲突时，以本文件为准；本文件未覆盖时，读 `docs/` 下对应标准文档。
> 人类开发者同样遵守本文件。任何对本文件的放宽都必须经评审并显式记录。

---

## 0. 项目是什么

cross-ui-kit 是一个**跨端 UI/交互模板库**（不是单一业务应用），目标是让人和 AI 在开发时**直接取用**统一标准的组件与页面模板，覆盖四个端形态、三个渲染栈：

| 栈 | 包 | 技术底座 | 产出端 |
|---|---|---|---|
| web（大端） | `packages/ui-web`、`packages/patterns-web` | React 18.3 + Vite + Tailwind v4 + shadcn/ui（Radix） | 网页、PC（Tauri 2）、Tauri 移动版 |
| mini（小端） | `packages/ui-mini`、`packages/patterns-mini` | Taro 4 + NutUI-React（主）/ Taroify（备） | 微信/支付宝/字节小程序、移动 H5 |
| native（原生） | `packages/ui-native`、`packages/patterns-native` | Expo + Tamagui | iOS / Android 原生 App |
| 共享 | `packages/tokens`、`packages/core`、`packages/icons`、`packages/interaction` | Style Dictionary、TanStack 系列、zustand、zod | 三栈共用 |

## 1. 十条铁律（违反即打回，无例外）

1. **先查后用，禁止自造组件**：写界面前必须先查 `registry/`（或通过 shadcn/Storybook MCP 查询）是否已有对应组件；有则必须使用，没有且确需新增时，走 §4 新增组件 SOP，禁止在业务代码里临时手写一次性 UI。
2. **按端选栈，禁止跨栈引用视图**：
   - web 端只能 import `@kit/ui-web`；mini 端只能 import `@kit/ui-mini`；native 端只能 import `@kit/ui-native`；
   - 三个 `ui-*` 包**禁止互相引用**，也禁止引用对方栈的底座（如 mini 包不得 import Radix/DOM API，web 包不得 import `@tarojs/taro`）。
3. **视觉值禁止硬编码**：颜色、字号、字重、间距、圆角、阴影、动效时长、层级 z-index、断点，**必须**引用 `@kit/tokens` 导出的变量；禁止出现 `#1A73E8`、`margin: 13px` 这类魔法值（临时 demo 也不允许）。
   - **材质/主题展示页例外**：自带独立配色、不跟随全局主题的材质展示场景（深色数据大屏、流体渐变、3D 悬浮、玻璃拟态、卡片翻转等，目录集中在 `patterns-web` 的 `*-screen/fluid/glass/3d/flip-*`），允许使用 Tailwind **内置标准色板**（slate/cyan/indigo 等）与材质工具类（gradient/blur/perspective/backdrop/columns）；内置色板即统一标准，仍禁止手写十六进制值。业务功能页的功能色（主色/语义色/文本/背景/边框）**必须**引用 token，不适用此例外。
4. **业务逻辑必须下沉 `@kit/core`**：请求、数据转换、缓存、状态、表单校验规则、权限判断写在 core；视图组件保持"输入 props → 渲染 UI → 抛出事件"，禁止在组件内直接 fetch / 写业务分支。
5. **同名同义**：三栈承担同一职责的组件必须使用映射表（`registry/component-mapping.json`）中登记的统一命名与一致的 props 语义；新增组件时三栈同步登记（允许分 PR 落地，但映射表必须在首个 PR 建条目并标注实现状态）。
6. **四态必齐**：任何承载数据的组件/页面必须同时实现 loading（骨架屏优先）、empty、error（含重试入口）、normal 四态；表单必须有提交中、校验失败、防重复提交。
7. **类型严格**：TypeScript `strict` 全开，禁止 `any`（用 `unknown` + 类型守卫）；props 必须显式定义类型并导出；事件回调类型化；禁止 `@ts-ignore`，确需豁免用 `@ts-expect-error` 并附原因注释。
8. **受控优先、组合优先**：表单类组件默认受控；组件通过组合（children/slot/render prop）扩展，不为单一业务场景膨胀 props；底座组件优先二次封装而不是 fork 改源码。
9. **可访问性与暗色模式不是可选项**：web 端遵循 WAI-ARIA（直接用 Radix/Reka 行为层）；最小触控热区 44×44px（mini/native）；所有组件必须同时提供暗色主题样式；文案不写死在组件里，走 i18n key。
10. **先过质量门再交付**：任何改动完成后必须本地跑通 `pnpm quality`（registry 校验 → format → lint → typecheck → test）；新增组件必须带文档、示例（story/演示）、registry 条目，三者缺一视为未完成。

## 2. 目录职责边界（放错位置等于错误）

- `packages/tokens/`：**只放** token 源 JSON 与导出配置；产物在 `dist/`（不入库），改视觉值只在这里改。
- `packages/core/`：框架无关或三栈通用的逻辑。允许依赖 React（hooks），但**不允许**依赖任何 DOM/小程序/RN 专有 API，不允许 import 任何 `ui-*` 包。
- `packages/ui-*/src/`：组件按"一组件一目录"组织，目录名 PascalCase；内部结构见 `docs/05-component-standard.md`。
- `packages/patterns-*/`：页面骨架（布局 + 组件编排 + 假数据），不放可复用组件；可复用的东西必须上移到 `ui-*`。
- `packages/interaction/`：四态、反馈、手势等跨组件交互的可复用实现与规范引用。
- `registry/`：组件统一出口清单（机器可读），**任何组件入库必须登记**；`component-mapping.json` 是三栈映射唯一事实来源。
- `apps/play-*`：只做演示与验收，**不沉淀通用能力**；演示里发现的可复用内容必须回流到 packages。
- `templates/`：新增组件/页面的文件模板，SOP 要求从模板复制，不允许凭记忆手写结构。
- `hub/`：preview-hub 预览站，只读消费 registry 与各包产物。

## 3. 依赖管理规则

- 共享依赖版本**只在** `pnpm-workspace.yaml` 的 `catalog` / `catalogs` 中声明，各包 package.json 用 `"catalog:"` / `"catalog:web"` 引用，禁止手写版本号。
- 新增第三方依赖前先判断：能否用 core 现有方案？是否三栈通用（通用→core；栈专有→对应 ui 包）？新增依赖必须在 PR 说明理由、体积、维护状态、许可证（要求 MIT/Apache-2.0/BSD 类宽松许可）。
- 包管理器**只允许 pnpm**；禁止生成 package-lock.json / yarn.lock。

## 4. 新增组件 SOP（AI 必须逐步执行）

1. **查重**：检索 `registry/` 三份 registry.json 与 `component-mapping.json`，确认无同义组件；查底座库（shadcn/NutUI/Tamagui）是否已有可封装件。
2. **建映射条目**：在 `component-mapping.json` 登记统一语义名（canonical name）、三栈各自组件名与状态（`implemented` / `planned`）。
3. **按模板生成骨架**：从 `templates/component/<栈>/` 复制到对应 `packages/ui-*/src/组件名/`，包含：组件实现、类型、index 导出、示例/story、文档、registry item 片段。
4. **实现要求**：props 遵循 `docs/05-component-standard.md`（必填/可选、默认值、受控约定、事件命名 `onXxx`）；视觉值全部引用 token；四态齐全；暗色 + i18n。
5. **登记 registry**：把 registry item 合并进 `registry/<栈>/registry.json`，字段规范见 `docs/06-registry.md`。
6. **写文档与示例**：组件目录内 README（用法、props 表、注意事项）+ 至少一个覆盖正常态与边界态的示例；web 端必须有 story。
7. **演示接入**：在对应 `apps/play-*` 增加一页演示（play-web 用 storybook 亦可）。
8. **自检**：按 §7 清单逐项核对，跑 `pnpm quality`。
9. 三栈对齐：同语义组件在其余两栈建 `planned` 条目并建 issue/任务，禁止只在一栈静默存在。

## 5. 新增页面模板 SOP

1. 从 `templates/page/` 复制骨架到对应 `packages/patterns-<栈>/src/<场景名>/`；
2. 页面只允许编排已登记组件；发现缺组件，回到 §4，而不是在页面里内联实现；
3. 数据走 core 的 hooks（如 `useTable`/`useRequest`），页面内不写请求；
4. 必须包含四态与空数据/超长文本/极端值示例；
5. 同一场景三栈目录名一致（如 `list-page/`），并在 patterns 索引中互相链接。

## 6. 改动已有代码的规则

- 只改任务要求的范围；**保留**未要求改动的命名、结构、注释与结论，不得"顺手重构"。
- 改组件 props（破坏性变更）必须：同步三栈映射、同步文档与示例、在 commit/PR 标注 `BREAKING CHANGE`。
- 改 token 必须跑 `pnpm tokens:build` 并在 PR 说明影响面（哪些组件/端受影响）。
- 不删除、不重命名、不移动他人文件，除非任务明确要求。

## 7. AI 产出前自查清单（每次回答/提交前逐条过）

- [ ] 用到的组件都来自 registry，且 import 路径属于当前栈的 `ui-*` 包？
- [ ] 没有任何硬编码颜色/间距/字号/圆角/阴影/时长？
- [ ] 请求与业务逻辑都在 core，视图只做渲染与事件抛出？
- [ ] 数据组件四态（loading/empty/error/normal）齐全？
- [ ] 无 `any`、无 `@ts-ignore`、无 `console.log`、类型全部显式？
- [ ] 表单受控、有防重复提交与校验错误态？
- [ ] 暗色样式、i18n key、触控热区（小端）已处理？
- [ ] 新组件已登记 registry + 映射表 + 文档 + 示例？
- [ ] 依赖版本走 catalog，许可证宽松？
- [ ] `pnpm quality` 本地通过？
- [ ] 本次改动已 commit 并 `git push` 同步到 `origin`（GitHub），`git status -sb` 显示与远程一致（ahead 0）？

## 8. 常用命令

```bash
pnpm setup              # 新机器/新环境一键引导：环境检查→install→tokens:build→registry 校验（--check 追加质量门）
pnpm doctor             # 只读环境体检（Node/pnpm/git/依赖/token 产物/registry + 各端可选工具链）
pnpm pack:portable      # 打包可发送到其他电脑的源码 zip（排除 node_modules/dist/.git）到 releases/
pnpm install            # 安装依赖
pnpm tokens:build       # 由 token 源导出三栈变量（改视觉值后必跑；dist 不入库，新环境必须先构建）
pnpm registry:validate  # 校验 registry 与映射表
pnpm dev                # 并行启动全部 dev 任务
pnpm build              # 全仓构建
pnpm lint               # ESLint
pnpm typecheck          # tsc 严格类型检查
pnpm test               # 测试
pnpm format             # Prettier 写回
pnpm quality            # 提交前全量质量门
```

> 可移植性约定：仓库路径无关（构建脚本一律用 `import.meta.url` 相对定位，禁止写盘符/绝对路径）；分发包不含 `node_modules`/`dist`/`.git`，目标机用 `pnpm setup` 重建；`prepare` 钩子（`scripts/prepare.mjs`）在无 `.git` 时自动跳过 husky；跨平台换行由 `.gitattributes` 统一。详见 `docs/11-portability.md`。

## 9. 给 AI 的工具接入（MCP）

- **shadcn MCP / 私有 registry**：检索与安装组件，配置见 `docs/06-registry.md`、`docs/08-ai-contract.md`；安装命名空间：`@kit/web-*`、`@kit/mini-*`、`@kit/native-*`。
- **Storybook MCP（web 栈）**：查询组件真实 props/文档、生成 story、跑交互与无障碍测试。
- 当 MCP 不可用时，降级为直接读 `registry/<栈>/registry.json` 与组件目录 README，规则不变。

## 10. 不确定时的行为

- 需求歧义会影响组件 API、目录归属或跨栈契约时：**停下来提问**，不要猜测后大规模生成；
- 不影响契约的局部实现选择，按本文件与 docs 标准自行决定，并在交付说明里注明；
- 发现标准本身有缺口或矛盾：在交付说明中明确指出，不擅自绕过。

## 11. 每次开发后必须同步 GitHub（强制）

- 远程：`origin` → `https://github.com/zxingyu178-dot/cross-ui-kit`（默认 private）。
- 每完成一批可交付开发（一个组件 / 一批模板 / 一次修复），在 `pnpm quality` 通过后**必须立即提交并推送**，不允许只留在本地，除非用户明确说"先别上传"：
  1. `git add -A`
  2. `git commit --no-verify -F <message-file>`（本机 husky 钩子找不到 pnpm，质量门已手动跑过，故用 `--no-verify`；message 遵循约定式提交，body 单行 ≤100 字符）
  3. `git push`（新分支用 `git push -u origin <branch>`；凭据已由 Git Credential Manager 持久化，正常无需再登录）
- 推送后用 `git status -sb` 核对：本地与 `origin/main` 一致、`ahead 0`；`git push` 失败必须排查并在交付说明里告知，不得假装已同步。
- 同步是"开发完成"的一部分：未 push 的改动视为未交付。
