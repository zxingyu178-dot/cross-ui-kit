export type TimePickerFormat = 'HH:mm:ss' | 'HH:mm'

export interface TimePickerProps {
  /** 当前值（受控，格式 HH:mm:ss 或 HH:mm） */
  value?: string
  /** 默认值（非受控） */
  defaultValue?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 时间格式（默认 HH:mm:ss） */
  format?: TimePickerFormat
  /** 占位文本 */
  placeholder?: string
  /** 外层容器类名 */
  className?: string
}
