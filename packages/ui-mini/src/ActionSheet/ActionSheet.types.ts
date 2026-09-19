import type { ReactNode } from 'react'

export interface ActionSheetAction {
  key: string
  label: ReactNode
  danger?: boolean
  disabled?: boolean
}

export interface ActionSheetProps {
  open: boolean
  actions: ActionSheetAction[]
  title?: ReactNode
  cancelText?: string
  onSelect?: (key: string) => void
  onClose?: () => void
  className?: string
}
