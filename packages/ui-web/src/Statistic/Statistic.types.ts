import type { CSSProperties, ReactNode } from 'react'

export interface StatisticProps {
  /** 标题 */
  title?: ReactNode
  /** 数值（number 自动千分位格式化；string 原样展示） */
  value: number | string
  /** 前缀 */
  prefix?: ReactNode
  /** 后缀 */
  suffix?: ReactNode
  /** 小数精度（仅 value 为 number 时生效） */
  precision?: number
  /** 加载中（显示骨架） */
  loading?: boolean
  /** 数值自定义样式 */
  valueStyle?: CSSProperties
  /** 外层容器类名 */
  className?: string
}
