# Tree 树形控件（mini）

View+Text 自建，树形结构，支持展开/折叠、选中、禁用。

## 用法

```tsx
import { Tree } from '@kit/ui-mini'
import type { TreeNode } from '@kit/ui-mini'

const data: TreeNode[] = [
  { key: '1', title: '父节点 1', children: [{ key: '1-1', title: '子节点 1-1' }] },
]
<Tree data={data} defaultExpandAll />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| data | TreeNode[] | [] | 树形数据 |
| defaultExpandAll | boolean | false | 默认展开所有节点 |
| expandedKeys | string[] | — | 展开的 key 列表（受控） |
| onExpand | (expandedKeys: string[]) => void | — | 展开变化回调 |
| selectedKeys | string[] | — | 选中的 key 列表（受控） |
| onSelect | (selectedKeys: string[]) => void | — | 选中变化回调 |
| disabled | boolean | false | 是否禁用 |
| className | string | — | 外层容器类名 |
