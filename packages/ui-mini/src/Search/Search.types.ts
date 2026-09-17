export interface SearchProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  onSearch?: (value: string) => void
  enterButton?: boolean
  enterButtonText?: string
  className?: string
}
