import type { ViewStyle } from 'react-native'

export interface TagGroupItem {
  key: string
  label: string
  color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  closable?: boolean
}

export interface TagGroupProps {
  items?: TagGroupItem[]
  max?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'soft' | 'solid' | 'outline'
  onClose?: (key: string) => void
  style?: ViewStyle
}
