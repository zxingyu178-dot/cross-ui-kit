# Select 选择器（web）

`@radix-ui/react-select` 封装，下拉单选。触发框视觉与 Input 对齐，弹层（Portal + popper）宽度与触发框一致，键盘导航/焦点管理交给 Radix。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| options | `{ label: ReactNode; value: string; disabled? }[]` | - | 选项列表（必填） |
| value | string | - | 受控值 |
| defaultValue | string | - | 非受控初值 |
| placeholder | string | `请选择` | 未选择占位文本（灰色 text-tertiary） |
| size | sm/md/lg | md | 高度取 control-height token |
| disabled | boolean | false | 禁用整个选择器 |
| error | boolean \| string | false | true 红框；字符串同时显示错误文案 |
| onChange | (value: string) => void | - | 值变化（Radix onValueChange 直接透传） |

## 视觉与 token

- 触发框：`bg-bg-card / border-border-default / rounded-md / h-control-*`，错误 `border-border-danger`，焦点 `outline-border-focus`，禁用 `bg-bg-hover + text-text-disabled`；
- 弹层：`bg-bg-card + border-border-default + shadow-popover`，高亮项 `bg-bg-hover`，选中指示 `text-primary-default`；
- 弹层宽度用 Radix 运行时变量 `w-[var(--radix-select-trigger-width)]`（非颜色 token，不受 §5.1 第 3 条限制）。

## 无障碍

Radix 自带 `role=listbox/option`、`aria-expanded/aria-activedescendant`、方向键/Esc/Enter 键盘支持；错误补 `aria-invalid` 并用 `aria-describedby` 关联 `role=alert` 错误文案。

## 示例

`__examples__/States.tsx`：受控/非受控/三种尺寸/禁用项/整体禁用/错误态。
