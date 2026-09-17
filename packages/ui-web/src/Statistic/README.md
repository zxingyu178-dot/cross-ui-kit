# Statistic 统计数值（web）

标题 + 数值（前缀/后缀），number 自动千分位+precision，loading 骨架。

## 用法

```tsx
import { Statistic } from '@kit/ui-web'

<Statistic title="活跃用户" value={12345} suffix="人" />
<Statistic title="转化率" value={3.14159} precision={2} suffix="%" />
<Statistic title="营收" value={9876543.21} prefix="¥" precision={2} />
<Statistic title="加载中" value={0} loading />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | — | 标题 |
| value | number \| string | — | 数值（number 自动千分位） |
| prefix | ReactNode | — | 前缀 |
| suffix | ReactNode | — | 后缀 |
| precision | number | — | 小数精度 |
| loading | boolean | false | 加载中骨架 |
| valueStyle | CSSProperties | — | 数值自定义样式 |
| className | string | — | 外层容器类名 |
