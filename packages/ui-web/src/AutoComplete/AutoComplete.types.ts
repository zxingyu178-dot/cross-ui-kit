import type { ReactNode } from 'react'

export interface AutoCompleteOption {
  /** 选项值 */
  value: string
  /** 选项标签 */
  label: ReactNode
  /** 是否禁用 */
  disabled?: boolean
}

export interface AutoCompleteProps {
  /** 当前值（受控） */
  value?: string
  /** 默认值（非受控） */
  defaultValue?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 选中选项回调 */
  onSelect?: (option: AutoCompleteOption) => void
  /** 选项列表 */
  options: AutoCompleteOption[]
  /** 占位文本 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义过滤函数（默认按 label 模糊匹配） */
  filterOption?: (inputValue: string, option: AutoCompleteOption) => boolean
  /** 外层容器类名 */
  className?: string
}
