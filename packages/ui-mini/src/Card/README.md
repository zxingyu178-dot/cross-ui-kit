# Card 卡片（mini：小程序 / 移动 H5）

页面骨架最基础的内容容器，组合式 API：`Card` 负责容器（圆角/描边/底色/可选投影），`CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter` 自由组合分区。视觉值在 `Card.scss` 全量 token 化。

## 子组件

| 组件 | 说明 |
|---|---|
| Card | 容器；`variant="elevated"` 叠加阴影（小程序不支持 box-shadow 时降级为描边） |
| CardHeader | 头部左右布局：`title` / `description` / `action`（右侧操作区） |
| CardTitle | 标题（title-sm、medium、text-primary） |
| CardDescription | 次要描述（caption、text-tertiary） |
| CardContent | 内容区（16/24 内边距） |
| CardFooter | 底部操作区（顶部分隔线、flex、gap） |

## Props（Card）

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| variant | `'outlined'|'elevated'` | `'outlined'` | 描边 / 投影 |
| className | string | - | 透传 |

CardHeader：`title?` / `description?` / `action?` / `className?`。

## 组合约定

- 卡片只做容器与分区，不在内部发请求或写业务；列表/统计/图表作为 children 传入；
- 视觉值只引用 token，间距用分区固定内边距，不随手写 padding。

## 示例

`__examples__/States.tsx`：基础、elevated、头部 action、仅内容。

## Do / Don't

- Do：用 Card 承载列表、详情、表单、统计区块；操作放 Header action 或 Footer。
- Don't：不硬编码颜色/圆角/阴影；不把 Card 当一次性 View 重写样式。
