import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface StatisticProps {
  title?: ReactNode
  value: number | string
  prefix?: ReactNode
  suffix?: ReactNode
  precision?: number
  loading?: boolean
  style?: ViewStyle
}
