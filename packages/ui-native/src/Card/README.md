# Card 卡片（native：iOS / Android）

页面骨架最基础的内容容器，组合式 API：`Card` 负责容器（圆角/描边/底色/可选投影），`CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter` 自由组合分区。颜色/间距/圆角只引用 token。

## 子组件

| 组件 | 说明 |
|---|---|
| Card | 容器；`variant="elevated"` 用 `elevation={2}` 投影 |
| CardHeader | 头部左右布局（XStack）：`title` / `description` / `action`（右侧操作区） |
| CardTitle | 标题（`$titleSm`、medium、`$textPrimary`） |
| CardDescription | 次要描述（`$caption`、`$textTertiary`） |
| CardContent | 内容区（YStack，`$4/$6` 内边距） |
| CardFooter | 底部操作区（顶部分隔线、XStack、gap `$3`） |

## Props（Card）

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| variant | `'outlined'|'elevated'` | `'outlined'` | 描边 / 投影 |

CardHeader：`title?` / `description?` / `action?`。

## 组合约定

- 卡片只做容器与分区，不在内部发请求或写业务；列表/统计/图表作为 children 传入；
- 视觉值只用 token 字符串/刻度，间距用分区固定内边距。

## 示例

`__examples__/States.tsx`：基础、elevated、头部 action、仅内容。

## Do / Don't

- Do：用 Card 承载列表、详情、表单、统计区块；操作放 Header action 或 Footer。
- Don't：不硬编码颜色/圆角/阴影；不把 Card 当一次性 View 重写样式。
