import type { ReactNode } from 'react'

/** 输入框尺寸 */
export type InputSize = 'sm' | 'md' | 'lg'

/** 输入类型（三栈交集；mini 不支持的 tel/email/search 降级为 text） */
export type InputType = 'text' | 'password' | 'number' | 'tel' | 'email' | 'search'

export interface InputProps {
  /** 受控值 */
  value?: string
  /** 非受控初值 */
  defaultValue?: string
  /** 占位文本 */
  placeholder?: string
  /** 输入类型 */
  type?: InputType
  /** 尺寸 */
  size?: InputSize
  /** 错误态：true 仅高亮；字符串同时作为错误文案 */
  error?: boolean | string
  /** 禁用 */
  disabled?: boolean
  /** 只读 */
  readOnly?: boolean
  /** 最大长度 */
  maxLength?: number
  /** 前置图标 */
  prefixIcon?: ReactNode
  /** 后置图标 */
  suffixIcon?: ReactNode
  /** 外层类名 */
  className?: string
  /** 值变化（三栈统一值回调） */
  onChange?: (value: string) => void
}
