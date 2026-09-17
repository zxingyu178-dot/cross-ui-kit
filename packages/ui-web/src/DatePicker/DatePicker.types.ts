export type DatePickerFormat = 'YYYY-MM-DD' | 'YYYY/MM/DD' | 'YYYY年MM月DD日'

export interface DatePickerProps {
  /** 当前值（受控，Date 对象；undefined 表示未选择） */
  value?: Date | undefined
  /** 默认值（非受控） */
  defaultValue?: Date
  /** 值变化回调 */
  onChange?: (date: Date) => void
  /** 显示格式（默认 YYYY-MM-DD） */
  format?: DatePickerFormat
  /** 占位文本 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 外层容器类名 */
  className?: string
}
