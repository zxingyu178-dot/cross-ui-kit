export interface PasswordStrengthProps {
  /** 密码值 */
  value: string
  /** 最小长度 */
  minLength?: number
  /** 外层容器类名 */
  className?: string
}

export type StrengthLevel = 'empty' | 'weak' | 'medium' | 'strong'
