# Descriptions 描述列表（mini）

View+Text 自建，flex 布局模拟表格，支持标题/列数/边框。

## 用法

```tsx
import { Descriptions } from '@kit/ui-mini'

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
| className | string | — | 外层容器类名 |
