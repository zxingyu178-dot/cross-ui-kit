# TabBar 底部标签栏（native）

底部标签栏，受控/非受控均可，支持图标与角标。

## 用法

```tsx
import { TabBar } from '@kit/ui-native'
<TabBar items={[{ key: 'home', label: '首页' }, { key: 'me', label: '我的' }]} defaultActiveKey="home" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | TabItem[] | — | 标签项（必填） |
| activeKey | string | — | 受控当前项 |
| defaultActiveKey | string | 首项 | 非受控默认项 |
| onChange | (key: string) => void | — | 切换回调 |
| style | ViewStyle | — | 外层容器样式 |
