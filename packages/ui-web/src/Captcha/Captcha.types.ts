export interface CaptchaProps {
  /** 验证码值 */
  value?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 发送验证码回调 */
  onSend?: () => void | Promise<void>
  /** 倒计时秒数 */
  countdown?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 占位文字 */
  placeholder?: string
  /** 最大长度 */
  maxLength?: number
  /** 外层容器类名 */
  className?: string
}
