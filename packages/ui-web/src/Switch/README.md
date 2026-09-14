# Switch 开关（web：网页 / PC）

基于 **Radix `@radix-ui/react-switch`** 封装的受控开关，用于二元状态的即时切换（区别于需提交的 Checkbox）。视觉值只引用 Tailwind 主题 token（映射自 `@kit/tokens`）。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| checked | boolean | - | 受控开关态 |
| defaultChecked | boolean | - | 非受控初值 |
| onCheckedChange | (checked:boolean)=>void | - | 开关态变化（boolean 值回调） |
| disabled | boolean | false | 禁用 |
| loading | boolean | false | 异步切换中：禁用交互，滑块内显示 spinner，状态待外部确认后再变 |
| size | `'sm'|'md'` | `'md'` | 尺寸 |
| label | ReactNode | - | 右侧文本，传入后可点文字切换 |
| id / name / value | string | - | 原生表单属性 |
| className | string | - | 外层类名（仅允许 token 化样式） |

## 行为约定

- **受控优先**：异步场景用 `checked` + `loading`，请求成功后再更新 `checked`（loading 期间组件不自行改态，只回调 `onCheckedChange`）。
- 开关是"即时生效"的设置项；需要明确提交/确认的多选场景用 `Checkbox`。
- 滑块为控件中性白色（三栈统一，不随主题换色）；轨道开态 `bg-primary-default`、关态 `bg-bg-hover`。

## 视觉与 token

- 轨道：开 `--kit-color-primary-default`，关 `--kit-color-bg-hover`；圆角胶囊；
- 滑块：中性白底 + 阴影，位移随尺寸（md `translate-x-5`、sm `translate-x-4`）；
- focus 环 `--kit-color-border-focus`；禁用透明度；spinner 用主色。

## 无障碍

Radix 自带 `role="switch"`、`aria-checked`、键盘空格切换与 focus 可见环；`label` 传入时用原生 `<label htmlFor>` 关联。

## 示例

`__examples__/States.tsx`：受控/非受控、两种尺寸、禁用、异步 loading、带标签；`Switch.stories.tsx` 提供 Storybook。
