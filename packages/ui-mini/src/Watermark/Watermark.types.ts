import type { ReactNode } from 'react'

export interface WatermarkProps {
  text?: string
  color?: string
  fontSize?: number
  rotate?: number
  gap?: number
  opacity?: number
  children?: ReactNode
  className?: string
}
