import type { ViewStyle } from 'react-native'

export interface AvatarGroupItem {
  key: string
  src?: string
  text?: string
  color?: string
}

export interface AvatarGroupProps {
  items?: AvatarGroupItem[]
  max?: number
  size?: number
  shape?: 'circle' | 'square'
  style?: ViewStyle
}
