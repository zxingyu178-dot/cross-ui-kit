# List 列表（web）

ul/li 列表，支持数据源/自定义渲染/头部底部/边框/尺寸/加载/空状态。

## 用法

```tsx
import { List } from '@kit/ui-web'
import type { ListItem } from '@kit/ui-web'

const data: ListItem[] = [
  { key: '1', title: '列表项 1', description: '描述信息' },
  { key: '2', title: '列表项 2', description: '描述信息' },
]
<List dataSource={data} bordered header="标题" footer="底部" />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| dataSource | ListItem[] | [] | 数据源 |
| renderItem | (item, index) => ReactNode | — | 自定义渲染项 |
| header | ReactNode | — | 列表头部 |
| footer | ReactNode | — | 列表底部 |
| bordered | boolean | false | 是否显示边框 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 尺寸 |
| loading | boolean | false | 是否加载中 |
| emptyText | string | '暂无数据' | 空状态文本 |
| className | string | — | 外层容器类名 |
