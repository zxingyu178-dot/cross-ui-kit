import type { ReactNode } from 'react'

export type SegmentedSize = 'sm' | 'md' | 'lg'

export interface SegmentedOption {
  /** 选项标签 */
  label: ReactNode
  /** 选项值 */
  value: string
  /** 是否禁用 */
  disabled?: boolean
}

export interface SegmentedProps {
  /** 当前值（受控） */
  value?: string
  /** 默认值（非受控） */
  defaultValue?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 选项列表 */
  options: SegmentedOption[]
  /** 尺寸（默认 md） */
  size?: SegmentedSize
  /** 是否整体禁用 */
  disabled?: boolean
  /** 外层容器类名 */
  className?: string
}
