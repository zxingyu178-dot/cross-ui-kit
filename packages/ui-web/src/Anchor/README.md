# Anchor 锚点（web）

侧边锚点导航，点击滚动到对应位置，支持滚动监听激活。

## 用法

```tsx
import { Anchor } from '@kit/ui-web'

const items = [
  { key: '1', title: '第一部分', href: 'section-1' },
  { key: '2', title: '第二部分', href: 'section-2' },
]
<Anchor items={items} affix offsetTop={24} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | AnchorItem[] | [] | 锚点列表 |
| affix | boolean | false | 是否固定定位 |
| offsetTop | number | 24 | 固定时距顶部距离（px） |
| activeKey | string | — | 当前激活的锚点 key（受控） |
| onChange | (key: string) => void | — | 激活变化回调 |
| onClick | (key: string, href: string) => void | — | 点击锚点回调 |
| className | string | — | 外层容器类名 |
