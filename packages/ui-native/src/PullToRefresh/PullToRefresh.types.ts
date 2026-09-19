import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface PullToRefreshProps {
  children: ReactNode
  onRefresh?: () => Promise<void> | void
  refreshing?: boolean
  pullText?: string
  releaseText?: string
  loadingText?: string
  doneText?: string
  style?: ViewStyle
}
