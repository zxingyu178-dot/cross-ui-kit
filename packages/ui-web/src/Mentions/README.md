# Mentions 提及输入（web）

输入框 + 弹出选项列表，输入 prefix 时触发。

## 用法

```tsx
import { Mentions } from '@kit/ui-web'
import type { MentionOption } from '@kit/ui-web'

const options: MentionOption[] = [
  { key: '1', label: '张三', description: '前端工程师' },
  { key: '2', label: '李四', description: '后端工程师' },
]
const [value, setValue] = useState('')
<Mentions value={value} onChange={setValue} options={options} placeholder="输入 @ 提及用户" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 输入值 |
| onChange | (value: string) => void | — | 值变化回调 |
| options | MentionOption[] | [] | 提及选项列表 |
| prefix | string | '@' | 触发前缀 |
| placeholder | string | '请输入' | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| allowClear | boolean | true | 是否可清空 |
| onSelect | (option: MentionOption) => void | — | 选中提及回调 |
| className | string | — | 外层容器类名 |
