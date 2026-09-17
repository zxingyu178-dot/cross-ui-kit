import type { ReactNode } from 'react'

export interface ListItem {
  key: string
  title: string
  description?: string
  extra?: ReactNode
  disabled?: boolean
}

export type ListSize = 'sm' | 'md' | 'lg'

export interface ListProps {
  dataSource?: ListItem[]
  header?: ReactNode
  footer?: ReactNode
  bordered?: boolean
  size?: ListSize
  loading?: boolean
  emptyText?: string
  className?: string
}
