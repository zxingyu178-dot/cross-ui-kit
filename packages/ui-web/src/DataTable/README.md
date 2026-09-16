# DataTable 数据表格（web）

数据展示核心组件：语义化 `<table>`、受控排序、加载骨架、空态、斑马纹、行点击。排序逻辑在 `@kit/core` 的 `sortData`（三栈共用）。

## Props

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| columns | `TableColumn<T>[]` | 必填 | 列配置 |
| data | `T[]` | 必填 | 数据行 |
| rowKey | `keyof T \| (row,index)=>string` | 行索引 | 行唯一 key |
| loading | boolean | `false` | 渲染 3 行 Skeleton 骨架 |
| empty | ReactNode | `'暂无数据'` | 空态文案（整页级空态请用 Empty 组件） |
| stripe | boolean | `true` | 斑马纹 |
| onRowClick | `(row,index)=>void` | - | 行点击（带 hover 效果） |
| sortState | `{key,order}\|null` | - | 受控排序状态 |
| onSortChange | `(key,order)=>void` | - | 排序变化回调 |
| className | string | - | 透传 |

## TableColumn

| 字段 | 类型 | 说明 |
|---|---|---|
| key | string | 列 key（默认取 `row[key]`） |
| title | ReactNode | 表头文本 |
| align | `'left'\|'center'\|'right'` | 对齐 |
| width | number\|string | 固定宽（number=px），缺省 flex 自适应 |
| render | `(value,row,index)=>ReactNode` | 自定义单元格 |
| sortable | boolean | 可排序（需 onSortChange） |
| sorter | `(a,b)=>number` | 列自定义比较器（优先于默认值比较） |

## 排序

- 表头按钮点击：未排序→`asc`，同列再点→`desc` 切换；受控（sortState + onSortChange）。
- `th aria-sort`：`ascending` / `descending` / `none`；箭头 `↑` `↓` `↕`。
- 默认比较：数字按大小、字符串按拼音（zh-CN）、null/undefined 排前。

## 示例

`__examples__/States.tsx`：受控排序（库存降序+点表头切换+行点击回调）、加载骨架、空态。

## Do / Don't

- Do：列排序交给 core `sortData`；受控排序（sortState + onSortChange）。
- Don't：在视图内写排序逻辑；不在表格内造整页级空态（用 Empty）。
