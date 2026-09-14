# Toast 轻提示（mini：小程序 / 移动 H5）

基于 **NutUI `<Toast>`（受控 visible + duration 计时）** 做弹层底座（定位、自动消失、动画），卡片视觉与图标自建（`Toast.scss` 全量引用 `--kit-*` token）。轻量、短暂、不阻断交互；纯受控，到时只发 `onOpenChange(false)` 请求。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | - | 受控可见（必填） |
| onOpenChange | (open:boolean)=>void | - | 自动消失时以 false 回调 |
| message | ReactNode | - | 提示文本（必填） |
| type | `'info'|'success'|'warning'|'error'|'loading'` | `'info'` | 语义类型，决定图标与语义色 |
| duration | number | 2400 | 自动关闭毫秒数；`0` 常驻（内部转为极大值，由外部 visible 关闭，用于 loading） |
| position | `'top'|'center'|'bottom'` | `'center'` | 展示位置（映射 NutUI top/middle/bottom） |
| onClose | () => void | - | 完全关闭后回调 |
| className | string | - | 容器类名（仅允许 token 化样式） |

## 行为约定

- 组件只发关闭请求；`duration=0`（loading 常驻）时不计时，外部异步结束后 `setOpen(false)`。
- success/error/warning/info 图标自建（Unicode + 语义色，颜色可控）；loading 用 NutUI 内置转圈并在 scss 中染主色。
- 多条排队 / 命令式 `Toast.show(...)` 属于后续全局 Provider（patterns/interaction 层）规划，本基础组件保持单条受控形态。

## 视觉与 token

- 卡片：`--kit-color-bg-card` + `--kit-color-border-default` + `--kit-radius-md` + `--kit-shadow-popover`，最大宽 80vw；
- 图标语义色：success `--kit-color-success-default`、error `--kit-color-danger-default`、warning `--kit-color-warning-default`、info/loading `--kit-color-primary-default`；
- 文本 `--kit-font-size-body-md / text-primary`。

## 前置依赖（壳工程）

NutUI Toast 的定位/动画样式由 NutUI 全局样式提供，壳工程（play-miniapp）需在入口引入 `@nutui/nutui-react-taro/dist/style.css`。

## 示例

`__examples__/States.tsx`：五种语义类型、三种位置、常驻 loading、手动关闭。
