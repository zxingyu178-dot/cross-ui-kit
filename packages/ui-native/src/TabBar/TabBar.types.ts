import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface TabBarItem {
  key: string
  label: ReactNode
  icon?: ReactNode
  badge?: ReactNode
}

export interface TabBarProps {
  items: TabBarItem[]
  activeKey?: string
  defaultActiveKey?: string
  onChange?: (key: string) => void
  style?: ViewStyle
}
