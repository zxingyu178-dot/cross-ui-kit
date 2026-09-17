import type { ViewStyle } from 'react-native'

export interface PageHeaderProps {
  title: string
  subTitle?: string
  breadcrumb?: string
  extra?: string
  footer?: string
  style?: ViewStyle
}
