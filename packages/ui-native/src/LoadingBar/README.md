# LoadingBar 顶部进度条（native）

页面顶部细进度条。

## 用法

```tsx
import { LoadingBar } from '@kit/ui-native'
<LoadingBar progress={60} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| progress | number | -1 | 0-100，-1 为不确定进度 |
| visible | boolean | true | 是否可见 |
| color | string | — | 自定义颜色 |
| style | ViewStyle | — | 外层容器样式 |
