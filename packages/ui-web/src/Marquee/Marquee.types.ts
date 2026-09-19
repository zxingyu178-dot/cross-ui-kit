import type { ReactNode } from 'react'

export interface MarqueeProps {
  children: ReactNode
  /** 滚动速度 px/s */
  speed?: number
  /** 是否暂停（hover/touch 时） */
  pauseOnHover?: boolean
  /** 是否反向 */
  reverse?: boolean
  className?: string
}
