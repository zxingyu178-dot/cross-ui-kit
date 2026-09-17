import type { ReactNode } from 'react'

export interface PopoverProps {
  trigger: ReactNode
  content: ReactNode
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
}
