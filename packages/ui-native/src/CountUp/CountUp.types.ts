import type { TextStyle } from 'react-native'

export interface CountUpProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  separator?: boolean
  fontSize?: number
  color?: string
  style?: TextStyle
}
