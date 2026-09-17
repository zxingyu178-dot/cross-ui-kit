# Captcha 验证码输入框（mini）

输入框 + 发送按钮（倒计时）。

## 用法

```tsx
import { useState } from 'react'
import { Captcha } from '@kit/ui-mini'
const [code, setCode] = useState('')
<Captcha value={code} onChange={setCode} onSend={() => console.log('发送验证码')} countdown={60} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 验证码值 |
| onChange | (value: string) => void | — | 值变化回调 |
| onSend | () => void \| Promise<void> | — | 发送验证码回调 |
| countdown | number | 60 | 倒计时秒数 |
| disabled | boolean | false | 是否禁用 |
| placeholder | string | '请输入验证码' | 占位文字 |
| maxLength | number | 6 | 最大长度 |
| className | string | — | 外层容器类名 |
