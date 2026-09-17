export interface BackTopProps {
  /** 滚动超过多少像素显示（默认 400） */
  visibilityHeight?: number
  /** 点击回调 */
  onClick?: () => void
  /** 滚动动画时长（ms，默认 300） */
  duration?: number
  /** 外层容器类名 */
  className?: string
}
