# Switch 开关（native：iOS / Android）

基于 **Tamagui `Switch` + `SwitchThumb`** 封装的受控开关（不使用 RN 原生 Switch，以保证 token 化视觉与三栈一致）。轨道色随开关态切换，滑块中性白。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| checked | boolean | - | 受控开关态 |
| defaultChecked | boolean | false | 非受控初值 |
| onCheckedChange | (checked:boolean)=>void | - | 开关态变化（boolean 值回调） |
| disabled | boolean | false | 禁用（轨道半透明） |
| loading | boolean | false | 异步切换中：拦截操作、滑块内显示 Spinner，不置灰 |
| size | `'sm'|'md'` | `'md'` | 尺寸（映射 Tamagui size token `$3`/`$4`） |
| label | ReactNode | - | 右侧文本（受控时可点文字切换） |
| accessibilityLabel | string | - | 无障碍标签（默认取字符串 label） |

## 行为约定

- 轨道色由内部 `isOn` 驱动：受控跟随 `checked`，非受控用内部 state（初值 `defaultChecked`），两种用法轨道色都正确随动。
- **受控优先**：异步场景用 `checked` + `loading`，请求成功后再更新；loading 期间拦截 `onCheckedChange`、不置灰。
- 开关用于即时生效设置项；需明确提交的多选场景用 `Checkbox`。

## 视觉与 token

- 轨道：开 `$primaryDefault`、关 `$bgHover`；滑块 `$primaryText`（中性白）；
- 尺寸走 Tamagui size token；文本 `fontSize.$bodyMd / $textPrimary`，禁用 `$textDisabled`。

## 无障碍

`accessibilityRole="switch"`，`accessibilityState` 暴露 `checked/disabled/busy`；字符串 label 自动作为无障碍标签。

## 示例

`__examples__/States.tsx`：受控/非受控、两种尺寸、禁用、异步 loading、带标签。
