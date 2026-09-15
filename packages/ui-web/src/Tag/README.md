# Tag 标签（web）

可**选中（筛选）**、可**关闭（删除）**的内容标签，用于搜索筛选、标签管理、分类选择。与纯展示的 [Badge](../Badge) 区别：Tag 承担交互（选中/关闭），Badge 只做状态标记。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | 必填 | 标签内容 |
| variant | `'neutral'|'primary'|'success'|'warning'|'danger'|'info'` | `'neutral'` | 语义色（同 Badge 调色板） |
| tone | `'soft'|'solid'|'outline'` | `'soft'` | 形态；**selected 时强制 solid** |
| size | `'sm'|'md'` | `'md'` | 20 / 24 高 |
| selected | boolean | false | 选中态（实心高亮），配 onClick 切换，带 `aria-pressed` |
| closable | boolean | false | 显示关闭 × |
| disabled | boolean | false | 禁点/禁关，opacity-50 |
| onClose | `() => void` | - | 点 × 触发，**stopPropagation**（不触发标签 onClick） |
| onClick | 鼠标事件 | - | 点标签（筛选切换）；传入后获得 role=button、tabIndex |
| className / 原生 span 属性 | - | - | 透传 |

## 两种典型用法

- **筛选**：`selected` + `onClick`，点击在 soft/solid 间切换（推荐 `variant="primary"`）。
- **可删除**：`closable` + `onClose`，父级从数组移除该标签（推荐 `tone="outline"`）。

## 视觉 / 无障碍

- 颜色全 token（与 Badge 同一套 tone×variant）；胶囊 rounded-full 为结构值；
- 关闭按钮为真实 `<button aria-label="移除标签">`，hover 透明反馈时长 150ms（motion-fast）；
- 可选中标签带 `role="button"` + `aria-pressed`；禁用带 `aria-disabled`。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（语义色、形态、尺寸、可选中、可关闭、禁用）
- Storybook：`Tag.stories.tsx`

## Do / Don't

- Do：筛选/分类/标签管理用 Tag；状态计数用 Badge。
- Don't：不硬编码颜色；不在 Tag 内维护选中/删除的数据（受控，状态在父级）。
