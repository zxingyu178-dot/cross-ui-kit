import type { ReactNode } from 'react'

/** 单选项 */
export interface RadioOption {
  /** 选项值（组内唯一） */
  value: string
  /** 选项文本 */
  label: ReactNode
  /** 单项禁用 */
  disabled?: boolean
}

/** 单选组尺寸（圆圈/内点直径） */
export type RadioGroupSize = 'sm' | 'md'

/** 排列方向 */
export type RadioGroupDirection = 'vertical' | 'horizontal'

export interface RadioGroupProps {
  /** 选项列表（必填） */
  options: RadioOption[]
  /** 受控选中值 */
  value?: string
  /** 非受控初值 */
  defaultValue?: string
  /** 选中值变化（三栈统一 string 值回调） */
  onValueChange?: (value: string) => void
  /** 整组禁用 */
  disabled?: boolean
  /** 排列方向（默认 vertical） */
  direction?: RadioGroupDirection
  /** 尺寸（默认 md，圆圈 20/内点 10；sm 圆圈 16/内点 8） */
  size?: RadioGroupSize
  /** 无障碍组标签 */
  accessibilityLabel?: string
}
