# CardGroup 卡片组（web）

多个卡片网格排列。

## 用法

```tsx
import { CardGroup } from '@kit/ui-web'
import type { CardGroupItem } from '@kit/ui-web'

const items: CardGroupItem[] = [
  { key: '1', title: '卡片一', content: '内容一' },
  { key: '2', title: '卡片二', content: '内容二' },
]
<CardGroup items={items} columns={3} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | CardGroupItem[] | [] | 卡片列表 |
| columns | 1 \| 2 \| 3 \| 4 | 3 | 列数（响应式） |
| gutter | number | 16 | 卡片间距（px） |
| children | ReactNode | — | 子元素（自定义卡片） |
| className | string | — | 外层容器类名 |
