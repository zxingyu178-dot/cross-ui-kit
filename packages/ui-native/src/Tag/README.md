# Tag 标签（native：iOS / Android）

可**选中（筛选）**、可**关闭（删除）**的内容标签。与纯展示的 [Badge](../Badge) 区别：Tag 承担交互，Badge 只做状态标记。颜色/字号只引用 Tamagui token，调色板与 Badge 一致。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | 必填 | 标签内容 |
| variant | `'neutral'|'primary'|'success'|'warning'|'danger'|'info'` | `'neutral'` | 语义色 |
| tone | `'soft'|'solid'|'outline'` | `'soft'` | 形态；selected 时强制 solid |
| size | `'sm'|'md'` | `'md'` | 20 / 24 高 |
| selected | boolean | false | 选中态（实心），配 onPress 切换，accessibilityState.selected |
| closable | boolean | false | 显示关闭 × |
| disabled | boolean | false | 禁点/禁关，opacity .5 |
| onClose | `() => void` | - | 点 × 触发（子 Stack 响应手势，不触发标签 onPress） |
| onPress | `() => void` | - | 点标签本身（筛选切换），带 accessibilityRole=button |

## 两种典型用法

- **筛选**：`selected` + `onPress`；**可删除**：`closable` + `onClose`（父级从数组移除）。

## 视觉

- 胶囊 borderRadius 999；soft/solid/outline × 6 语义色与 Badge 同值；关闭 × 颜色随标签文字色。

## 示例

`__examples__/States.tsx`：语义色、形态、尺寸、可选中、可关闭、禁用。

## Do / Don't

- Do：筛选/分类/标签管理用 Tag；状态计数用 Badge。
- Don't：不硬编码颜色；选中/删除数据由父级受控维护。
