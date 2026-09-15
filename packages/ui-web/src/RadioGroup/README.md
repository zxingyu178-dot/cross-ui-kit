# RadioGroup 单选组（web：网页 / PC）

基于 **Radix `@radix-ui/react-radio-group`** 封装的受控单选组，用于在一组互斥选项中选择一个。视觉值只引用 Tailwind 主题 token（映射自 `@kit/tokens`）。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| options | `{ value: string; label: ReactNode; disabled?: boolean }[]` | - | 选项列表（必填） |
| value | string | - | 受控选中值 |
| defaultValue | string | - | 非受控初值 |
| onValueChange | (value:string)=>void | - | 选中值变化（string 值回调） |
| disabled | boolean | false | 整组禁用 |
| direction | `'vertical'|'horizontal'` | `'vertical'` | 排列方向（横向自动换行） |
| size | `'sm'|'md'` | `'md'` | 圆圈/内点尺寸 |
| name | string | - | 原生表单 name（同组共用） |
| id / className | string | - | 组容器 id、外层类名 |

## 行为约定

- **单选互斥**：同组只能选一个；`onValueChange` 只在选中新值时触发（再次点击已选项不会取消，符合单选语义）。
- **受控优先**：受控用 `value` + `onValueChange`；非受控用 `defaultValue`。
- 单项禁用通过 `options[i].disabled`，整组禁用用 `disabled`。
- 圆圈选中态只改描边为主色、内点为主色实心圆点。

## 视觉与 token

- 圆圈：未选 `--kit-color-bg-card` + `--kit-color-border-default`；选中描边 `--kit-color-primary-default`，内点主色实心；
- focus 环 `--kit-color-border-focus`；禁用底 `--kit-color-bg-hover`、文字 `--kit-color-text-disabled`；
- md 圆圈 20/内点 10，sm 圆圈 16/内点 8；文本 `--kit-font-size-body-md`。

## 无障碍

Radix 自带 `role="radiogroup"`/`role="radio"`、`aria-checked`、方向键在组内移动焦点与选中；选项用原生 `<label htmlFor>` 关联，可点文字选中。

## 示例

`__examples__/States.tsx`：受控/非受控、横向、小号、单项与整组禁用；`RadioGroup.stories.tsx` 提供 Storybook。
