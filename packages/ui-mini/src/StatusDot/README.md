# StatusDot 状态点（mini）

语义色圆点，可选文字与描边。

## 用法

```tsx
import { StatusDot } from '@kit/ui-mini'
<StatusDot tone="success" text="运行中" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| tone | 'success'\|'warning'\|'danger'\|'info'\|'neutral'\|'primary' | 'neutral' | 状态语义色 |
| size | number | 16 | 圆点大小（rpx） |
| outlined | boolean | false | 是否带描边 |
| text | string | — | 状态文字 |
| className | string | — | 外层容器类名 |
