import type { ReactNode } from 'react'

export type TimelineColor = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
export type TimelineDotType = 'solid' | 'outline'

export interface TimelineItem {
  /** 标题 */
  title: ReactNode
  /** 描述文本 */
  description?: ReactNode
  /** 时间标签 */
  time?: ReactNode
  /** 圆点语义色（默认 neutral） */
  color?: TimelineColor
  /** 圆点形态（默认 outline） */
  dotType?: TimelineDotType
  /** 自定义圆点（优先于 color/dotType） */
  customDot?: ReactNode
}

export interface TimelineProps {
  /** 时间线条目列表 */
  items: TimelineItem[]
  /** 是否倒序（默认 false） */
  reverse?: boolean
  /** 外层容器类名 */
  className?: string
}
