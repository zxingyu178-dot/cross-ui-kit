export type StatusDotTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'primary'

export interface StatusDotProps {
  /** 状态语义色 */
  tone?: StatusDotTone
  /** 圆点大小 */
  size?: number
  /** 是否带描边 */
  outlined?: boolean
  /** 状态文字 */
  text?: string
  /** 外层容器类名 */
  className?: string
}
