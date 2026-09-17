import type { ReactNode } from 'react'

export type SegmentedSize = 'sm' | 'md' | 'lg'

export interface SegmentedOption {
  label: ReactNode
  value: string
  disabled?: boolean
}

export interface SegmentedProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  options: SegmentedOption[]
  size?: SegmentedSize
  disabled?: boolean
  className?: string
}
