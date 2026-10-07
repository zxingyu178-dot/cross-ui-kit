# 12 · Beta → Stable 毕业门（Graduation Gate）

> 目的：把"能编译的 beta"变成"任何项目真敢依赖的 stable"。
> 一个组件在三栈 registry 与 `component-mapping.json` 中默认是 `beta`；只有通过本文件全部毕业门，
> 才允许由脚本 `scripts/graduate.mjs` 自动翻转为 `stable`。**禁止手动改 status 字段。**

## 1. 三个成熟度等级

| 等级 | 含义 | 可被业务依赖？ |
|---|---|---|
| `planned` | 仅有契约（registry/mapping 条目），未落地 | 否 |
| `beta` | 已实现、typecheck/lint 通过、有 story，但未完成可靠性验证 | 可试用，API 可能变 |
| `stable` | 通过全部毕业门，契约与实现一致 | 是，遵循语义化版本 |

`deprecated` 为退出通道，必须给出 `replacement`。

## 2. 毕业门清单（十项，缺一不可）

| # | 门 | 判定方式 | 自动化 |
|---|---|---|---|
| G1 | 三栈登记一致 | 三栈 registry item 与 mapping 条目齐全、canonical 唯一 | 脚本 + `registry:validate` |
| G2 | 质量门全绿 | `pnpm quality`（registry/format/lint/typecheck/test）通过 | pipeline |
| G3 | 基础单测 | 组件或其依赖的 core 逻辑有真实测试且通过（非 `passWithNoTests`） | 脚本检测 + vitest |
| G4 | Story 覆盖主要状态 | `<C>.stories.tsx` 存在，且覆盖 normal/边界（至少 2 个 story，含主要状态） | 脚本检测 |
| G5 | 关键交互测试 | 主要交互（开/关、选择、提交、排序、翻页…）有测试并通过 | Playwright（P0-4） |
| G6 | 亮色 / 暗色 | 两套主题都渲染正确、对比度达标 | 视觉截图 + axe |
| G7 | 超长 / 极端文本 | 超长文本、空值、极小宽度下不破版 | story 场景 + 截图 |
| G8 | 无障碍 | axe 无 serious/critical 违规；键盘可达；焦点管理正确 | axe-core |
| G9 | 视觉回归 | 与 golden 截图差异在阈值内 | Playwright 视觉回归 |
| G10 | Demo 实运行 | 在 play-web（及后续 play-miniapp/native/desktop）真实运行 | 证据记录 |

> 在 P0-4（Playwright/Storybook/axe/视觉回归）落地前，G5/G6/G8/G9 暂以**证据文件**
> （evidence，含截图路径、验收人、日期）判定；P0-4 完成后改为自动判定，证据仅作补充。

## 3. 证据文件（Evidence）

路径：`registry/graduation/evidence/<canonical>.json`

```json
{
  "canonical": "Button",
  "gates": {
    "interaction": { "status": "pass", "ref": "e2e/button.spec.ts" },
    "lightDark": {
      "status": "pass",
      "evidence": ["registry/graduation/shots/Button-light.png", "registry/graduation/shots/Button-dark.png"],
      "by": "zxingyu",
      "date": "2026-10-07"
    }
  }
}
```

- 每项 `status` 为 `pass | pending | fail`；只有 `pass` 计入通过。
- 自动门由脚本实时计算，证据文件中的同名字段**不覆盖**自动结果（防止造假）。
- 证据文件入库；截图等大体积产物如不入库，需在文档中给出可复现的生成命令。

## 4. 毕业流程

```bash
pnpm graduate:check          # 查看首批名单的门状态（不改动任何文件）
pnpm graduate Button Input   # 尝试毕业指定组件：全门通过才翻转 status
pnpm graduate --dry-run ...  # 只预览将改动的文件
```

翻转动作（仅在全部门通过时）：
1. `component-mapping.json` 中该 canonical 三栈 `status` → `stable`；
2. 三份 `registry/<stack>/registry.json` 对应 item `status` → `stable`；
3. 保持 JSON 两空格缩进、键序不变；
4. 随后按 AGENTS.md §11 提交并 push。

任一门未过：脚本列出阻塞项并以非零码退出，**不做任何修改**。

## 5. 回退

stable 组件若出现契约破坏或回归：`pnpm regress <canonical>` 将其降回 beta，并在提交信息注明原因；
破坏性 API 变更按 AGENTS.md §6 标注 `BREAKING CHANGE`。

## 6. 首批毕业名单（20）

见 `registry/graduation/first-batch.json`：选择最常用、落地最早、story 最完整的 20 个组件。
其余组件在 P0-4 完成后按批次毕业；新组件默认 beta，不允许直接 stable。
