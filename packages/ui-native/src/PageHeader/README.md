# PageHeader 页头（native）

页面顶部的标题、副标题、面包屑和额外操作。

## 用法

```tsx
import { PageHeader } from '@kit/ui-native'
<PageHeader title="页面标题" subTitle="页面副标题描述" breadcrumb="首页 / 列表 / 详情" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| title | string | — | 标题（必填） |
| subTitle | string | — | 副标题 |
| breadcrumb | string | — | 面包屑 |
| extra | string | — | 额外内容（右侧） |
| footer | string | — | 底部内容 |
| style | ViewStyle | — | 外层容器样式 |
