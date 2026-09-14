# Toast 轻提示（web）

`@radix-ui/react-toast` 受控封装（自包含 Provider/Viewport/Root）：轻量、短暂、**不阻断交互**的全局反馈，用于操作结果、状态提醒。与 Dialog（模态、阻断、需决策）互补。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | - | 受控可见（必填） |
| onOpenChange | (open:boolean)=>void | - | 自动消失/滑动关闭时以 false 回调 |
| message | ReactNode | - | 提示文本（必填） |
| type | `'info'|'success'|'warning'|'error'|'loading'` | `'info'` | 语义类型，决定图标与语义色 |
| duration | number | 2400 | 自动关闭毫秒数；`0` 表示不自动关（loading 常驻，外部控制关闭） |
| position | `'top'|'center'|'bottom'` | `'center'` | 展示位置 |
| onClose | () => void | - | 完全关闭后回调 |
| className | string | - | 卡片类名 |

## 行为约定

- **受控**：组件在到时/滑动关闭时只发 `onOpenChange(false)`，由外部 state 决定；`duration=0` 时不计时（loading 场景由外部在异步结束后 `setOpen(false)`）。
- 单组件即取即用（内部已含 Provider/Viewport）。多条排队/全局命令式调用（`toast.success(...)`）属于后续 `ToastProvider + useToast`（patterns/interaction 层）规划，不在本基础组件内。
- Toast 不阻断交互：居中 Viewport 为 `pointer-events-none`，仅卡片可交互/滑动。

## 视觉与 token

- 卡片：`bg-bg-card + border-border-default + rounded-md + shadow-popover`，亮暗均清晰；
- 图标语义色：success `text-success-default`、warning `text-warning-default`、error `text-danger-default`、info/loading `text-primary-default`；
- 文本 `text-body-md text-text-primary`；层级用 Tailwind 原生 `z-50`（与 Radix 弹层约定一致，非品牌视觉值）。

## 无障碍

Radix 自带 `role=status`（loading/info）/ `role=alert`（错误，由 Radix 按 type 处理）、`aria-live` 播报、Esc/滑动关闭与焦点管理。

## 示例

`__examples__/States.tsx`：五种语义类型、三种位置、常驻 loading、手动关闭。
