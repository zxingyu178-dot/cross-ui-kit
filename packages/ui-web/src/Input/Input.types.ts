import type { InputHTMLAttributes, ReactNode } from 'react'

/** 输入框尺寸（高度取 control-height token） */
export type InputSize = 'sm' | 'md' | 'lg'

/** 输入类型（三栈交集；native/mini 不支持的类型在各栈封装内降级为 text） */
export type InputType = 'text' | 'password' | 'number' | 'tel' | 'email' | 'search'

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type' | 'onChange' | 'prefix'
> {
  /** 受控值 */
  value?: string
  /** 非受控初值 */
  defaultValue?: string
  /** 输入类型 */
  type?: InputType
  /** 尺寸 */
  size?: InputSize
  /** 错误态：true 仅高亮；传字符串则同时作为错误文案显示在下方 */
  error?: boolean | string
  /** 只读 */
  readOnly?: boolean
  /** 前置图标（文本框左侧） */
  prefixIcon?: ReactNode
  /** 后置图标（文本框右侧，如清除/显隐密码） */
  suffixIcon?: ReactNode
  /** 值变化（三栈统一的值回调，web 内部从 event.target.value 归一） */
  onChange?: (value: string) => void
}
