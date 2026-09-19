# NavBar 顶部导航栏（native）

标题 + 返回 + 右侧操作。

## 用法

```tsx
import { NavBar } from '@kit/ui-native'
<NavBar title="详情" onBack={() => navigation.goBack()} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | — | 标题 |
| left | ReactNode | — | 左侧内容（覆盖默认返回） |
| right | ReactNode | — | 右侧内容 |
| onBack | () => void | — | 点击返回 |
| showBack | boolean | true | 是否显示返回按钮 |
| style | ViewStyle | — | 外层容器样式 |
