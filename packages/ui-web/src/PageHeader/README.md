# PageHeader 页头（web）

页面顶部的标题、副标题、面包屑和额外操作。

## 用法

```tsx
import { PageHeader } from '@kit/ui-web'
import { Button } from '@kit/ui-web'
<PageHeader
  title="页面标题"
  subTitle="页面副标题描述"
  breadcrumb={<span>首页 / 列表 / 详情</span>}
  extra={<Button>操作按钮</Button>}
/>
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | ReactNode | — | 标题（必填） |
| subTitle | ReactNode | — | 副标题 |
| breadcrumb | ReactNode | — | 面包屑 |
| extra | ReactNode | — | 额外内容（右侧） |
| footer | ReactNode | — | 底部内容 |
| className | string | — | 外层容器类名 |
