# Dialog 对话框（web）

`@radix-ui/react-dialog` 受控封装：居中模态弹窗，承载确认、表单、二次决策。**纯受控**——不内置 Trigger，由外部 `open / onOpenChange` 决定开关，符合"受控优先"。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | - | 受控可见（必填） |
| onOpenChange | (open:boolean)=>void | - | 一切关闭请求统一以 false 回调（遮罩/Esc/关闭钮/取消/确认） |
| title | ReactNode | - | 标题，同时作为无障碍名称 |
| description | ReactNode | - | 描述文本（无 children 时作为正文） |
| children | ReactNode | - | 自定义正文，优先于 description |
| footer | ReactNode | - | 自定义底部；不传则渲染默认取消/确定 |
| showCancel | boolean | true | 是否显示取消按钮 |
| confirmText / cancelText | string | 确定 / 取消 | 按钮文案 |
| confirmLoading | boolean | false | 确定按钮 loading（异步提交防重复） |
| closeOnOverlayClick | boolean | true | 点遮罩是否请求关闭 |
| closeOnEsc | boolean | true | 按 Esc 是否请求关闭 |
| onConfirm / onCancel | () => void | - | 确定 / 取消回调（随后都会请求关闭） |

## 行为约定

- 组件**只发关闭请求**（`onOpenChange(false)`），是否真关由外部受控 state 决定。
- 确定按钮默认在 `onConfirm` 后请求关闭；**`onConfirm` 返回 `false` 可阻止自动关闭**——异步提交时先置 `confirmLoading` 并返回 `false`，父级在 Promise 结束后再 `setOpen(false)`。
- 遮罩点击走 Radix `onPointerDownOutside`、Esc 走 `onEscapeKeyDown`，对应开关为 false 时 `preventDefault()` 拦截。
- 默认底部按钮复用 registry 的 `Button`（取消 secondary / 确定 primary）。

## 视觉与 token

- 卡片：`bg-bg-card + border-border-default + rounded-lg + shadow-popover`，宽度 `90vw / max-w-md` 居中；
- 标题 `text-title-sm text-text-primary`，描述 `text-text-tertiary`；
- 遮罩为通用中性黑半透明 `bg-black/50`（scrim，非品牌色，三栈统一，不进 token）。

## 无障碍

Radix 自带 `role=dialog / aria-modal`、焦点陷阱、Esc、`aria-labelledby`（Title）；无 title 时回退 `aria-label`；右上角关闭钮带 `aria-label=关闭`。

## 示例

`__examples__/States.tsx`：基础确认、警告（无取消）、遮罩/Esc 不关闭 + 提交 loading、自定义 footer。
