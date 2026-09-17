import type { ReactNode } from 'react'

export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface NotificationProps {
  /** 标题 */
  title?: string
  /** 描述 */
  description?: string
  /** 类型 */
  type?: NotificationType
  /** 自动关闭时长（ms），0 表示不自动关闭 */
  duration?: number
  /** 关闭回调 */
  onClose?: () => void
  /** 是否显示关闭按钮 */
  closable?: boolean
  /** 自定义图标 */
  icon?: ReactNode
  /** 外层容器类名 */
  className?: string
}
