import type { ReactNode } from 'react'

export interface SwipeActionAction {
  key: string
  label: ReactNode
  /** 点击后是否自动收起（默认 true） */
  closeOnPress?: boolean
  /** 危险操作 */
  danger?: boolean
}

export interface SwipeActionProps {
  children: ReactNode
  actions?: SwipeActionAction[]
  onAction?: (key: string) => void
  className?: string
}
