/**
 * InfiniteScroll 无限滚动（web）—— 监听滚动到底部触发 onLoadMore。
 */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { InfiniteScrollProps } from './InfiniteScroll.types'

export function InfiniteScroll({
  children,
  onLoadMore,
  hasMore = true,
  loadingText = '加载中...',
  noMoreText = '没有更多了',
  threshold = 100,
  className,
}: InfiniteScrollProps) {
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !hasMore) return
    const onScroll = async () => {
      if (loading) return
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - threshold) {
        setLoading(true)
        await onLoadMore?.()
        setLoading(false)
      }
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [hasMore, loading, onLoadMore, threshold])

  return (
    <div ref={ref} className={cn('h-80 overflow-y-auto', className)}>
      {children}
      <div className="py-3 text-center text-bodySm text-text-tertiary">
        {loading ? loadingText : hasMore ? '' : noMoreText}
      </div>
    </div>
  )
}
