# Tabs 选项卡（native：iOS / Android）

基于 **Tamagui `Tabs`（List / Tab / Content）** 封装，line（下划线）形态，用于同层级内容平级切换。内部统一受控（`active = 外部 value ?? 内部 state`），用激活值驱动下划线与文字色；`role=tablist/tab/tabpanel` 与无障碍由 Tamagui 承担。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | `{ value: string; label: ReactNode; disabled?: boolean; content?: ReactNode }[]` | - | 选项卡列表（必填） |
| value | string | - | 受控激活值 |
| defaultValue | string | - | 非受控初值 |
| onValueChange | (value:string)=>void | - | 激活值变化 |
| size | `'sm'|'md'` | `'md'` | 标签头尺寸 |
| accessibilityLabel | string | - | 无障碍标签 |

## 行为约定

- 受控 `value`+`onValueChange`，非受控 `defaultValue`（内部 state 接管）。
- `items[i].content` 提供时渲染面板（非激活面板 Tamagui 默认卸载）；缺省只渲染标签头。
- 激活：下划线 `$primaryDefault` + 主色文字；未选 `$textTertiary`；禁用半透明 + `$textDisabled`。

## 视觉与 token

- List 底边 `$borderDefault`；标签头 padding md=`$4/$2`、sm=`$3/$1`；字号 md=`$bodySm`、sm=`$caption`，字重 `$medium`；
- 面板 `paddingTop $4`；颜色全部 Tamagui token，无硬编码。

## 示例

`__examples__/States.tsx`：受控带内容、非受控、小号、含禁用项、纯头导航。
