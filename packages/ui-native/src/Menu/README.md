# Menu 导航菜单（native）

支持一级/二级菜单、选中高亮、水平/垂直布局。

## 用法

```tsx
import { useState } from 'react'
import { Menu } from '@kit/ui-native'
import type { MenuItem } from '@kit/ui-native'

const items: MenuItem[] = [
  { key: 'home', label: '首页' },
  { key: 'products', label: '产品', children: [{ key: 'p1', label: '产品一' }, { key: 'p2', label: '产品二' }] },
  { key: 'about', label: '关于' },
]
const [selected, setSelected] = useState('home')
<Menu items={items} selectedKey={selected} onSelect={setSelected} mode="horizontal" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | MenuItem[] | [] | 菜单项 |
| selectedKey | string | — | 当前选中项 |
| onSelect | (key: string) => void | — | 选中回调 |
| mode | 'horizontal' \| 'vertical' | 'horizontal' | 布局模式 |
| defaultOpenKeys | string[] | [] | 默认展开的子菜单 key 列表 |
| style | ViewStyle | — | 外层容器样式 |
