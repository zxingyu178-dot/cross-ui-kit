# Countdown 倒计时（web）

useEffect + setInterval 倒计时，支持格式化。

## 用法

```tsx
import { Countdown } from '@kit/ui-web'

<Countdown value={Date.now() + 60000} format="mm:ss" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | number | 0 | 目标时间戳（ms）或剩余毫秒数 |
| format | string | 'HH:mm:ss' | 格式化字符串：DD/HH/mm/ss/SSS |
| onFinish | () => void | — | 倒计时结束回调 |
| className | string | — | 外层容器类名 |
