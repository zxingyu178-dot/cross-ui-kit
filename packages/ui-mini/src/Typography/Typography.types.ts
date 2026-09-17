import type { ReactNode } from 'react'

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption'

export interface TypographyProps {
  variant?: TypographyVariant
  color?: string
  ellipsis?: boolean
  bold?: boolean
  children?: ReactNode
  className?: string
}
