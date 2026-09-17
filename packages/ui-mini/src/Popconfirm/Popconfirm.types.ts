import type { ReactNode } from 'react'

export type PopconfirmPlacement = 'top' | 'right' | 'bottom' | 'left'

export interface PopconfirmProps {
  title: ReactNode
  description?: ReactNode
  onConfirm?: () => void
  onCancel?: () => void
  okText?: string
  cancelText?: string
  trigger: ReactNode
  placement?: PopconfirmPlacement
  className?: string
}
