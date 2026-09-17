# Address 地址选择器（native）

省市区三级级联选择器。

## 用法

```tsx
import { useState } from 'react'
import { Address } from '@kit/ui-native'

const [value, setValue] = useState({})
<Address value={value} onChange={setValue} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| value | AddressValue | {} | 选中值 |
| onChange | (value: AddressValue) => void | — | 值变化回调 |
| options | AddressOption[] | 内置默认数据 | 省市区数据 |
| placeholder | string | '请选择' | 占位符 |
| disabled | boolean | false | 是否禁用 |
| style | ViewStyle | — | 外层容器样式 |
