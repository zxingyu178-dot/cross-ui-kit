# Spinner 加载指示器（mini：小程序 / 移动 H5）

用于**不确定时长**的加载。Taro `View` 自建标准 border 旋转圈，旋转动画/尺寸/颜色在 `Spinner.scss` 全量 token 化。确定比例用 `Progress`，内容占位用 `Skeleton`。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| size | `'sm'|'md'|'lg'` | `'md'` | 直径 16 / 24 / 32（icon/control 刻度） |
| tone | `'primary'|'muted'|'inverse'` | `'primary'` | 主色 / 中性灰 / 反白 |
| accessibilityLabel | string | - | H5 映射 aria-label |
| className | string | - | 透传 |

## 视觉与 token

- 统一 `border-width:2px` 全圆；primary 轨道 `--kit-color-border-default` + 旋转头 `--kit-color-primary-default`；muted 头 `--kit-color-text-tertiary`；inverse 白圈（白色为三栈统一结构色）；
- 直径 sm 16（icon-sm）、md 24（icon-lg）、lg 32（control-height-sm）；旋转周期 1s linear infinite（组件内置动画常量）。

## 示例

`__examples__/States.tsx`：尺寸、色调、反白（主色底）、带文字。

## Do / Don't

- Do：按钮提交中、局部刷新等不可预期等待用 Spinner；主色按钮内用 `tone="inverse"`。
- Don't：不硬编码颜色/尺寸；能给出比例用 Progress；整块内容首次加载用 Skeleton。
