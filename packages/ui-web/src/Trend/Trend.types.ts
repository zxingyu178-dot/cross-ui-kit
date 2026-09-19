export type TrendDirection = 'up' | 'down' | 'flat'

export interface TrendProps {
  /** 趋势方向 */
  direction: TrendDirection
  /** 数值文本，如 "12.5%" */
  value: string
  /** 涨跌颜色是否反转（如跌用绿、涨用红） */
  inverted?: boolean
  /** 是否带箭头 */
  showArrow?: boolean
  /** 外层容器类名 */
  className?: string
}
