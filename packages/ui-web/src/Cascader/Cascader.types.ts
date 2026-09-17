import type { ReactNode } from 'react'

export interface CascaderOption {
  /** 选项值 */
  value: string
  /** 选项标签 */
  label: ReactNode
  /** 子选项 */
  children?: CascaderOption[]
}

export interface CascaderProps {
  /** 当前值（受控，string[] 表示每级选中的 value） */
  value?: string[]
  /** 默认值（非受控） */
  defaultValue?: string[]
  /** 值变化回调 */
  onChange?: (value: string[]) => void
  /** 选项树 */
  options: CascaderOption[]
  /** 占位文本 */
  placeholder?: string
  /** 外层容器类名 */
  className?: string
}
