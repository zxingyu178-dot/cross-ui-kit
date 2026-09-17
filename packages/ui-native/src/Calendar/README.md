# Calendar 日历（native）

Tamagui XStack+YStack+Text 自建，flex 布局模拟日历表格，支持日期选择、月份切换、受控优先。

## 用法

```tsx
import { Calendar } from '@kit/ui-native'

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
| style | ViewStyle | — | 外层容器样式 |
