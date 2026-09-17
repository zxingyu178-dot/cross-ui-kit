# TimeRangePicker 时间范围选择器（mini）

两个 Taro Input 框 + 连接符。

## 用法

```tsx
import { TimeRangePicker } from '@kit/ui-mini'
const [value, setValue] = useState<[string, string]>(['', ''])
<TimeRangePicker value={value} onChange={setValue} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | [string, string] | — | 选中值 [start, end]（HH:mm:ss） |
| onChange | (value: [string, string]) => void | — | 值变化回调 |
| placeholder | [string, string] | ['开始时间', '结束时间'] | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| separator | string | '至' | 连接符 |
| className | string | — | 外层容器类名 |
