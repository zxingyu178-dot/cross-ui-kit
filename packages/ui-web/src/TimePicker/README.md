# TimePicker 时间选择器（web）

div 容器 + 输入框 + 时间选择面板（时/分/秒三列），受控优先，支持 HH:mm:ss / HH:mm 格式。

## 用法

```tsx
import { TimePicker } from '@kit/ui-web'

const [time, setTime] = useState('')
<TimePicker value={time} onChange={setTime} format="HH:mm:ss" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 受控值（HH:mm:ss 或 HH:mm） |
| defaultValue | string | '' | 非受控默认值 |
| onChange | (value: string) => void | — | 值变化回调 |
| format | 'HH:mm:ss' \| 'HH:mm' | 'HH:mm:ss' | 时间格式 |
| placeholder | string | '请选择时间' | 占位文本 |
| className | string | — | 外层容器类名 |
