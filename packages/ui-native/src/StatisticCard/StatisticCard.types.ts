import type { ViewStyle } from 'react-native'

export interface StatisticCardProps {
  title: string
  value: string | number
  prefix?: string
  suffix?: string
  trend?: 'up' | 'down' | 'none'
  trendValue?: string
  valueColor?: string
  style?: ViewStyle
}
