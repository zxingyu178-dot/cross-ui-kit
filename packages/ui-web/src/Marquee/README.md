# Marquee 跑马灯（web）

内容无缝横向滚动。

## 用法

```tsx
import { Marquee } from '@kit/ui-web'
<Marquee speed={80}>这是一条跑马灯内容</Marquee>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 内容（必填） |
| speed | number | 50 | 滚动速度 px/s |
| pauseOnHover | boolean | true | hover 暂停 |
| reverse | boolean | false | 是否反向 |
| className | string | — | 外层容器类名 |
