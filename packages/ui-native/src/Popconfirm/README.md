# Popconfirm 气泡确认（native）

Tamagui XStack+YStack+Text 自建，点击触发切换显示，确认/取消按钮，绝对定位气泡。

## 用法

```tsx
import { Popconfirm } from '@kit/ui-native'

<Popconfirm
  title="确认删除？"
  onConfirm={() => {}}
  trigger={<Text>删除</Text>}
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
| style | ViewStyle | — | 外层容器样式 |
