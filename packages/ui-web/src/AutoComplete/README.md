# AutoComplete 自动完成（web）

输入框 + 下拉候选列表，受控优先，自定义过滤，键盘无障碍（上下键/回车/Esc）。

## 用法

```tsx
import { AutoComplete } from '@kit/ui-web'

const [val, setVal] = useState('')
<AutoComplete
  value={val}
  onChange={setVal}
  options={[
    { value: 'beijing', label: '北京' },
    { value: 'shanghai', label: '上海' },
    { value: 'guangzhou', label: '广州' },
  ]}
  placeholder="输入城市名"
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 受控值 |
| defaultValue | string | '' | 非受控默认值 |
| onChange | (value: string) => void | — | 值变化回调 |
| onSelect | (option: AutoCompleteOption) => void | — | 选中选项回调 |
| options | AutoCompleteOption[] | — | 选项列表（value/label/disabled） |
| placeholder | string | — | 占位文本 |
| disabled | boolean | false | 是否禁用 |
| filterOption | (inputValue, option) => boolean | 模糊匹配 | 自定义过滤函数 |
| className | string | — | 外层容器类名 |
