import type { ReactNode } from 'react'

export interface PullToRefreshProps {
  children: ReactNode
  onRefresh?: () => Promise<void> | void
  refreshing?: boolean
  pullText?: string
  releaseText?: string
  loadingText?: string
  doneText?: string
  className?: string
}
