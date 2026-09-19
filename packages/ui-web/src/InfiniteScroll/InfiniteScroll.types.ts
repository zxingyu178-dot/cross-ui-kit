import type { ReactNode } from 'react'

export interface InfiniteScrollProps {
  children: ReactNode
  /** 加载更多回调 */
  onLoadMore?: () => Promise<void> | void
  /** 是否还有更多 */
  hasMore?: boolean
  /** 加载中文案 */
  loadingText?: string
  /** 没有更多文案 */
  noMoreText?: string
  /** 距底部多少 px 触发 */
  threshold?: number
  className?: string
}
