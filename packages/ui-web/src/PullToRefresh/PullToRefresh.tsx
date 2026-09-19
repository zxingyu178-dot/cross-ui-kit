/**
 * PullToRefresh 下拉刷新（web）—— Pointer 触摸实现，下拉超过阈值触发 onRefresh。
 */
import { useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { PullToRefreshProps } from './PullToRefresh.types'

const THRESHOLD = 60
const MAX_PULL = 100

export function PullToRefresh({
  children,
  onRefresh,
  refreshing = false,
  pullText = '下拉刷新',
  releaseText = '释放立即刷新',
  loadingText = '加载中...',
  doneText = '刷新成功',
  className,
}: PullToRefreshProps) {
  const [pull, setPull] = useState(0)
  const startY = useRef(0)
  const dragging = useRef(false)
  const scrolled = useRef(false)

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (refreshing) return
    startY.current = e.clientY
    dragging.current = true
    scrolled.current = (e.currentTarget as HTMLDivElement).scrollTop > 0
  }
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || refreshing || scrolled.current) return
    const dy = e.clientY - startY.current
    if (dy < 0) return
    setPull(Math.min(MAX_PULL, dy * 0.5))
  }
  const onPointerUp = async () => {
    dragging.current = false
    if (pull > THRESHOLD && onRefresh) {
      setPull(THRESHOLD)
      await onRefresh()
      setPull(0)
    } else {
      setPull(0)
    }
  }

  const label = refreshing
    ? loadingText
    : pull > THRESHOLD
      ? releaseText
      : pull > 0
        ? pullText
        : doneText

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        className="flex items-center justify-center overflow-hidden text-caption text-text-tertiary transition-[height]"
        style={{
          height: refreshing ? 40 : pull,
          transitionDuration: dragging.current ? '0ms' : '200ms',
        }}
      >
        {label}
      </div>
      <div>{children}</div>
    </div>
  )
}
