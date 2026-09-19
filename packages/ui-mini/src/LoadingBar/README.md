# LoadingBar 顶部进度条（mini）

页面顶部细进度条。

## 用法

```tsx
import { LoadingBar } from '@kit/ui-mini'
<LoadingBar progress={60} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| progress | number | -1 | 0-100，-1 为不确定进度 |
| visible | boolean | true | 是否可见 |
| color | string | — | 自定义颜色 |
| className | string | — | 外层容器类名 |
