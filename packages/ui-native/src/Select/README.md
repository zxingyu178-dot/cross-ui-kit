# Select 选择器（native：iOS / Android）

Tamagui 触发框 + React Native `Modal` 底部 action sheet（移动端惯例），视觉值全部引用 Tamagui token。

## 映射（统一 API -> React Native）

| 统一 | native 实现 |
|---|---|
| 选择交互 | 点击触发框打开 `Modal(transparent + slide)`，底部卡片列选项，遮罩/选项点击关闭 |
| onChange(value) | 选项 Pressable onPress 回调 value 字符串并关闭弹层 |
| value/defaultValue | 反查选中项，触发框显示其 label，弹层内显示 ✓ |
| size sm/md/lg | 触发框高度 `$controlSm/Md/Lg` + 字号 `$bodySm/Md/Lg` |
| error | 触发框 `$borderDanger` + 错误文本（accessibilityRole=alert） |
| disabled | 触发框 `$bgHover`、Pressable disabled |
| option.disabled | 选项 opacity 0.4 + disabled，press 不变色 |

## Props

options/value/defaultValue/placeholder/size/disabled/error/accessibilityLabel/onChange，语义与 web/mini 一致。

## 约定与 token

- 选项 `label` 请传字符串（内部 `String()` 兜底）；
- 遮罩用 `rgba(0,0,0,0.45)`（通用半透明遮罩，非语义色，不进 token）；
- 弹层卡片 `$bgCard + $borderDefault + 顶部圆角 $lg`，按压项 `$bgHover`，选中勾 `$primaryDefault`；
- tamagui.config 需注册：color `primaryDefault/textPrimary/textTertiary/textDisabled/textDanger/bgCard/bgHover/borderDefault/borderDanger`，radius `md/lg`，size `controlSm/Md/Lg`，space `1/2/3/4`，font `bodySm/Md/Lg`。

## 无障碍

触发框 `accessibilityRole=button` + `accessibilityState{disabled,expanded}`；选项 `accessibilityRole=menuitem` + `selected/disabled`；错误文本 alert。
