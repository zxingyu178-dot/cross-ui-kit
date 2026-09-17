import type { ReactNode } from 'react'

export interface StatisticProps {
  title?: ReactNode
  value: number | string
  prefix?: ReactNode
  suffix?: ReactNode
  precision?: number
  loading?: boolean
  className?: string
}
