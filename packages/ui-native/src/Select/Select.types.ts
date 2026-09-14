import type { ReactNode } from 'react'

/** 选择器尺寸 */
export type SelectSize = 'sm' | 'md' | 'lg'

/** 选项数据（三栈统一结构；native 选项文本请传字符串） */
export interface SelectOption {
  /** 展示文本（native/mini 请传字符串） */
  label: ReactNode
  /** 选项值 */
  value: string
  /** 禁用该项 */
  disabled?: boolean
}

export interface SelectProps {
  /** 选项列表 */
  options: SelectOption[]
  /** 受控值 */
  value?: string
  /** 非受控初值 */
  defaultValue?: string
  /** 未选择时的占位文本 */
  placeholder?: string
  /** 尺寸 */
  size?: SelectSize
  /** 禁用整个选择器 */
  disabled?: boolean
  /** 错误态：true 仅红框；字符串同时作为错误文案 */
  error?: boolean | string
  /** 无障碍标签（不传且 placeholder 为字符串时取 placeholder） */
  accessibilityLabel?: string
  /** 值变化（三栈统一值回调） */
  onChange?: (value: string) => void
}
