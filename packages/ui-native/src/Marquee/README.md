# Marquee 跑马灯（native）

内容横向滚动（简化实现）。

## 用法

```tsx
import { Marquee } from '@kit/ui-native'
<Marquee>这是一条跑马灯内容</Marquee>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 内容（必填） |
| speed | number | 50 | 滚动速度 px/s |
| reverse | boolean | false | 是否反向 |
| style | ViewStyle | — | 外层容器样式 |
