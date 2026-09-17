# Divider 分割线（native）

水平/垂直分割，solid/dashed/dotted 三线型，支持分割线文字。Tamagui XStack/YStack 自建，颜色只引用 `$borderDefault`。

## 用法

```tsx
import { Divider } from '@kit/ui-native'

<Divider />
<Divider type="dashed" />
<Divider text="或者" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| orientation | 'horizontal' \| 'vertical' | 'horizontal' | 方向 |
| type | 'solid' \| 'dashed' \| 'dotted' | 'solid' | 线条类型 |
| text | string | — | 分割线文字（仅 horizontal） |
| textPosition | 'left' \| 'center' \| 'right' | 'center' | 文字位置 |
| style | ViewStyle | — | 外层容器样式 |
