# DataTable 数据表格（mini：小程序 / 移动 H5）

数据展示核心组件：View flex 网格表格、受控排序、加载骨架、空态、斑马纹、行点击。排序逻辑在 `@kit/core` 的 `sortData`（三栈共用）。样式在 `DataTable.scss` 全 token 化。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| columns | `TableColumn<T>[]` | 必填 | 列配置 |
| data | `T[]` | 必填 | 数据行 |
| rowKey | `keyof T \| (row,index)=>string` | 行索引 | 行唯一 key |
| loading | boolean | `false` | 渲染 3 行骨架 |
| empty | ReactNode | `'暂无数据'` | 空态文案 |
| stripe | boolean | `true` | 斑马纹 |
| onRowClick | `(row,index)=>void` | - | 行点击 |
| sortState | `{key,order}\|null` | - | 受控排序状态 |
| onSortChange | `(key,order)=>void` | - | 排序变化回调 |

## TableColumn

| 字段 | 类型 | 说明 |
|---|---|---|
| key | string | 列 key（默认取 `row[key]`） |
| title | ReactNode | 表头文本 |
| align | `'left'\|'center'\|'right'` | 对齐 |
| width | number\|string | 固定宽（number=px），缺省 flex 自适应 |
| render | `(value,row,index)=>ReactNode` | 自定义单元格 |
| sortable | boolean | 可排序（需 onSortChange） |
| sorter | `(a,b)=>number` | 列自定义比较器 |

## 排序

- 表头点击：未排序→`asc`，同列再点→`desc`；受控（sortState + onSortChange）。
- 箭头 `↑` `↓` `↕`；默认比较：数字按大小、字符串按拼音、null/undefined 排前。

## 示例

`__examples__/States.tsx`：受控排序、加载骨架、空态。

## Do / Don't

- Do：列排序交给 core `sortData`；受控排序。
- Don't：在视图内写排序逻辑。
