import type { ReactNode } from 'react'

export interface AffixProps {
  offsetTop?: number
  offsetBottom?: number
  onChange?: (affixed: boolean) => void
  children?: ReactNode
  className?: string
}
