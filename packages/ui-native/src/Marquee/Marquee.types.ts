import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface MarqueeProps {
  children: ReactNode
  speed?: number
  pauseOnHover?: boolean
  reverse?: boolean
  style?: ViewStyle
}
