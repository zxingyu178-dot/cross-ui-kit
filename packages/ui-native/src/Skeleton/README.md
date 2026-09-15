# Skeleton 骨架屏（native：iOS / Android）

内容加载中的占位灰块，服务四态之 **loading（骨架屏优先）**。Tamagui `Stack/YStack` 承担 token 化视觉，呼吸脉冲用 `react-native` 的 `Animated.loop`（不依赖 Tamagui animation driver），整组统一淡入淡出。三形态 `rect` / `circle` / `text`。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| variant | `'rect'|'circle'|'text'` | `'rect'` | 骨架形态 |
| size | `'sm'|'md'|'lg'` | `'md'` | circle 直径：`$6`(24) / `$10`(40) / `$14`(56) |
| lines | number | `3` | text 行数（末行收窄 60%） |
| width / height | string \| number | 见下 | 覆盖宽高：数字 px 或百分比字符串 |
| accessibilityLabel | string | - | 无障碍标签 |

默认尺寸：rect 高 `$4`(16)、圆角 `$md`(8)；text 行高 `$3`(12)、行距 `$2`(8)、全圆；circle 全圆。

## 行为约定

- 纯占位；底色 `$bgActive`，尺寸/圆角只引用 token；用户宽高覆盖走 style（DimensionValue）；
- 呼吸周期 1.5s（750+750）为组件内置动画常量，与 web animate-pulse 同性质；
- 与真实内容布局尽量同构，减少加载完成后的跳动。

## 示例

`__examples__/States.tsx`：rect/circle/text + 用户卡片、列表项组合。

## Do / Don't

- Do：loading 态优先用 Skeleton 还原页面骨架。
- Don't：不硬编码底色/圆角；不放真实文案；长时间不可预期的全屏加载用 Spinner。
