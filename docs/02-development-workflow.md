# 02 · 开发流程（严格 SOP）

## 1. 一次性环境准备

```bash
# 1) Node 22 + pnpm（见 01-toolchain.md）
node -v   # v22.x
pnpm -v   # >=10

# 2) 克隆并安装
git clone <repo> cross-ui-kit && cd cross-ui-kit
pnpm install

# 3) 构建 token（三栈变量产物）
pnpm tokens:build

# 4) 校验仓库基线
pnpm registry:validate
pnpm quality
```

- 首次 install 后 husky 自动注册 git 钩子（pre-commit 跑 lint-staged；commit-msg 跑 commitlint）。
- 桌面端开发前：`rustup default stable`；小程序开发前：安装微信开发者工具并开启 CLI；原生端：按 Expo 指南装 Android Studio/Xcode。

## 2. 分支模型

| 分支 | 用途 | 命名 |
|---|---|---|
| `main` | 始终可发布，受保护，只接受 PR 合入 | — |
| `feat/*` | 新组件/新页面模板/新能力 | `feat/web-data-table`、`feat/mini-picker` |
| `fix/*` | 缺陷修复 | `fix/mini-toast-overlap` |
| `token/*` | token 增删改 | `token/add-danger-bg` |
| `registry/*` | registry/映射表调整 | `registry/sync-mapping` |
| `docs/*`、`chore/*`、`refactor/*` | 文档/工程/重构 | 同上风格 |

规则：
- 一个分支只做一件事，禁止"顺手"夹带无关改动；
- 分支从最新 `main` 切出，生命周期尽量短；
- 三栈对齐组件允许分 PR，但首个 PR 必须在映射表登记其余栈的 `planned` 条目。

## 3. 提交信息规范（commitlint 强制）

格式：`type(scope): subject`，type 白名单：

`feat / fix / docs / style / refactor / perf / test / build / ci / chore / revert / token / registry`

- scope 使用包或栈名：`web / mini / native / tokens / core / registry / hub / docs / repo`；
- subject 用祈使句、≤100 字符、句末无标点；
- 破坏性变更在 footer 写 `BREAKING CHANGE: 说明与迁移方式`。

示例：
```
feat(web): 新增 DataTable 组件（TanStack Table 封装，含四态）
token(color): 新增 color-bg-elevated 语义色
registry(mini): 登记 Button 组件并补映射表
fix(native): 修复 Sheet 在长内容下底部安全区遮挡
```

## 4. 新增组件标准流程（SOP-A）

> 与 AGENTS.md §4 一致，此处给出可勾选的执行步骤。**必须从 `templates/component/<栈>/` 模板复制起步。**

1. **查重**：搜索 `registry/*.json` 与 `registry/component-mapping.json`；确认底座库（shadcn/NutUI/Tamagui）无现成可封装件。
2. **登记映射**：在 `component-mapping.json` 增加 canonical 条目，三栈列名与状态（`implemented/planned`）。
3. **建目录**：`packages/ui-<栈>/src/<PascalName>/`，文件齐全：
   - 组件实现、`types.ts`、`index.ts`（导出）、`<Name>.stories.tsx`（web 必选，其余以演示页替代）、`README.md`、`__examples__/`（至少正常态 + 边界态）、registry item 片段。
4. **实现**：遵循 `05-component-standard.md`（props 设计、受控、四态、token、暗色、i18n、a11y、热区）。
5. **接 token**：任何视觉值引用 token；新增视觉值先走 `04-design-tokens.md` 流程加 token，再使用。
6. **登记 registry**：合并进 `registry/<栈>/registry.json`，字段按 `06-registry.md` 填全（含依赖、适用/禁用场景）。
7. **写文档**：README 含用途、props 表、事件表、示例代码、与底座组件关系、注意事项。
8. **演示接入**：在 `apps/play-<栈>` 增加演示页（hub 收录）。
9. **自检与质量门**：对照 AGENTS.md §7 清单逐项打勾；`pnpm quality` 全绿。
10. **提 PR**：标题按提交规范；PR 描述使用仓库 PR 模板（变更内容/三栈对齐情况/截图或录屏/自检清单）。

## 5. 新增页面模板标准流程（SOP-B）

1. 从 `templates/page/` 复制到 `packages/patterns-<栈>/src/<kebab-scene>/`；
2. 只允许编排已登记组件；缺组件回到 SOP-A，**不得在页面内联造组件**；
3. 数据一律用 core hooks（`useRequest/useTable/useForm`），页面不出现 fetch；
4. 必须包含四态 + 空数据 + 超长文本 + 错误重试示例；
5. 同一场景三栈目录名一致，在各自 `patterns-*/src/index.ts` 与 hub 中登记；
6. 自检 + 质量门 + PR。

## 6. 修改/废弃组件流程

- **修改 props（破坏性）**：同步改三栈映射、文档、示例、所有调用点；commit/PR 标 `BREAKING CHANGE`；给废弃字段保留至少一个版本的兼容并 `console.warn` 提示。
- **废弃组件**：README 顶部标注 `@deprecated` 与替代组件；registry item 标 `status: deprecated`；下个大版本移除。
- **底座升级**（shadcn/NutUI/Tamagui 版本）：在对应 `ui-*` 包升级 → 跑该栈全部示例与测试 → hub 逐组件目检 → 记录 CHANGELOG。

## 7. Token 变更流程（SOP-C）

1. 只改 `packages/tokens/src/tokens/*.json`；
2. 本地 `pnpm tokens:watch` 或 `pnpm tokens:build`；
3. 检查三栈产物 diff，确认影响面；
4. commit type 用 `token`；PR 列出受影响组件/端；
5. 语义色变动必须同步更新暗色映射（见 04 文档）。

## 8. 提 PR 前的强制检查（Definition of Done）

- [ ] 范围与任务一致，无夹带改动；
- [ ] 新组件/页面走完 SOP-A/B，registry 与映射表已登记；
- [ ] 视觉值全部来自 token，无硬编码；
- [ ] 逻辑在 core，视图无请求/无业务分支；
- [ ] 四态、暗色、i18n、a11y（web）、热区（mini/native）齐备；
- [ ] 无 any / @ts-ignore / console.log；
- [ ] 文档（README/props 表）、示例/story、演示页齐全；
- [ ] `pnpm quality` 全绿（registry 校验、format、lint、typecheck、test）；
- [ ] 三栈对齐状态已在映射表标注；
- [ ] 需要截图的（视觉改动）附 web/小程序/原生三端截图或录屏。

## 9. 评审与合入

- 至少 1 名评审；跨栈契约（映射表、token、core API、registry schema）变更需 2 名评审；
- 评审检查点：是否复用而非新造、命名是否符合 03、token 使用、四态、类型严格、文档完整；
- 合入方式：squash merge，最终 commit message 必须通过 commitlint；
- 合入后由 CI 跑全量质量门与三端构建（CI 配置见 09-quality-gate.md）。

## 10. AI 参与开发的特别流程

1. AI 每次开工先读 `AGENTS.md` 与任务涉及的 docs；
2. AI 产出组件/页面后，必须**自行执行** SOP-A/B 的第 6、9 步（登记 + 质量门），不得只交源码；
3. AI 不得自行决定新增第三方依赖、改 token 命名、改映射 schema——这些只能在 PR 中提出、由人评审；
4. AI 生成内容由提交者（人）负责按 §8 复核后再提 PR。
