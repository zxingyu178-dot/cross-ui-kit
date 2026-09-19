import type { ReactNode } from 'react'

export interface SwipeActionAction {
  key: string
  label: ReactNode
  closeOnPress?: boolean
  danger?: boolean
}

export interface SwipeActionProps {
  children: ReactNode
  actions?: SwipeActionAction[]
  onAction?: (key: string) => void
  className?: string
}
