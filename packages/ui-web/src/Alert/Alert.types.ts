import type { ReactNode } from 'react'

export type AlertType = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  /** 语义类型（默认 info） */
  type?: AlertType
  /** 标题 */
  title?: ReactNode
  /** 描述文本（title 缺省时作为主内容） */
  description?: ReactNode
  /** 是否可关闭（默认 false） */
  closable?: boolean
  /** 关闭回调 */
  onClose?: () => void
  /** 是否显示语义图标（默认 true） */
  showIcon?: boolean
  /** 自定义操作区（关闭按钮左侧） */
  action?: ReactNode
  /** 外层容器类名 */
  className?: string
}
