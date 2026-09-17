import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

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
  style?: ViewStyle
}
