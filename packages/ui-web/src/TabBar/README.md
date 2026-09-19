# TabBar 底部标签栏（web）

底部标签栏，受控/非受控均可，支持图标与角标。

## 用法

```tsx
import { TabBar } from '@kit/ui-web'
<TabBar
  items={[
    { key: 'home', label: '首页', icon: '⌂' },
    { key: 'me', label: '我的', badge: 3 },
  ]}
  defaultActiveKey="home"
  onChange={(k) => console.log(k)}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| items | TabItem[] | — | 标签项（必填） |
| activeKey | string | — | 受控当前项 |
| defaultActiveKey | string | 首项 | 非受控默认项 |
| onChange | (key: string) => void | — | 切换回调 |
| className | string | — | 外层容器类名 |

### TabItem

| 属性 | 类型 | 说明 |
|---|---|---|
| key | string | 唯一键（必填） |
| label | ReactNode | 文字（必填） |
| icon | ReactNode | 图标 |
| badge | ReactNode | 角标内容 |
