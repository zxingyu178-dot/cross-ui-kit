import type { ReactNode } from 'react'

export type ImageFit = 'cover' | 'contain' | 'fill' | 'stretch' | 'center'

export interface ImageProps {
  /** 图片地址 */
  src: string
  /** 替代文本 */
  alt?: string
  /** 宽度 */
  width?: number | string
  /** 高度 */
  height?: number | string
  /** 填充方式（默认 cover） */
  fit?: ImageFit
  /** 圆角 */
  radius?: number
  /** 加载中占位 */
  placeholder?: ReactNode
  /** 加载失败占位 */
  fallback?: ReactNode
  /** 外层容器类名 */
  className?: string
}
