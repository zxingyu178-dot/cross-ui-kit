import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface CollapseItem {
  key: string
  title: ReactNode
  content: ReactNode
  disabled?: boolean
}

export interface CollapseProps {
  items: CollapseItem[]
  activeKey?: string | string[]
  defaultActiveKey?: string | string[]
  onChange?: (activeKey: string | string[]) => void
  accordion?: boolean
  style?: ViewStyle
}
