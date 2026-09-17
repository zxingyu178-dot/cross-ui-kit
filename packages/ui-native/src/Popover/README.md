# Popover 弹出层（native）

点击触发切换显示，绝对定位弹出内容。Tamagui XStack+YStack 自建。

## 用法

```tsx
import { Popover } from '@kit/ui-native'

<Popover
  trigger={<Text>点击 ▼</Text>}
  content={<YStack>弹出内容</YStack>}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| trigger | ReactNode | — | 触发元素 |
| content | ReactNode | — | 弹出内容 |
| align | 'start' \| 'center' \| 'end' | 'center' | 对齐方式 |
| side | 'top' \| 'right' \| 'bottom' \| 'left' | 'bottom' | 弹出方向 |
| style | ViewStyle | — | 外层容器样式 |
