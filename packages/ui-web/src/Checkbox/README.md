# Checkbox 复选框（web）

`@radix-ui/react-checkbox` 封装，视觉值全部走 Tailwind 主题 token（映射自 `@kit/tokens`）。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| checked | boolean | - | 受控选中态 |
| defaultChecked | boolean | - | 非受控初值 |
| disabled | boolean | false | 禁用 |
| indeterminate | boolean | false | 半选（父级全选场景，受控展示态） |
| label | ReactNode | - | 文本，传入后渲染为 label，点文本即切换 |
| error | boolean | false | 错误态（红色边框 + aria-invalid） |
| id | string | useId | 原生 id，用于 label 关联 |
| onChange | (checked: boolean) => void | - | 选中态变化（值回调） |

## 行为约定

- Radix `onCheckedChange` 的 `'indeterminate'` 不外泄，统一归一为 boolean；
- 半选由 `indeterminate` 控制，点击后通常由业务置为全选/全不选（见示例父子联动）；
- 选中态底色 `primary-default`、文字 `primary-text`；禁用选中用 `primary-disabled` + `text-disabled`；
- 焦点环 `border-focus`，错误边框 `border-danger`，均来自 token。

## 无障碍

- 基于 Radix，自带 `role=checkbox` 与 `aria-checked`（含半选 mixed）；
- 错误态补 `aria-invalid`；label 与控件用 id 关联。

## 示例

`__examples__/States.tsx`：未选/受控/非受控/半选父子联动/禁用/错误。
