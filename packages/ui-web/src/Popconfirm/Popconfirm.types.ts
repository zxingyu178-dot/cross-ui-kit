import type { ReactNode } from 'react'

export type PopconfirmPlacement = 'top' | 'right' | 'bottom' | 'left'

export interface PopconfirmProps {
  /** 确认标题 */
  title: ReactNode
  /** 确认描述（可选） */
  description?: ReactNode
  /** 确认回调 */
  onConfirm?: () => void
  /** 取消回调 */
  onCancel?: () => void
  /** 确认按钮文本（默认"确定"） */
  okText?: string
  /** 取消按钮文本（默认"取消"） */
  cancelText?: string
  /** 触发元素 */
  trigger: ReactNode
  /** 弹出方向（默认 bottom） */
  placement?: PopconfirmPlacement
  /** 外层容器类名 */
  className?: string
}
