# PasswordStrength 密码强度指示器（native）

进度条 + 强度文字。

## 用法

```tsx
import { useState } from 'react'
import { PasswordStrength } from '@kit/ui-native'
const [password, setPassword] = useState('')
<PasswordStrength value={password} minLength={8} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 密码值 |
| minLength | number | 8 | 最小长度 |
| style | ViewStyle | — | 外层容器样式 |
