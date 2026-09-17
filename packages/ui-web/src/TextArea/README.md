# TextArea 多行文本框（web）

textarea 元素，支持字数统计、自适应高度。

## 用法

```tsx
import { TextArea } from '@kit/ui-web'
const [value, setValue] = useState('')
<TextArea value={value} onChange={setValue} rows={4} maxLength={200} showCount />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 输入值 |
| onChange | (value: string) => void | — | 值变化回调 |
| placeholder | string | '请输入' | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| rows | number | 3 | 行数 |
| maxLength | number | — | 最大长度 |
| showCount | boolean | false | 是否显示字数统计 |
| autoSize | boolean | false | 是否自适应高度 |
| className | string | — | 外层容器类名 |
