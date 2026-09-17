# TagGroup 标签组（native）

多个 Tamagui View 排列显示，超出显示 +N。

## 用法

```tsx
import { TagGroup } from '@kit/ui-native'
import type { TagGroupItem } from '@kit/ui-native'

const items: TagGroupItem[] = [
  { key: '1', label: '标签一', color: 'primary' },
  { key: '2', label: '标签二', color: 'success' },
]
<TagGroup items={items} max={5} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | TagGroupItem[] | [] | 标签列表 |
| max | number | — | 最大显示数量 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 标签大小 |
| variant | 'soft' \| 'solid' \| 'outline' | 'soft' | 标签形态 |
| onClose | (key: string) => void | — | 关闭回调 |
| style | ViewStyle | — | 外层容器样式 |
