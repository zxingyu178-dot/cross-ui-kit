import type { TextStyle } from 'react-native'

export interface CountdownProps {
  value?: number
  format?: string
  onFinish?: () => void
  style?: TextStyle
}

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}
