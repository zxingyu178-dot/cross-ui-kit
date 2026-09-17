# InputPassword 密码输入框（web）

input type="password" + 显示/隐藏切换按钮。

## 用法

```tsx
import { InputPassword } from '@kit/ui-web'
const [value, setValue] = useState('')
<InputPassword value={value} onChange={setValue} placeholder="请输入密码" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 输入值 |
| onChange | (value: string) => void | — | 值变化回调 |
| placeholder | string | '请输入密码' | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| visibilityToggle | boolean | true | 是否显示切换按钮 |
| className | string | — | 外层容器类名 |
