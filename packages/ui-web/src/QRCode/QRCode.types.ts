export interface QRCodeProps {
  /** 编码内容 */
  value: string
  /** 尺寸（像素） */
  size?: number
  /** 容错级别 */
  level?: 'L' | 'M' | 'Q' | 'H'
  /** 前景色 */
  color?: string
  /** 背景色 */
  bgColor?: string
  /** 外层容器类名 */
  className?: string
}
