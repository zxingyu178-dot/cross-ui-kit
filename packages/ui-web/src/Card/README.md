# Card 卡片（web）

页面骨架最基础的内容容器，**组合式 API**：`Card` 负责容器（圆角/描边/底色/可选投影），`CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter` 自由组合分区。

## 子组件

| 组件 | 说明 | 关键样式（token） |
|---|---|---|
| Card | 容器 | rounded-lg、border-border-default、bg-bg-card；`variant="elevated"` 加 shadow-card |
| CardHeader | 头部（左右布局） | `title` / `description` / `action`（右侧操作区） |
| CardTitle | 标题 | text-title-sm、font-medium、text-primary |
| CardDescription | 次要描述 | text-caption、text-tertiary |
| CardContent | 内容区 | px-6 py-4 |
| CardFooter | 底部操作区 | 顶部分隔线、flex、gap-3、px-6 py-4 |

## Props（Card）

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| variant | `'outlined'|'elevated'` | `'outlined'` | 描边 / 投影 |
| className / id / 原生 div 属性 | - | - | 透传 |

CardHeader：`title?` / `description?` / `action?` / `className?`。需要完全自定义头部时，直接在 Card 内放自定义节点（不必用 CardHeader）。

## 组合约定

- 卡片只做容器与分区，不在内部发请求或写业务；列表/统计/图表作为 children 传入；
- 可点击卡片由业务用按钮/链接样式包裹，Card 本身不绑定点击；
- 视觉值只引用 token，间距用 Header/Content/Footer 的固定分区，不随手写 padding。

## 示例 / 文档

- 示例：`__examples__/States.tsx`（基础、elevated、头部 action、仅内容）
- Storybook：`Card.stories.tsx`

## Do / Don't

- Do：用 Card 承载列表、详情、表单、统计区块；操作放 Header action 或 Footer。
- Don't：不在 Card 内硬编码颜色/圆角/阴影；不把 Card 当一次性 div 重写样式。
