# Popconfirm 气泡确认（web）

基于 @radix-ui/react-popover 封装，点击触发弹出确认气泡，包含确认/取消按钮。

## 用法

```tsx
import { Popconfirm, Button } from '@kit/ui-web'

<Popconfirm
  title="确认删除？"
  description="删除后不可恢复，请谨慎操作。"
  onConfirm={() => console.log('confirmed')}
  trigger={<Button variant="danger">删除</Button>}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | — | 确认标题 |
| description | ReactNode | — | 确认描述 |
| onConfirm | () => void | — | 确认回调 |
| onCancel | () => void | — | 取消回调 |
| okText | string | '确定' | 确认按钮文本 |
| cancelText | string | '取消' | 取消按钮文本 |
| trigger | ReactNode | — | 触发元素 |
| placement | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | 弹出方向 |
| className | string | — | 外层容器类名 |
