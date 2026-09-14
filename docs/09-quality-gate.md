# 09 · 质量门与发布流程

## 1. 质量门总览（层层拦截）

| 阶段 | 手段 | 拦截内容 | 阻断级别 |
|---|---|---|---|
| 编写时 | EditorConfig + Prettier + ESLint（编辑器实时） | 格式、基础坏味道 | 本地 |
| 提交时 | husky pre-commit → lint-staged（prettier + eslint --fix） | 暂存文件格式/语法问题 | 阻断提交 |
| 提交时 | husky commit-msg → commitlint | 提交信息规范 | 阻断提交 |
| 提交前（手动） | `pnpm quality` | registry 校验 + 格式 + lint + 类型 + 测试 | 阻断合入（自查） |
| PR/CI | turbo 全量 build/lint/typecheck/test + registry:validate + 三端构建 | 跨包破坏、产物缺失 | 阻断合入 |
| 评审 | 人工按 02 §8 / 05 §12 / 07 §11 清单 | 设计一致性、复用、四态、a11y | 阻断合入 |
| 发布前 | 版本号、CHANGELOG、registry 产物、hub 构建 | 发布完整性 | 阻断发布 |

## 2. 命令与职责

```bash
pnpm format            # Prettier 全仓写回
pnpm format:check      # 只检查（CI 用）
pnpm lint              # ESLint（turbo 并行）
pnpm typecheck         # tsc --noEmit（strict 基线，子包不得放宽）
pnpm test              # vitest 等（turbo 并行，含覆盖率）
pnpm build             # 全仓构建（tokens 产物先行，^build 依赖保证顺序）
pnpm registry:validate # registry 与映射表结构/引用校验
pnpm quality           # = registry:validate + format:check + lint + typecheck + test
```

## 3. registry 校验脚本规则（scripts/validate-registry.mjs）

P0 实现结构校验，P1 起补全：

1. 三份 registry.json 与 component-mapping.json 均为合法 JSON；
2. item 必填字段齐全（name/type/title/description/canonical/status/stack/files/props/events/tokens/states/docs/examples）；
3. `files`、`docs`、`examples` 路径在仓库中真实存在；
4. item 的 canonical 必须存在于映射表；映射表中 implemented 的栈必须能找到对应 item；
5. name 与命名空间格式合法（kebab-case，无重复）；
6. status 枚举合法，deprecated 项必须标注替代组件；
7. （P1）props 与 `<Name>.types.ts` 导出类型做一致性比对（脚本 + 评审双保险）；
8. （P2）hub 构建时反向校验：每个映射条目在 hub 可渲染。

## 4. 测试策略

| 对象 | 测试类型 | 工具 | 最低要求 |
|---|---|---|---|
| core（hooks/请求/表格/校验） | 单元 + 集成 | vitest | 核心分支 100% 覆盖，边界/异常必测 |
| tokens | 快照 + 产物断言 | 自研脚本/vitest | 三栈产物生成且关键 token 存在；暗色映射齐全 |
| ui-web 组件 | 组件测试 + 视觉/交互/a11y | Storybook + testing-library + play 函数/a11y 插件 | 四态、键盘交互、aria 断言 |
| ui-mini 组件 | H5 形态组件测试 + 小程序真机/模拟器回归 | vitest + 微信开发者工具 | 四态示例页 + 核心路径人工清单 |
| ui-native 组件 | 组件测试 + 模拟器快照 | jest-expo / RNTL | 四态示例 + 手势路径人工清单 |
| patterns 页面 | 端到端冒烟 | Playwright（web/H5）、小程序自动化、Maestro（native，P3+） | 每个页面模板主路径可走通 |

## 5. 契约变更管理（高约束文件）

以下文件变更视为**契约变更**，需 2 人评审 + 在 CHANGELOG 记录迁移说明：

- `AGENTS.md`、`docs/03`、`docs/04`、`docs/05`、`docs/06`（规则与标准）；
- registry schema、`component-mapping.json` 结构；
- `tsconfig.base.json` 严格选项的放宽（原则上只收紧不放宽）；
- core 公共 API 签名、token 命名与删除。

## 6. CI 流水线（建议配置，P6 前完成）

```
install(pnpm, frozen-lockfile)
 → tokens:build
 → registry:validate
 → format:check → lint → typecheck → test
 → build（turbo 全量）
 → 三端构建冒烟：play-web(vite build) / play-miniapp(taro build weapp+h5) / play-native(expo export) / play-desktop(tauri build，仅 Windows/macOS runner)
 → hub 构建
```

- lockfile 必须冻结安装（`--frozen-lockfile`），不一致直接失败；
- 三端构建冒烟保证"库改动能被各端真实编译"。

## 7. 版本与发布

- 语义化版本：组件新增 minor；破坏性变更 major（token 删除、props 不兼容、registry schema 变更）；修复 patch；
- 每个可发布包独立版本（changesets 管理，P6 引入）；
- 发布物：
  1. npm 私有源包（`@kit/*`，含 dist 与类型）；
  2. registry 静态产物（三份 registry.json + 源文件，供 CLI/MCP 拉取）；
  3. tokens 三栈产物随 `@kit/tokens` 发布；
  4. hub 静态站点（组件文档与预览）；
- 发布流程：changeset → PR → 合入 main 自动出 Version PR → 打 tag → CI 发布 → CHANGELOG 归档；
- 废弃策略：deprecated 保留一个大版本，文档与 registry 双标注，再移除。

## 8. 缺陷与回归

- 修缺陷必须附带复现用例（测试或示例页），先红后绿；
- 视觉缺陷修复后附三端对比截图；
- 线上/真机问题记录进 `docs/incident/`（按日期归档），共性问题回流为组件标准或 lint 规则。

## 9. P0 阶段质量门现状（本骨架交付时）

- [x] EditorConfig / Prettier / ESLint / tsconfig 严格基线就位
- [x] husky + lint-staged + commitlint 钩子就位（install 后生效）
- [x] registry 校验脚本就位（结构校验，`pnpm registry:validate` 实测通过）
- [x] Style Dictionary token 构建链路实测通过（9 个三栈产物，含产物自检）
- [x] `pnpm quality` 全量实测通过（turbo 16/16 任务；pnpm peers check 零冲突）
- [ ] vitest 接入与首批用例（P1）
- [ ] Storybook 与 MCP 接入（P1，web 栈）
- [ ] CI 流水线（P6 前）
- [ ] changesets 发布（P6）
