/**
 * PullToRefresh 下拉刷新（mini：小程序 / 移动 H5）。
 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import type { PullToRefreshProps } from './PullToRefresh.types'
import './PullToRefresh.scss'

const THRESHOLD = 60

export function PullToRefresh({
  children,
  onRefresh,
  refreshing = false,
  pullText = '下拉刷新',
  releaseText = '释放立即刷新',
  loadingText = '加载中...',
  doneText = '刷新成功',
  className = '',
}: PullToRefreshProps) {
  const [pull, setPull] = useState(0)

  const label = refreshing
    ? loadingText
    : pull > THRESHOLD
      ? releaseText
      : pull > 0
        ? pullText
        : doneText

  return (
    <View
      className={`kit-refresh ${className}`.trim()}
      onTouchStart={(e) => {
        const ev = e as unknown as { touches: Array<{ clientY: number }> }
        const t = ev.touches[0]
        if (t) setPull(t.clientY)
      }}
      onTouchMove={(e) => {
        const ev = e as unknown as { touches: Array<{ clientY: number }> }
        const t = ev.touches[0]
        if (t) setPull(Math.min(100, t.clientY * 0.5))
      }}
      onTouchEnd={async () => {
        if (pull > THRESHOLD && onRefresh) {
          await onRefresh()
        }
        setPull(0)
      }}
    >
      <View className="kit-refresh__indicator" style={{ height: refreshing ? 40 : pull }}>
        <Text className="kit-refresh__text">{label}</Text>
      </View>
      <View className="kit-refresh__content">{children}</View>
    </View>
  )
}
