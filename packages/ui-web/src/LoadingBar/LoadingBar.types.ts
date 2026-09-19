export interface LoadingBarProps {
  /** 当前进度 0-100，-1 表示不确定进度 */
  progress?: number
  /** 是否可见 */
  visible?: boolean
  color?: string
  className?: string
}
