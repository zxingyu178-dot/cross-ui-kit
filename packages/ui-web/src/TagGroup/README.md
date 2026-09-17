# TagGroup 标签组（web）

多个标签排列显示，超出显示 +N。

## 用法

```tsx
import { TagGroup } from '@kit/ui-web'
import type { TagGroupItem } from '@kit/ui-web'

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
| max | number | — | 最大显示数量（超出显示 +N） |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 标签大小 |
| variant | 'soft' \| 'solid' \| 'outline' | 'soft' | 标签形态 |
| onClose | (key: string) => void | — | 关闭回调 |
| children | ReactNode | — | 子元素（自定义标签） |
| className | string | — | 外层容器类名 |
