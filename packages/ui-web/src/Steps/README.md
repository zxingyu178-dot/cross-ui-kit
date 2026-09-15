# Steps 步骤条（web）

引导多步流程（表单、审批、下单、向导），支持横向 / 纵向，四态圆点 + 连接线。状态推导逻辑在共享内核 `@kit/core`（`deriveStepStatus`），三栈一致。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | `StepItem[]` | 必填 | `{ title, description?, status? }` |
| current | number | `0` | 当前步骤索引（从 0 开始） |
| direction | `'horizontal'|'vertical'` | `'horizontal'` | 排列方向 |
| onChange | `(index:number)=>void` | - | 点击**已完成**步骤回调（回溯）；未完成步不可点 |
| className / id | - | - | 透传 |

`StepItem.status` 可显式覆盖推导结果（如把当前步标为 `'error'`）。

## 状态与视觉（全 token）

| 状态 | 圆点 | 连线（该步到下一步） | 标题 |
|---|---|---|---|
| finish（index<current） | 品牌实心 + 白色 ✓ | 品牌色高亮 | text-primary |
| process（index=current） | 白底 + 品牌描边 + 品牌数字 | 中性 | text-primary 加粗，`aria-current="step"` |
| wait（index>current） | 灰底 + 灰数字 | 中性边框色 | text-tertiary |
| error（显式指定） | 浅红底 + 红色 ! | 按推导 | danger 色 |

## 无障碍 / 交互

- 语义化 `ol/li`；当前步 `aria-current="step"`；
- 可回溯的 finish 步骤为 `role="button"`、`tabIndex=0`，Enter/Space 同样触发；
- 连线为装饰元素 `aria-hidden`。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（横向可回溯 + 上一步/下一步、纵向、错误态）
- Storybook：`Steps.stories.tsx`

## Do / Don't

- Do：流程向导用 Steps；状态交给 `current` 推导，错误用 `item.status` 覆盖。
- Don't：不在视图里手写状态判断（用 core 推导）；不硬编码圆点/连线颜色。
