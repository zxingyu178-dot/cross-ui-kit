# BackTop 回到顶部（mini）

View 固定定位按钮，超过 visibilityHeight 显示，点击触发回调。

## 用法

```tsx
import { BackTop } from '@kit/ui-mini'

<BackTop onClick={() => Taro.pageScrollTo({ scrollTop: 0 })} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| visibilityHeight | number | 400 | 滚动超过多少像素显示 |
| onClick | () => void | — | 点击回调 |
| duration | number | 300 | 滚动动画时长（ms） |
| className | string | — | 外层容器类名 |
