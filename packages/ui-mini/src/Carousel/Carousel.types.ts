import type { ReactNode } from 'react'

export interface CarouselItem {
  key: string
  content: ReactNode
}

export interface CarouselProps {
  items?: CarouselItem[]
  autoplay?: boolean
  interval?: number
  dots?: boolean
  arrows?: boolean
  onChange?: (index: number) => void
  height?: number
  className?: string
}
