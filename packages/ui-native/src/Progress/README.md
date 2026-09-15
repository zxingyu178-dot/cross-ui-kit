# Progress 进度条（native：iOS / Android）

基于 **Tamagui `Progress` / `Progress.Indicator`** 封装的线性进度条。受控 `value/max`，Indicator 宽度由 Tamagui 按 value 自动管理；自带无障碍 progressbar 语义。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number | - | 当前进度（受控，0 到 max），必填 |
| max | number | `100` | 最大值（非正数回退 100） |
| size | `'sm'|'md'` | `'md'` | 轨道高度：sm `$1`(4) / md `$2`(8) |
| tone | `'primary'|'success'|'warning'|'danger'` | `'primary'` | 填充语义色（token） |
| showLabel | boolean | `false` | 末尾显示百分比文本 |
| accessibilityLabel | string | - | 无障碍标签 |

## 行为约定

- 百分比 `clamp(value/max, 0, 100)`，`getValueLabel` 返回整数百分比供无障碍朗读；
- 轨道 `$bgActive`、圆角 999、`overflow:hidden` 裁剪填充；Indicator 只设语义色；
- 宽度动画依赖 Tamagui animation driver（壳工程配置后可在 Indicator 加 `animation`）。

## 视觉与 token

- 高度 sm `$1` / md `$2`；填充 `$primaryDefault/$successDefault/$warningDefault/$dangerDefault`；标签 `$caption + $textSecondary`。

## 示例

`__examples__/States.tsx`：基础、语义色、尺寸、百分比、自定义 max。

## Do / Don't

- Do：只展示确定比例；颜色只用 token 字符串。
- Don't：不硬编码轨道/填充颜色与高度；不确定时长的加载用 Spinner/骨架屏。
