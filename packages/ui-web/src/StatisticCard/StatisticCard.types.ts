import type { ReactNode } from 'react'

export interface StatisticCardProps {
  /** 标题 */
  title: string
  /** 数值 */
  value: string | number
  /** 前缀 */
  prefix?: ReactNode
  /** 后缀 */
  suffix?: ReactNode
  /** 趋势方向 */
  trend?: 'up' | 'down' | 'none'
  /** 趋势值（百分比） */
  trendValue?: string
  /** 数值颜色 */
  valueColor?: string
  /** 子元素（自定义内容） */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}
