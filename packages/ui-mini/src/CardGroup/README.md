# CardGroup 卡片组（mini）

多个 View 网格排列。

## 用法

```tsx
import { CardGroup } from '@kit/ui-mini'
import type { CardGroupItem } from '@kit/ui-mini'

const items: CardGroupItem[] = [
  { key: '1', title: '卡片一', content: '内容一' },
  { key: '2', title: '卡片二', content: '内容二' },
]
<CardGroup items={items} columns={2} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | CardGroupItem[] | [] | 卡片列表 |
| columns | 1 \| 2 \| 3 \| 4 | 2 | 列数 |
| gutter | number | 12 | 卡片间距（px） |
| className | string | — | 外层容器类名 |
