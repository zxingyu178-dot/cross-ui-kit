# StatisticCard 统计卡片（web）

卡片 + 统计数字 + 趋势。

## 用法

```tsx
import { StatisticCard } from '@kit/ui-web'
<StatisticCard title="总销售额" value="126,560" prefix="¥" trend="up" trendValue="12.5%" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | string | — | 标题 |
| value | string \| number | — | 数值 |
| prefix | ReactNode | — | 前缀 |
| suffix | ReactNode | — | 后缀 |
| trend | 'up' \| 'down' \| 'none' | — | 趋势方向 |
| trendValue | string | — | 趋势值（百分比） |
| valueColor | string | — | 数值颜色 |
| children | ReactNode | — | 子元素（自定义内容） |
| className | string | — | 外层容器类名 |
