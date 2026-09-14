import type { ReactNode } from 'react'

export interface CheckboxProps {
  /** 受控选中态 */
  checked?: boolean
  /** 非受控初值 */
  defaultChecked?: boolean
  /** 禁用 */
  disabled?: boolean
  /** 半选（父级部分选中展示态，受控） */
  indeterminate?: boolean
  /** 复选框文本 */
  label?: ReactNode
  /** 错误态（未选框红色边框） */
  error?: boolean
  /** 外层类名 */
  className?: string
  /** 选中态变化（三栈统一 boolean 值回调） */
  onChange?: (checked: boolean) => void
}
