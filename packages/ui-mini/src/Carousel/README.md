# Carousel 轮播图（mini）

View+Text 自建，滑动切换 + 指示器 + 左右箭头，支持自动播放。

## 用法

```tsx
import { Carousel } from '@kit/ui-mini'
import type { CarouselItem } from '@kit/ui-mini'

const items: CarouselItem[] = [
  { key: '1', content: <View style={{ background: '#2563eb', height: '100%' }} /> },
  { key: '2', content: <View style={{ background: '#10b981', height: '100%' }} /> },
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
| className | string | — | 外层容器类名 |
