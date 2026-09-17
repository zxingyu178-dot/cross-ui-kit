export interface WatermarkProps {
  /** 水印文字 */
  text?: string
  /** 水印文字颜色 */
  color?: string
  /** 水印文字大小（px） */
  fontSize?: number
  /** 水印旋转角度（deg） */
  rotate?: number
  /** 水印间距（px） */
  gap?: number
  /** 水印透明度（0-1） */
  opacity?: number
  /** 子元素 */
  children?: React.ReactNode
  /** 外层容器类名 */
  className?: string
}
