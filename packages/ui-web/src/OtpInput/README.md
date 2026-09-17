# OtpInput 验证码输入框（web）

多个 input 框，自动聚焦下一个，支持粘贴。

## 用法

```tsx
import { OtpInput } from '@kit/ui-web'
const [value, setValue] = useState('')
<OtpInput value={value} onChange={setValue} length={6} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 输入值（字符串，长度 = length） |
| onChange | (value: string) => void | — | 值变化回调 |
| length | number | 6 | 验证码长度 |
| disabled | boolean | false | 是否禁用 |
| password | boolean | false | 是否密码模式 |
| className | string | — | 外层容器类名 |
