# LoadingBar 顶部进度条（web）

页面顶部细进度条，类似 nprogress。

## 用法

```tsx
import { LoadingBar } from '@kit/ui-web'
<LoadingBar progress={60} />
<LoadingBar visible={loading} progress={-1} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| progress | number | -1 | 0-100，-1 为不确定进度 |
| visible | boolean | true | 是否可见 |
| color | string | — | 自定义颜色 |
| className | string | — | 外层容器类名 |
