# SafeArea 安全区（native）

适配刘海屏/异形屏安全区。

## 用法

```tsx
import { SafeArea } from '@kit/ui-native'
<SafeArea position="bottom">
  <TabBar />
</SafeArea>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| children | ReactNode | — | 内容（必填） |
| position | 'top'\\|'bottom'\\|'all' | 'bottom' | 安全区位置 |
| style | ViewStyle | — | 外层容器样式 |
