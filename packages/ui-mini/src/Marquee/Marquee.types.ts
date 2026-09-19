import type { ReactNode } from 'react'

export interface MarqueeProps {
  children: ReactNode
  speed?: number
  pauseOnHover?: boolean
  reverse?: boolean
  className?: string
}
