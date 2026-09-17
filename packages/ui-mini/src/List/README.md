# List 列表（mini）

View+Text 自建，支持数据源/头部底部/边框/尺寸/加载/空状态。

## 用法

```tsx
import { List } from '@kit/ui-mini'
import type { ListItem } from '@kit/ui-mini'

const data: ListItem[] = [
  { key: '1', title: '列表项 1', description: '描述信息' },
]
<List dataSource={data} bordered header="标题" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| dataSource | ListItem[] | [] | 数据源 |
| header | ReactNode | — | 列表头部 |
| footer | ReactNode | — | 列表底部 |
| bordered | boolean | false | 是否显示边框 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 尺寸 |
| loading | boolean | false | 是否加载中 |
| emptyText | string | '暂无数据' | 空状态文本 |
| className | string | — | 外层容器类名 |
