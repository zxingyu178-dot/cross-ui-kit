# Progress 进度条（mini：小程序 / 移动 H5）

基于 **NutUI `Progress`** 封装的线性进度条。统一契约用 `value/max`，组件内部换算为 NutUI 的 `percent`；填充色/轨道色通过 CSS 变量传入，其余视觉在 `Progress.scss` 覆盖并全量 token 化。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number | - | 当前进度（受控，0 到 max），必填 |
| max | number | `100` | 最大值（非正数回退 100），内部换算百分比 |
| size | `'sm'|'md'` | `'md'` | 轨道高度：sm 4px / md 8px（spacing 档位） |
| tone | `'primary'|'success'|'warning'|'danger'` | `'primary'` | 填充语义色（CSS 变量） |
| showLabel | boolean | `false` | 是否显示百分比文本（NutUI showText） |
| className | string | - | 透传 |

## 行为约定

- 百分比 `clamp(value/max, 0, 100)`；`animated/active` 开启过渡，`duration=250`（motion-base）；
- `activeColor` 传语义色变量、`backgroundColor` 传 `--kit-color-bg-active`，圆角 999（结构值）；
- 百分比文字颜色/字号在 scss 覆盖为 text-secondary / caption。

## 示例

`__examples__/States.tsx`：基础、语义色、尺寸、百分比、自定义 max。

## Do / Don't

- Do：只展示确定比例；颜色一律走语义色变量。
- Don't：不硬编码填充色/轨道色/文字色；不确定时长的加载用骨架屏而非进度条。
