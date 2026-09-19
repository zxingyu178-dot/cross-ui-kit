import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export interface InfiniteScrollProps {
  children: ReactNode
  onLoadMore?: () => Promise<void> | void
  hasMore?: boolean
  loadingText?: string
  noMoreText?: string
  threshold?: number
  style?: ViewStyle
}
