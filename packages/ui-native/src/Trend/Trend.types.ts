import type { TextStyle } from 'react-native'

export type TrendDirection = 'up' | 'down' | 'flat'

export interface TrendProps {
  direction: TrendDirection
  value: string
  inverted?: boolean
  showArrow?: boolean
  style?: TextStyle
}
