export interface MentionOption {
  key: string
  label: string
  description?: string
  avatar?: string
}

export interface MentionsProps {
  value?: string
  onChange?: (value: string) => void
  options?: MentionOption[]
  prefix?: string
  placeholder?: string
  disabled?: boolean
  allowClear?: boolean
  onSelect?: (option: MentionOption) => void
  className?: string
}
