# Badge 徽标 / 标签（web）

纯展示胶囊徽标，无第三方底座依赖（同 shadcn Badge 思路）。用于状态标记、分类标签、计数等。颜色全部走 token 语义类，亮暗自动适配。

## Props（继承 `HTMLAttributes<HTMLSpanElement>`）

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | - | 徽标内容（必填） |
| variant | `'primary'|'success'|'warning'|'danger'|'info'|'neutral'` | `'neutral'` | 语义色 |
| tone | `'soft'|'solid'|'outline'` | `'soft'` | 形态：浅底深字 / 深底白字 / 描边 |
| size | `'sm'|'md'` | `'md'` | 尺寸 |
| onClick | `() => void` | - | 传入即可点击（自动加 role=button、cursor-pointer） |
| className | string | - | 追加类名（仅允许 token 化样式） |

## 视觉约定

- **soft（默认）**：语义 50 浅底 + 600 深字（`bg-*-bg` + `text-*-default`）；
- **solid**：语义 600 深底 + 白字（白为控件中性常量，三栈统一）；
- **outline**：透明底 + 语义 300 描边 + 600 深字；
- 胶囊圆角用 `rounded-full`（radius token 无 pill，结构值）；字号 md=`text-body-sm`、sm=`text-caption`。

## 用法

```tsx
<Badge variant="success" tone="soft">已上线</Badge>
<Badge variant="danger" tone="solid">高危</Badge>
<Badge variant="info" tone="outline">草稿</Badge>
```

## 示例 / Story

- `__examples__/States.tsx`：三形态 × 六语义色矩阵、尺寸、可点击计数；
- `Badge.stories.tsx`：Soft / Solid / Outline / Small。
