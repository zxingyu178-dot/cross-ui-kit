export type TimePickerFormat = 'HH:mm:ss' | 'HH:mm'

export interface TimePickerProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  format?: TimePickerFormat
  placeholder?: string
  className?: string
}
