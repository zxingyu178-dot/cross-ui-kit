# Steps 步骤条（native：iOS / Android）

引导多步流程，横向 / 纵向两方向，四态圆点 + 连线。状态推导在共享内核 `@kit/core`（`deriveStepStatus`），颜色只引用 Tamagui token。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | `StepItem[]` | 必填 | `{ title, description?, status? }` |
| current | number | `0` | 当前步骤索引（从 0 开始） |
| direction | `'horizontal'|'vertical'` | `'horizontal'` | 排列方向 |
| onChange | `(index:number)=>void` | - | 点击**已完成**步骤回调（回溯，带 accessibilityRole=button） |

`StepItem.status` 可显式覆盖推导（如当前步标 `'error'`）。

## 状态视觉（全 token）

- finish：`$primaryDefault` 实心圆 + 白 ✓，连线 `$primaryDefault`；
- process：`$bgCard` 底 + 品牌 2px 描边 + 品牌数字；
- wait：`$bgActive` 灰底 + `$textTertiary` 数字，连线 `$borderDefault`；
- error：`$dangerBg` 底 + `$dangerDefault` 的 !，标题红色。

## 示例

`__examples__/States.tsx`：横向可回溯（上一步/下一步）、纵向、错误态。

## Do / Don't

- Do：流程向导用 Steps，状态交给 current 推导。
- Don't：不在视图手写状态判断；不硬编码圆点/连线颜色。
