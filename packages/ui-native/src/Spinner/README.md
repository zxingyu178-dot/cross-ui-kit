# Spinner 加载指示器（native：iOS / Android）

用于**不确定时长**的加载。外层 `react-native` `Animated.loop` 做 1s linear 匀速旋转（useNativeDriver，不依赖 Tamagui animation driver），内层 Tamagui `Stack` 承载 border 视觉、颜色只引用 token。确定比例用 `Progress`，内容占位用 `Skeleton`。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| size | `'sm'|'md'|'lg'` | `'md'` | 直径 16 / 24 / 32（icon/control 刻度） |
| tone | `'primary'|'muted'|'inverse'` | `'primary'` | 主色 / 中性灰 / 反白 |
| accessibilityLabel | string | - | 无障碍标签 |

## 视觉与 token

- 统一 `borderWidth=2`、全圆（9999）；primary 轨道 `$borderDefault` + 旋转头 `$primaryDefault`；muted 头 `$textTertiary`；inverse 白圈（结构色）；
- 直径 sm 16（icon-sm）、md 24（icon-lg）、lg 32（control-height-sm）；旋转周期 1s linear infinite。
- 无障碍：`accessibilityRole=progressbar` + `accessibilityState.busy`。

## 示例

`__examples__/States.tsx`：尺寸、色调、反白（主色底）、带文字。

## Do / Don't

- Do：按钮提交中、局部刷新等不可预期等待用 Spinner；主色按钮内用 `tone="inverse"`。
- Don't：不硬编码颜色/尺寸；能给出比例用 Progress；整块内容首次加载用 Skeleton。
