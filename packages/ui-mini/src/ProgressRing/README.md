# ProgressRing 环形进度（mini）

环形进度指示器。

## 用法

```tsx
import { ProgressRing } from '@kit/ui-mini'
<ProgressRing value={65} tone="success">65%</ProgressRing>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number | — | 进度 0-100（必填） |
| size | number | 80 | 直径 px |
| strokeWidth | number | 8 | 线宽 px |
| children | ReactNode | — | 中间内容 |
| tone | 'primary'\\|'success'\\|'warning'\\|'danger' | 'primary' | 语义色 |
| className | string | — | 外层容器类名 |
