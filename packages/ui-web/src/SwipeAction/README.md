# SwipeAction 滑动操作（web）

列表项左滑露出右侧操作按钮。

## 用法

```tsx
import { SwipeAction } from '@kit/ui-web'
<SwipeAction
  actions={[{ key: 'edit', label: '编辑' }, { key: 'del', label: '删除', danger: true }]}
  onAction={(k) => console.log(k)}
>
  <Cell title="订单 #123" />
</SwipeAction>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 列表项内容（必填） |
| actions | SwipeActionAction[] | [] | 右侧操作 |
| onAction | (key: string) => void | — | 点击操作 |
| className | string | — | 外层容器类名 |

### SwipeActionAction

| 属性 | 类型 | 说明 |
|---|---|---|
| key | string | 唯一键（必填） |
| label | ReactNode | 文字（必填） |
| closeOnPress | boolean | 点击后是否自动收起（默认 true） |
| danger | boolean | 危险操作（红色） |
