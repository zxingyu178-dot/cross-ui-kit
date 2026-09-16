export type PaginationSize = 'sm' | 'md'

export interface PaginationProps {
  /** 当前页（1-based，默认 1） */
  current?: number
  /** 每页条数（默认 10） */
  pageSize?: number
  /** 总条数 */
  total: number
  /** 页码变化回调（受控） */
  onChange: (page: number) => void
  /** 是否显示"共 N 条"，默认 true */
  showTotal?: boolean
  /** 尺寸，默认 md */
  size?: PaginationSize
  /** 整体禁用 */
  disabled?: boolean
}
