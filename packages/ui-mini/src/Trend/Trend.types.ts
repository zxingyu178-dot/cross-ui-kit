export type TrendDirection = 'up' | 'down' | 'flat'

export interface TrendProps {
  direction: TrendDirection
  value: string
  inverted?: boolean
  showArrow?: boolean
  className?: string
}
