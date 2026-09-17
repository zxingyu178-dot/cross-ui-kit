# Descriptions 描述列表（native）

Tamagui XStack+YStack+Text 自建，flex 布局模拟表格，支持标题/列数/边框。

## 用法

```tsx
import { Descriptions } from '@kit/ui-native'

<Descriptions
  title="用户信息"
  column={2}
  items={[{ label: '姓名', value: '张三' }]}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | — | 标题 |
| items | DescriptionsItem[] | — | 描述项列表 |
| column | number | 3 | 列数 |
| bordered | boolean | false | 是否显示边框 |
| layout | 'horizontal' \| 'vertical' | 'horizontal' | 布局方式 |
| style | ViewStyle | — | 外层容器样式 |
