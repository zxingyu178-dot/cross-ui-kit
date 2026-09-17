import type { ReactNode } from 'react'

export interface CarouselItem {
  /** 唯一标识 */
  key: string
  /** 内容 */
  content: ReactNode
}

export interface CarouselProps {
  /** 轮播项 */
  items?: CarouselItem[]
  /** 是否自动播放 */
  autoplay?: boolean
  /** 自动播放间隔（ms） */
  interval?: number
  /** 是否显示指示器 */
  dots?: boolean
  /** 是否显示左右箭头 */
  arrows?: boolean
  /** 当前索引变化回调 */
  onChange?: (index: number) => void
  /** 高度（px） */
  height?: number
  /** 外层容器类名 */
  className?: string
}
