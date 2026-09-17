# BackTop 回到顶部（native）

Tamagui XStack 固定定位按钮，点击触发回调。

## 用法

```tsx
import { BackTop } from '@kit/ui-native'

<BackTop onClick={() => scrollRef.current?.scrollTo({ y: 0 })} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| visibilityHeight | number | 400 | 滚动超过多少像素显示 |
| onClick | () => void | — | 点击回调 |
| duration | number | 300 | 滚动动画时长（ms） |
| style | ViewStyle | — | 外层容器样式 |
