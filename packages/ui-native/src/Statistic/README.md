# Statistic 统计数值（native）

标题 + 数值（前缀/后缀），number 自动千分位+precision，loading 骨架。Tamagui YStack+XStack+Text 自建。

## 用法

```tsx
import { Statistic } from '@kit/ui-native'

<Statistic title="活跃用户" value={12345} suffix="人" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | — | 标题 |
| value | number \| string | — | 数值 |
| prefix | ReactNode | — | 前缀 |
| suffix | ReactNode | — | 后缀 |
| precision | number | — | 小数精度 |
| loading | boolean | false | 加载中骨架 |
| style | ViewStyle | — | 外层容器样式 |
