# Trend 趋势指示器（mini）

涨跌方向 + 数值，带箭头与语义色。

## 用法

```tsx
import { Trend } from '@kit/ui-mini'
<Trend direction="up" value="12.5%" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| direction | 'up' \| 'down' \| 'flat' | — | 趋势方向（必填） |
| value | string | — | 数值文本（必填） |
| inverted | boolean | false | 涨跌颜色反转 |
| showArrow | boolean | true | 是否带箭头 |
| className | string | — | 外层容器类名 |
