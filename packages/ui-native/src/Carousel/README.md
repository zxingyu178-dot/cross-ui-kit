# Carousel 轮播图（native）

Tamagui XStack+YStack+Text 自建，滑动切换 + 指示器 + 左右箭头，支持自动播放。

## 用法

```tsx
import { Carousel } from '@kit/ui-native'
import type { CarouselItem } from '@kit/ui-native'

const items: CarouselItem[] = [
  { key: '1', content: <YStack backgroundColor="#2563eb" flex={1} /> },
  { key: '2', content: <YStack backgroundColor="#10b981" flex={1} /> },
]
<Carousel items={items} autoplay interval={3000} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | CarouselItem[] | [] | 轮播项 |
| autoplay | boolean | false | 是否自动播放 |
| interval | number | 3000 | 自动播放间隔（ms） |
| dots | boolean | true | 是否显示指示器 |
| arrows | boolean | true | 是否显示左右箭头 |
| onChange | (index: number) => void | — | 当前索引变化回调 |
| height | number | 200 | 高度（px） |
| style | ViewStyle | — | 外层容器样式 |
