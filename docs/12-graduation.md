# 12 · Beta → Stable 毕业门（Graduation Gate）

> 目的：把"能编译的 beta"变成"任何项目真敢依赖的 stable"。
> 成熟度 **`planned → beta → stable` 是每个 stack（web / mini / native）独立的生命周期**：
> 某一栈的测试与证据只能使该栈毕业，禁止跨栈自动翻转。**禁止手动改 status 字段。**

## 1. 三个成熟度等级（按栈独立）

| 等级 | 含义 | 可被业务依赖？ |
|---|---|---|
| `planned` | 仅有契约（registry/mapping 条目），未落地 | 否 |
| `beta` | 已实现、typecheck/lint 通过，但未完成该栈可靠性验证 | 可试用，API 可能变 |
| `stable` | 通过该栈全部毕业门，契约与实现一致 | 是，遵循语义化版本 |

同一个 canonical 可以在 web 为 `stable`，而在 mini / native 仍为 `beta`。
`deprecated` 为退出通道，必须给出 `replacement`。

## 2. Web 毕业门（十项，缺一不可）

| # | 门 | 判定方式 | 类型 |
|---|---|---|---|
| G1 | 本栈登记一致 | mapping 条目与 web registry item 齐全、canonical 唯一 | 自动 + `registry:validate` |
| G2 | quality:stable 全绿 | 当前 HEAD 的验证产物存在、全部阶段通过且 `verifiedStacks` 含 web | 自动（产物绑定 SHA） |
| G3 | 基础单测 | 组件或其依赖的 core 逻辑有真实测试且通过（非 `passWithNoTests`） | 自动 + vitest |
| G4 | Story 覆盖主要状态 | `<C>.stories.tsx` 存在，至少 2 个 story 覆盖主要状态 | 自动 |
| G5 | 关键交互测试 | 开/关、选择、提交、排序、翻页等有测试并通过 | Playwright interaction |
| G6 | 亮色 / 暗色 | 两套主题渲染正确、对比度达标 | 视觉截图 + axe |
| G7 | 超长 / 极端文本 | 超长文本、空值、极小宽度下不破版 | story 场景 + 截图 |
| G8 | 无障碍 | axe 无 serious/critical；键盘可达；焦点管理正确 | Playwright axe |
| G9 | 视觉回归 | 与 golden 截图差异在阈值内 | Playwright visual |
| G10 | Demo 实运行 | 在 play-web 真实挂载运行 | 证据记录 |

### Mini / Native 门

在对应栈具备完整测试环境（P1 实机化：play-miniapp / play-native）前：
- 各门状态为 **`pending`**，组件**保持 `beta`**；
- **禁止伪造 pass 证据**：即使放入证据文件，G2（pipeline）仍要求一份
  `verifiedStacks` 覆盖该栈、绑定当前 HEAD 的验证产物——该产物只能由真实运行的质量门生成。

## 3. 两个质量门

| 命令 | 范围 | 用途 |
|---|---|---|
| `pnpm quality` | registry 校验、format、lint、typecheck、单测、毕业机制测试 | 快速基础质量门，日常改动必过 |
| `pnpm quality:stable` | quality 全部 + play-web 构建 + Storybook 构建 + Playwright interaction/axe/visual | Stable 毕业的完整可信门 |

`quality:stable` 全部通过后，生成**绑定当前 Git commit SHA** 的机器可读产物：

```
registry/graduation/verify/<sha>.json
```

内容含 `sha`、`verifiedStacks`、各阶段状态与耗时、`allPass`。产物不入库（可随时重建）。

## 4. 证据文件（Evidence，按栈）

路径：`registry/graduation/evidence/<stack>/<canonical>.json`

```json
{
  "canonical": "Button",
  "gates": {
    "interaction": { "status": "pass", "ref": "packages/ui-web/src/Button/Button.test.tsx" },
    "lightDark": { "status": "pass", "ref": ".../Button-light-chromium-win32.png; Button-dark-chromium-win32.png" }
  }
}
```

- 每项 `status` 为 `pass | pending | fail`，只有 `pass` 计入通过。
- 自动门由脚本实时计算，证据文件中的同名字段**不覆盖**自动结果（防造假）。
- 证据文件入库；大体积产物如不入库，需给出可复现的生成命令。

## 5. 毕业流程（按栈）

```bash
pnpm quality:stable                       # 1. 跑完整门，生成当前 HEAD 的验证产物
pnpm graduate --stack web --check         # 2. 查看 web 门状态（不改文件）
pnpm graduate --stack web                 # 3. 全门通过才翻转 web 的 beta→stable
pnpm graduate --stack web --dry-run       #    预览，不写入
```

翻转（仅全门通过、仅目标栈）：
1. `component-mapping.json` 中该 canonical 的 `stacks.<stack>.status → stable`；
2. `registry/<stack>/registry.json` 对应 item `status → stable`；
3. **其他栈一律不动**；保持两空格缩进、键序不变；
4. 随后按 AGENTS.md §11 提交并 push。

任一门未过：列出阻塞项并以非零码退出，**不做任何修改**。
重复运行是幂等的：组件已是 stable 时脚本退出 0 且不写文件。

## 6. 回退（按栈）

`pnpm regress -- --stack web <canonical>` 仅把该栈降回 beta（其他栈不受影响），
并在提交信息注明原因；破坏性 API 变更按 AGENTS.md §6 标注 `BREAKING CHANGE`。

## 7. 首批毕业名单（20）

见 `registry/graduation/first-batch.json`：最常用、落地最早、story 最完整的 20 个组件。
**仅 web 栈毕业为 stable；mini / native 在实机化验收前保持 beta。**
其余组件按批次毕业；新组件默认 beta，不允许直接 stable。
