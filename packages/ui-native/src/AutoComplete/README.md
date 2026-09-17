# AutoComplete 自动完成（native）

Tamagui XStack+YStack+Input 自建，受控优先，自定义过滤，点击选项关闭。

## 用法

```tsx
import { AutoComplete } from '@kit/ui-native'

<AutoComplete
  value={val}
  onChange={setVal}
  options={[{ value: 'beijing', label: '北京' }]}
  placeholder="输入城市名"
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | string | — | 受控值 |
| defaultValue | string | '' | 非受控默认值 |
| onChange | (value: string) => void | — | 值变化回调 |
| onSelect | (option) => void | — | 选中选项回调 |
| options | AutoCompleteOption[] | — | 选项列表 |
| placeholder | string | — | 占位文本 |
| disabled | boolean | false | 是否禁用 |
| filterOption | (inputValue, option) => boolean | 模糊匹配 | 自定义过滤函数 |
| style | ViewStyle | — | 外层容器样式 |
