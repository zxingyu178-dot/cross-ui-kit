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
  /** 尺寸（默认 md） */
  size?: RadioGroupSize
  /** 原生表单 name（同组共用） */
  name?: string
  /** 原生 id（组容器） */
  id?: string
  /** 容器类名（仅允许 token 化样式） */
  className?: string
}
