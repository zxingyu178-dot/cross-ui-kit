# DatePicker 日期选择器（native）

Tamagui XStack+YStack+Text 自建，输入框 + Calendar 弹出面板，受控优先，支持多种显示格式。

## 用法

```tsx
import { DatePicker } from '@kit/ui-native'

const [date, setDate] = useState<Date>()
<DatePicker value={date} onChange={setDate} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | Date | — | 受控值 |
| defaultValue | Date | — | 非受控默认值 |
| onChange | (date: Date) => void | — | 值变化回调 |
| format | 'YYYY-MM-DD' \| 'YYYY/MM/DD' \| 'YYYY年MM月DD日' | 'YYYY-MM-DD' | 显示格式 |
| placeholder | string | '请选择日期' | 占位文本 |
| disabled | boolean | false | 是否禁用 |
| style | ViewStyle | — | 外层容器样式 |
