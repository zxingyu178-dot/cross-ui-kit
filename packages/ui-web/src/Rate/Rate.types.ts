import type { ReactNode } from 'react'

export type RateSize = 'sm' | 'md' | 'lg'

export interface RateProps {
  /** 当前值（受控） */
  value?: number
  /** 默认值（非受控，默认 0） */
  defaultValue?: number
  /** 值变化回调 */
  onChange?: (value: number) => void
  /** 星星总数（默认 5） */
  count?: number
  /** 是否允许半星（默认 false） */
  allowHalf?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 尺寸（默认 md） */
  size?: RateSize
  /** 自定义字符（默认 ★） */
  character?: ReactNode
  /** 外层容器类名 */
  className?: string
}
