import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export type TimelineColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
export type TimelineDotType = 'solid' | 'outline'

export interface TimelineItem {
  title: ReactNode
  description?: ReactNode
  time?: ReactNode
  color?: TimelineColor
  dotType?: TimelineDotType
  customDot?: ReactNode
}

export interface TimelineProps {
  items: TimelineItem[]
  reverse?: boolean
  style?: ViewStyle
}
