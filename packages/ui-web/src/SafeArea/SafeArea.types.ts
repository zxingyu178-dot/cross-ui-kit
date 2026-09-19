import type { ReactNode } from 'react'

export interface SafeAreaProps {
  children: ReactNode
  position?: 'top' | 'bottom' | 'all'
  className?: string
}
