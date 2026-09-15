# Badge 徽标 / 标签（native：iOS / Android）

单个 Tamagui `Text` 胶囊徽标，颜色只引用 Tamagui token，与 web/mini 的 soft/solid/outline 三形态、六语义色对齐。用于状态标记、分类标签、计数等。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | - | 徽标内容（必填） |
| variant | `'primary'|'success'|'warning'|'danger'|'info'|'neutral'` | `'neutral'` | 语义色 |
| tone | `'soft'|'solid'|'outline'` | `'soft'` | 形态：浅底深字 / 深底白字 / 描边 |
| size | `'sm'|'md'` | `'md'` | 尺寸 |
| onPress | ()=>void | - | 传入即可点击 |
| accessibilityLabel | string | - | 无障碍标签 |

## 视觉与 token

- soft：`$*Bg`（50 浅底）+ `$*Default`（600 深字）；neutral 用 `$bgHover/$textSecondary`；
- solid：`$*Default` 深底 + `$primaryText`（控件中性白，三栈统一）；neutral solid 用 `$bgInverse/$textInverse`；
- outline：透明底 + `$*Border`（300 描边，primary/neutral 用 default/borderDefault）+ 600 深字；
- 圆角 `borderRadius=999`（结构值）；字号 md=`$bodySm`、sm=`$caption`，字重 `$medium`。
- 调色板 `PALETTE` 以 `Record<tone, Record<variant, …>>` 强制全覆盖，新增语义色时 TS 会逼你补齐。

## 示例

`__examples__/States.tsx`：三形态 × 六语义色矩阵、尺寸、可点击计数。
