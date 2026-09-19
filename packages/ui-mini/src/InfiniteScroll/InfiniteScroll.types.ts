import type { ReactNode } from 'react'

export interface InfiniteScrollProps {
  children: ReactNode
  onLoadMore?: () => Promise<void> | void
  hasMore?: boolean
  loadingText?: string
  noMoreText?: string
  threshold?: number
  className?: string
}
