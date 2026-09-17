import type { ReactNode } from 'react'

export interface TagGroupItem {
  /** 唯一标识 */
  key: string
  /** 标签文字 */
  label: string
  /** 标签颜色（语义色） */
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  /** 是否可关闭 */
  closable?: boolean
}

export interface TagGroupProps {
  /** 标签列表 */
  items?: TagGroupItem[]
  /** 最大显示数量（超出显示 +N） */
  max?: number
  /** 标签大小 */
  size?: 'sm' | 'md' | 'lg'
  /** 标签形态 */
  variant?: 'soft' | 'solid' | 'outline'
  /** 关闭回调 */
  onClose?: (key: string) => void
  /** 子元素（自定义标签） */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}
