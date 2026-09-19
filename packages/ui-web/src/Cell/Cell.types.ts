import type { ReactNode } from 'react'

export interface CellProps {
  /** 标题 */
  title?: ReactNode
  /** 描述/副标题 */
  description?: ReactNode
  /** 左侧图标 */
  icon?: ReactNode
  /** 右侧内容（默认右箭头） */
  right?: ReactNode
  /** 点击 */
  onClick?: () => void
  /** 是否可点击（显示右箭头） */
  clickable?: boolean
  /** 外层容器类名 */
  className?: string
}
