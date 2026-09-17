# Descriptions 描述列表（web）

表格布局，支持标题/列数/边框/水平垂直布局。

## 用法

```tsx
import { Descriptions } from '@kit/ui-web'

<Descriptions
  title="用户信息"
  column={2}
  items={[
    { label: '姓名', value: '张三' },
    { label: '手机号', value: '138****8888' },
    { label: '邮箱', value: 'zhangsan@example.com', span: 2 },
  ]}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | — | 标题 |
| items | DescriptionsItem[] | — | 描述项列表（label/value/span） |
| column | number | 3 | 列数 |
| bordered | boolean | false | 是否显示边框 |
| layout | 'horizontal' \| 'vertical' | 'horizontal' | 布局方式 |
| className | string | — | 外层容器类名 |
