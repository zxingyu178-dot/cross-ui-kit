# AvatarGroup 头像组（mini）

多个 View 堆叠显示，超出显示 +N。

## 用法

```tsx
import { AvatarGroup } from '@kit/ui-mini'
import type { AvatarGroupItem } from '@kit/ui-mini'

const items: AvatarGroupItem[] = [
  { key: '1', text: '张' },
  { key: '2', text: '李' },
]
<AvatarGroup items={items} max={3} size={32} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | AvatarGroupItem[] | [] | 头像列表 |
| max | number | 5 | 最大显示数量 |
| size | number | 32 | 头像大小（px） |
| shape | 'circle' \| 'square' | 'circle' | 头像形状 |
| className | string | — | 外层容器类名 |
