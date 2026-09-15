# RadioGroup 单选组（native：iOS / Android）

基于 **Tamagui `RadioGroup` + `RadioGroup.Item` + `RadioGroup.Indicator`** 封装的受控单选组，互斥选中与无障碍由 Tamagui RadioGroup context 承担，视觉值只引用 Tamagui token。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| options | `{ value: string; label: ReactNode; disabled?: boolean }[]` | - | 选项列表（必填） |
| value | string | - | 受控选中值 |
| defaultValue | string | - | 非受控初值 |
| onValueChange | (value:string)=>void | - | 选中值变化（string 值回调） |
| disabled | boolean | false | 整组禁用（单项禁用走 options） |
| direction | `'vertical'|'horizontal'` | `'vertical'` | 排列方向（横向换行） |
| size | `'sm'|'md'` | `'md'` | 圆圈 20/内点 10；sm 圆圈 16/内点 8 |
| accessibilityLabel | string | - | 无障碍组标签 |

## 行为约定

- 单选互斥，再次点击已选项不取消；受控用 `value` + `onValueChange`，非受控用 `defaultValue`。
- 圆圈 `$bgCard` + `$borderDefault`，选中显示主色实心内点；禁用项半透明、文字 `$textDisabled`。
- 选项文本用 Tamagui `Label htmlFor` 关联圆圈，点文字也可选中。

## 视觉与 token

- 圆圈边框 `$borderDefault`、底 `$bgCard`；内点 `$primaryDefault`；
- 文本 `fontSize.$bodyMd / $textPrimary`；组间距 `$3`（竖）/`$4`（横）。

## 无障碍

Tamagui RadioGroup 自带 `role=radiogroup/radio`、`aria-checked` 与方向键/焦点管理；`accessibilityLabel` 作为组标签。

## 示例

`__examples__/States.tsx`：受控/非受控、横向、小号、单项与整组禁用。
