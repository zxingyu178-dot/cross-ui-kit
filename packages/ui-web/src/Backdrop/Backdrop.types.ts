import type { ReactNode } from 'react'

export interface BackdropProps {
  open?: boolean
  onClose?: () => void
  children?: ReactNode
  opacity?: number
  className?: string
}
