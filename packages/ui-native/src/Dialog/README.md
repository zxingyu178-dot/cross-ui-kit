# Dialog 对话框（native：iOS / Android）

基于 **RN `Modal`（transparent + fade）** 做全屏遮罩层，卡片用 **Tamagui `YStack`** 居中，底部按钮复用 registry 的 `ui-native` `Button`。**纯受控**——只发 `onOpenChange(false)` 请求，是否真关由外部决定。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | - | 受控可见（必填） |
| onOpenChange | (open:boolean)=>void | - | 关闭请求统一以 false 回调（遮罩/返回键/关闭钮/取消/确认） |
| title | ReactNode | - | 标题，同时作为无障碍名称 |
| description | ReactNode | - | 描述文本（无 children 时作为正文） |
| children | ReactNode | - | 自定义正文，优先于 description |
| footer | ReactNode | - | 自定义底部；不传则渲染默认取消/确定（右对齐） |
| showCancel | boolean | true | 是否显示取消按钮 |
| confirmText / cancelText | string | 确定 / 取消 | 按钮文案 |
| confirmLoading | boolean | false | 确定按钮 loading（异步提交防重复） |
| closeOnOverlayClick | boolean | true | 点遮罩 / Android 返回键是否请求关闭 |
| onConfirm / onCancel | () => void | - | 确定 / 取消回调（随后都请求关闭） |
| accessibilityLabel | string | - | 无障碍标签（无标题时建议提供） |

## 行为约定

- 组件只发关闭请求，是否真关由外部受控 state 决定；确定按钮默认在 `onConfirm` 后请求关闭，**`onConfirm` 返回 `false` 可阻止自动关闭**（异步提交：先置 `confirmLoading` 并返回 `false`，父级完成后再 `setOpen(false)`）。
- 遮罩用外层 RN `Pressable`，卡片内层再放一个无 `onPress` 逻辑的 `Pressable` 拦截冒泡，避免点卡片关闭。
- Android 返回键走 Modal `onRequestClose`，与遮罩共用 `closeOnOverlayClick` 开关。
- 关闭钮热区为 Tamagui token `$touchMin`（44px），符合触控标准。

## 视觉与 token

- 卡片：`$bgCard` + `$borderDefault` + `radius.$lg` + `padding.$4`，宽度 88% 居中；
- 标题 `fontSize.$titleSm / fontWeight.medium / $textPrimary`，描述 `bodyMd / $textTertiary`；
- 遮罩为通用中性黑半透明 `rgba(0,0,0,0.45)`（scrim，非品牌色，三栈统一，不进 token），因 RN 原生 style 不解析 Tamagui token，故直接写在原生 `Pressable` 上。
- 卡片层级由 RN `Modal` 原生提供，无需 z-index / 阴影 token。

## 无障碍

`Modal` 自带 `accessibilityViewIsModal`（iOS）/ 模态焦点隔离；卡片 `accessibilityRole="alert"`，关闭钮带 `accessibilityLabel` 与 `role=button`。

## 示例

`__examples__/States.tsx`：基础确认、警告（无取消）、遮罩/返回键不关闭 + 提交 loading、自定义 footer。
