export interface OtpInputProps {
  /** 输入值（字符串，长度 = length） */
  value?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 验证码长度 */
  length?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 是否密码模式 */
  password?: boolean
  /** 外层容器类名 */
  className?: string
}
