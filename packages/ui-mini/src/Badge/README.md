# Badge 徽标 / 标签（mini：小程序 / 移动 H5）

View + Text 自建胶囊徽标，不依赖 NutUI，颜色/字号/圆角全走 `--kit-*` token，与 web/native 的 soft/solid/outline 三形态、六语义色对齐。用于状态标记、分类标签、计数等。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | - | 徽标内容（必填） |
| variant | `'primary'|'success'|'warning'|'danger'|'info'|'neutral'` | `'neutral'` | 语义色 |
| tone | `'soft'|'solid'|'outline'` | `'soft'` | 形态：浅底深字 / 深底白字 / 描边 |
| size | `'sm'|'md'` | `'md'` | 尺寸 |
| className | string | - | 容器类名（仅允许 token 化样式） |
| onClick | ()=>void | - | 传入即可点击 |

## 视觉与 token（Badge.scss）

- soft：语义 50 浅底（`--kit-color-*-bg`）+ 600 深字（`--kit-color-*-default`）；
- solid：600 深底 + 控件中性白字（`--kit-color-primary-text`，三栈统一）；
- outline：透明底 + 300 语义描边（`--kit-color-*-border`，primary/neutral 用 default/border-default）+ 600 深字；
- 胶囊圆角 999px（结构值）；字号 md=`body-sm`、sm=`caption`，字重 `medium`。

## 示例

`__examples__/States.tsx`：三形态 × 六语义色矩阵、尺寸、可点击计数。
