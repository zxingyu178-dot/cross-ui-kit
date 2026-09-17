# CountUp 数字滚动（native）

数字从 0 滚动到目标值的动画组件。

## 用法

```tsx
import { CountUp } from '@kit/ui-native'
<CountUp value={12345} duration={1500} prefix="¥" suffix="元" decimals={2} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number | — | 目标数值（必填） |
| duration | number | 1500 | 动画时长（ms） |
| prefix | string | '' | 前缀 |
| suffix | string | '' | 后缀 |
| decimals | number | 0 | 小数位数 |
| separator | boolean | true | 是否千分位分隔 |
| style | TextStyle | — | 文本样式 |
