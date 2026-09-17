# Anchor 锚点（native）

Tamagui YStack+Text 自建，侧边锚点导航，点击切换激活项。

## 用法

```tsx
import { Anchor } from '@kit/ui-native'

const items = [
  { key: '1', title: '第一部分', href: 'section-1' },
  { key: '2', title: '第二部分', href: 'section-2' },
]
<Anchor items={items} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | AnchorItem[] | [] | 锚点列表 |
| affix | boolean | false | 是否固定定位（native 暂不支持） |
| offsetTop | number | 24 | 固定时距顶部距离（px） |
| activeKey | string | — | 当前激活的锚点 key（受控） |
| onChange | (key: string) => void | — | 激活变化回调 |
| onClick | (key: string, href: string) => void | — | 点击锚点回调 |
| style | ViewStyle | — | 外层容器样式 |
