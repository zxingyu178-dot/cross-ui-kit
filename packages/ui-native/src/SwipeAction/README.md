# SwipeAction 滑动操作（native）

列表项左滑露出右侧操作按钮（PanResponder 实现）。

## 用法

```tsx
import { SwipeAction } from '@kit/ui-native'
<SwipeAction actions={[{ key: 'del', label: '删除', danger: true }]}>
  <Cell title="订单 #123" />
</SwipeAction>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 列表项内容（必填） |
| actions | SwipeActionAction[] | [] | 右侧操作 |
| onAction | (key: string) => void | — | 点击操作 |
| style | ViewStyle | — | 外层容器样式 |
