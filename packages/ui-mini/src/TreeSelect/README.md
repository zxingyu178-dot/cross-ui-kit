# TreeSelect 树形选择器（mini）

View+Text 自建，输入框 + 弹出 Tree 面板，支持展开/折叠、选中。

## 用法

```tsx
import { TreeSelect } from '@kit/ui-mini'
import type { TreeSelectNode } from '@kit/ui-mini'

const data: TreeSelectNode[] = [
  { key: '1', title: '父节点 1', children: [{ key: '1-1', title: '子节点 1-1' }] },
]
const [value, setValue] = useState('')
<TreeSelect data={data} value={value} onChange={(v) => setValue(v)} />
```

## Props

| 属性 | 类型 | 默认 | 说明 |
|---|---|---|---|
| data | TreeSelectNode[] | [] | 树形数据 |
| value | string | — | 选中值（受控） |
| onChange | (value: string, node: TreeSelectNode \| null) => void | — | 选中变化回调 |
| placeholder | string | '请选择' | 占位文字 |
| disabled | boolean | false | 是否禁用 |
| allowClear | boolean | true | 是否可清空 |
| className | string | — | 外层容器类名 |
