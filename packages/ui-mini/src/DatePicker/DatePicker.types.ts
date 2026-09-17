export type DatePickerFormat = 'YYYY-MM-DD' | 'YYYY/MM/DD' | 'YYYY年MM月DD日'

export interface DatePickerProps {
  value?: Date | undefined
  defaultValue?: Date
  onChange?: (date: Date) => void
  format?: DatePickerFormat
  placeholder?: string
  disabled?: boolean
  className?: string
}
