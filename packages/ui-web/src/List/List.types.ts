import type { ReactNode } from 'react'

export interface ListItem {
  /** 唯一标识 */
  key: string
  /** 主标题 */
  title: string
  /** 副标题/描述 */
  description?: string
  /** 额外内容（右侧） */
  extra?: ReactNode
  /** 是否禁用 */
  disabled?: boolean
}

export type ListSize = 'sm' | 'md' | 'lg'

export interface ListProps {
  /** 数据源 */
  dataSource?: ListItem[]
  /** 自定义渲染项（优先级高于 dataSource） */
  renderItem?: (item: ListItem, index: number) => ReactNode
  /** 列表头部 */
  header?: ReactNode
  /** 列表底部 */
  footer?: ReactNode
  /** 是否显示边框 */
  bordered?: boolean
  /** 尺寸 */
  size?: ListSize
  /** 是否加载中 */
  loading?: boolean
  /** 空状态文本 */
  emptyText?: string
  /** 外层容器类名 */
  className?: string
}
