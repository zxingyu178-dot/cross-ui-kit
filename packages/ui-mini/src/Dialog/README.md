# Dialog 对话框（mini：小程序 / 移动 H5）

基于 **NutUI `<Popup position="center">`（受控 visible）** 做弹层底座（遮罩、动画、层级、teleport），卡片视觉自建（`Dialog.scss` 全量引用 `--kit-*` token），底部按钮复用 registry 的 `ui-mini` `Button`。**纯受控**——只发 `onOpenChange(false)` 请求，是否真关由外部决定。

> NutUI 自带的 `Dialog` 是命令式（`Dialog.open(selector, options)`，需挂载选择器），不符合本库受控/组合契约，故不采用，改用受控 `Popup` + 自建卡片。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | - | 受控可见（必填） |
| onOpenChange | (open:boolean)=>void | - | 关闭请求统一以 false 回调（遮罩/关闭钮/取消/确认） |
| title | ReactNode | - | 标题（建议字符串或 Text 节点），同时作为无障碍名称 |
| description | ReactNode | - | 描述文本（无 children 时作为正文） |
| children | ReactNode | - | 自定义正文，优先于 description |
| footer | ReactNode | - | 自定义底部；不传则渲染默认取消/确定（小端等宽 block） |
| showCancel | boolean | true | 是否显示取消按钮 |
| confirmText / cancelText | string | 确定 / 取消 | 按钮文案 |
| confirmLoading | boolean | false | 确定按钮 loading（异步提交防重复） |
| closeOnOverlayClick | boolean | true | 点遮罩是否请求关闭（false 时 `onOverlayClick` 返回 false 拦截） |
| onConfirm / onCancel | () => void | - | 确定 / 取消回调（随后都请求关闭） |
| className | string | - | 弹层容器类名（仅允许 token 化样式） |

## 行为约定

- 组件只发关闭请求，是否真关由外部受控 state 决定；确定按钮默认在 `onConfirm` 后请求关闭，**`onConfirm` 返回 `false` 可阻止自动关闭**（异步提交：先置 `confirmLoading` 并返回 `false`，父级完成后再 `setOpen(false)`）。
- `closeOnOverlayClick=false` 时通过 Popup `onOverlayClick` 返回 `false` 阻止关闭（防误触场景）。
- 关闭钮热区为 `--kit-touch-min`（44px），符合小端触控标准。

## 视觉与 token

- 卡片：`--kit-color-bg-card` + `--kit-color-border-default` + `--kit-radius-lg` + `--kit-shadow-popover`，宽度 86% 居中；
- 标题 `--kit-font-size-title-sm / weight-medium / text-primary`，描述 `body-md / text-tertiary`；
- 遮罩为通用中性黑半透明 `rgba(0,0,0,0.45)`（scrim，非品牌色，三栈统一，不进 token），经 Popup `overlayStyle` 传入。

## 前置依赖（壳工程）

NutUI 弹层的定位/动画样式由 NutUI 全局样式提供，壳工程（play-miniapp）需在入口引入 `@nutui/nutui-react-taro/dist/style.css`（组件库内不重复引入）。

## 示例

`__examples__/States.tsx`：基础确认、警告（无取消）、遮罩不关闭 + 提交 loading、自定义 footer。
