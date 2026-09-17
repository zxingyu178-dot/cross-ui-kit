export interface StatisticCardProps {
  title: string
  value: string | number
  prefix?: string
  suffix?: string
  trend?: 'up' | 'down' | 'none'
  trendValue?: string
  valueColor?: string
  className?: string
}
