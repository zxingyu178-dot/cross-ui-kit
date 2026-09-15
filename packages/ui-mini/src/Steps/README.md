# Steps 步骤条（mini：小程序 / 移动 H5）

引导多步流程，横向 / 纵向两方向，四态圆点 + 连线。状态推导在共享内核 `@kit/core`（`deriveStepStatus`），颜色/尺寸在 `Steps.scss` 全 token 化。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | `StepItem[]` | 必填 | `{ title, description?, status? }` |
| current | number | `0` | 当前步骤索引（从 0 开始） |
| direction | `'horizontal'|'vertical'` | `'horizontal'` | 排列方向 |
| onChange | `(index:number)=>void` | - | 点击**已完成**步骤回调（回溯） |
| className | string | - | 透传 |

`StepItem.status` 可显式覆盖推导（如当前步标 `'error'`）。

## 状态视觉（全 token）

- finish：品牌实心圆 + 白 ✓，连线高亮品牌色；
- process：卡片白底 + 品牌描边 + 品牌数字；
- wait：灰底 + 灰数字，连线中性边框色；
- error：浅红底 + 红 !，标题红色。

## 交互

finish 步骤点击区（横向为整步 main、纵向为圆点 rail-main）绑 onTap 回溯；未完成步不可点。

## 示例

`__examples__/States.tsx`：横向可回溯（上一步/下一步）、纵向、错误态。

## Do / Don't

- Do：流程向导用 Steps，状态交给 current 推导。
- Don't：不在视图手写状态判断；不硬编码圆点/连线颜色。
