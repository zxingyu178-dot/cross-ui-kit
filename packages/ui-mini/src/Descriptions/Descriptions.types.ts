import type { ReactNode } from 'react'

export interface DescriptionsItem {
  label: ReactNode
  value: ReactNode
  span?: number
}

export type DescriptionsLayout = 'horizontal' | 'vertical'

export interface DescriptionsProps {
  title?: ReactNode
  items: DescriptionsItem[]
  column?: number
  bordered?: boolean
  layout?: DescriptionsLayout
  className?: string
}
