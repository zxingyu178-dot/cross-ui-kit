# Tabs 选项卡（web）

基于 **Radix `@radix-ui/react-tabs`** 封装的受控选项卡，line（下划线）形态。用于同层级内容的平级切换。键盘导航、`role=tablist/tab/tabpanel` 与 aria 选中态由 Radix 承担。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | `{ value: string; label: ReactNode; disabled?: boolean; content?: ReactNode }[]` | - | 选项卡列表（必填） |
| value | string | - | 受控激活值 |
| defaultValue | string | - | 非受控初值 |
| onValueChange | (value:string)=>void | - | 激活值变化 |
| size | `'sm'|'md'` | `'md'` | 标签头尺寸 |
| className | string | - | 容器类名（仅允许 token 化样式） |
| id | string | - | 根元素 id |

## 行为约定

- 受控用 `value` + `onValueChange`，非受控用 `defaultValue`。
- `items[i].content` 提供时渲染对应面板（非激活面板 Radix 默认卸载）；缺省时只渲染标签头，内容由外部按激活值渲染（纯导航）。
- 禁用项不可选中（`disabled`），不参与切换。

## 视觉约定（只用 token 语义类）

- 标签头：未选 `text-text-tertiary`，hover `text-text-primary`，激活 `text-primary-default` + 底部 2px 主色下划线（`-mb-px` 与 List 底边框重叠）；
- 禁用 `text-text-disabled`、`cursor-not-allowed`；focus 用 `ring-border-focus`；
- List 底边 `border-border-default`；动效 `duration-fast`；字号 md=`text-body-sm`、sm=`text-caption`。

## 示例 / Story

- `__examples__/States.tsx`：受控带内容、非受控、小号、含禁用项、纯头导航；
- `Tabs.stories.tsx`：Line / Small。
