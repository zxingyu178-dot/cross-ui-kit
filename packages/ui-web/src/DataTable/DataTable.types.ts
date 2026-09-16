import type { ReactNode } from 'react'
import type { SortState } from '@kit/core'

export type Align = 'left' | 'center' | 'right'

export interface TableColumn<T> {
  /** 列 key（取 row[key] 作为默认单元格值） */
  key: string
  /** 表头文本 */
  title: ReactNode
  /** 对齐，默认 left */
  align?: Align
  /** 固定宽度（number=px / string 原样）；缺省 flex 自适应 */
  width?: number | string
  /** 自定义单元格渲染 */
  render?: (value: unknown, row: T, index: number) => ReactNode
  /** 是否可排序（受控，需 onSortChange） */
  sortable?: boolean
  /** 列自定义比较器（有则优先于默认值比较） */
  sorter?: (a: T, b: T) => number
}

export interface DataTableProps<T> {
  /** 列配置 */
  columns: TableColumn<T>[]
  /** 数据行 */
  data: T[]
  /** 行 key：字段名或函数（缺省用行索引） */
  rowKey?: keyof T | ((row: T, index: number) => string)
  /** 加载中（渲染骨架行） */
  loading?: boolean
  /** 空态文案（默认"暂无数据"） */
  empty?: ReactNode
  /** 斑马纹，默认 true */
  stripe?: boolean
  /** 行点击回调 */
  onRowClick?: (row: T, index: number) => void
  /** 受控排序状态 */
  sortState?: SortState | null
  /** 排序变化回调（受控） */
  onSortChange?: (key: string, order: 'asc' | 'desc') => void
  className?: string
}
