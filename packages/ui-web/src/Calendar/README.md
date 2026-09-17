# Calendar 日历（web）

div 表格布局自建，支持日期选择、月份切换、受控优先，date 模式。

## 用法

```tsx
import { Calendar } from '@kit/ui-web'

const [date, setDate] = useState(new Date())
<Calendar value={date} onChange={setDate} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | Date | — | 受控选中日期 |
| defaultValue | Date | 今天 | 非受控默认日期 |
| onChange | (date: Date) => void | — | 日期变化回调 |
| mode | 'date' \| 'month' \| 'year' | 'date' | 选择模式 |
| fullscreen | boolean | false | 是否全屏 |
| className | string | — | 外层容器类名 |
