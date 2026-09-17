export interface PasswordStrengthProps {
  value: string
  minLength?: number
  className?: string
}

export type StrengthLevel = 'empty' | 'weak' | 'medium' | 'strong'
