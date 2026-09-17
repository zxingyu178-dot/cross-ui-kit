export interface ColorPickerProps {
  value?: string
  defaultValue?: string
  onChange?: (color: string) => void
  presetColors?: string[]
  disabled?: boolean
  placeholder?: string
  className?: string
}
