export interface TimeRangePickerProps {
  value?: [string, string]
  onChange?: (value: [string, string]) => void
  placeholder?: [string, string]
  disabled?: boolean
  separator?: string
  className?: string
}
