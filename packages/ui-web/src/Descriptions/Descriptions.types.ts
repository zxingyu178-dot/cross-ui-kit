import type { ReactNode } from 'react'

export interface DescriptionsItem {
  /** 标签 */
  label: ReactNode
  /** 值 */
  value: ReactNode
  /** 占几列（默认 1） */
  span?: number
}

export type DescriptionsLayout = 'horizontal' | 'vertical'

export interface DescriptionsProps {
  /** 标题 */
  title?: ReactNode
  /** 描述项列表 */
  items: DescriptionsItem[]
  /** 列数（默认 3） */
  column?: number
  /** 是否显示边框（默认 false） */
  bordered?: boolean
  /** 布局方式（默认 horizontal） */
  layout?: DescriptionsLayout
  /** 外层容器类名 */
  className?: string
}
