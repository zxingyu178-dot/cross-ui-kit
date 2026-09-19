# NavBar 顶部导航栏（web）

标题 + 返回 + 右侧操作。

## 用法

```tsx
import { NavBar } from '@kit/ui-web'
<NavBar title="详情" onBack={() => history.back()} right={<button>编辑</button>} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | — | 标题 |
| left | ReactNode | — | 左侧内容（覆盖默认返回） |
| right | ReactNode | — | 右侧内容 |
| onBack | () => void | — | 点击返回 |
| showBack | boolean | true | 是否显示返回按钮 |
| className | string | — | 外层容器类名 |
