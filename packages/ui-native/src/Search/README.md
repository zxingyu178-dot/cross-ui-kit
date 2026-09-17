# Search 搜索框（native）

Tamagui Input + 搜索按钮，支持回车搜索。

## 用法

```tsx
import { Search } from '@kit/ui-native'
const [value, setValue] = useState('')
<Search value={value} onChange={setValue} onSearch={(v) => console.log(v)} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 输入值 |
| onChange | (value: string) => void | — | 值变化回调 |
| placeholder | string | '请输入搜索关键词' | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| onSearch | (value: string) => void | — | 搜索回调 |
| enterButton | boolean | true | 是否显示搜索按钮 |
| enterButtonText | string | '搜索' | 搜索按钮文字 |
| style | ViewStyle | — | 外层容器样式 |
