# PasswordStrength 密码强度指示器（web）

进度条 + 强度文字。

## 用法

```tsx
import { useState } from 'react'
import { PasswordStrength } from '@kit/ui-web'
const [password, setPassword] = useState('')
<PasswordStrength value={password} minLength={8} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 密码值 |
| minLength | number | 8 | 最小长度 |
| className | string | — | 外层容器类名 |

## 强度规则

- 弱：长度不足或只有 1 种字符类型
- 中：2-3 种字符类型（大小写、数字、特殊字符）
- 强：4 种字符类型全部包含
