# Toast 轻提示（native：iOS / Android）

自建**绝对定位**轻提示（不使用 `Modal`，避免自动消失期间阻断下层交互），卡片用 Tamagui `XStack`，`duration` 到时由内部计时器请求关闭。纯受控。Tamagui 1.121 无内置 Toast，故不引第三方。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| open | boolean | - | 受控可见（必填） |
| onOpenChange | (open:boolean)=>void | - | 自动消失时以 false 回调 |
| message | ReactNode | - | 提示文本（建议字符串） |
| type | `'info'|'success'|'warning'|'error'|'loading'` | `'info'` | 语义类型，决定图标与语义色 |
| duration | number | 2400 | 自动关闭毫秒数；`0` 常驻（loading，外部结束后 `setOpen(false)`） |
| position | `'top'|'center'|'bottom'` | `'center'` | 绝对定位位置（需挂页面根容器内） |
| onClose | () => void | - | 完全关闭后回调 |
| accessibilityLabel | string | - | 无障碍标签（默认朗读 message） |

## 行为约定

- 组件只发关闭请求；计时器依赖仅 `open/duration`（回调经 ref 引用，避免父级内联函数重置计时）。
- 外层与卡片均 `pointerEvents="none"`，Toast 不拦截触摸。
- loading 用 Tamagui `Spinner`（颜色走 token），其余类型用语义色字形图标。
- **挂载位置**：Toast 为绝对定位，应放在页面根容器（flex:1 的定位容器）内；多条排队/全局命令式调用属于后续 Provider（patterns/interaction 层）规划。

## 视觉与 token

- 卡片：`$bgCard` + `$borderDefault` + `radius.$md`，最大宽 90%；
- 图标语义色：success `$successDefault`、warning `$warningDefault`、error `$dangerDefault`、info/loading `$primaryDefault`；
- 文本 `fontSize.$bodyMd / $textPrimary`；层级用 RN `zIndex`（层叠机制常量，非品牌视觉值）。

## 无障碍

卡片 `accessibilityRole="alert"`，系统会朗读新出现的提示；loading 由 Spinner 表达进行态。

## 示例

`__examples__/States.tsx`：五种语义类型、三种位置、常驻 loading、手动关闭。
