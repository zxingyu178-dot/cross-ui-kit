/**
 * InfiniteScroll 无限滚动（mini：小程序 / 移动 H5）。
 */
import { useState } from 'react'
import { ScrollView, Text, View } from '@tarojs/components'
import type { InfiniteScrollProps } from './InfiniteScroll.types'
import './InfiniteScroll.scss'

export function InfiniteScroll({
  children,
  onLoadMore,
  hasMore = true,
  loadingText = '加载中...',
  noMoreText = '没有更多了',
  className = '',
}: InfiniteScrollProps) {
  const [loading, setLoading] = useState(false)

  return (
    <ScrollView
      className={`kit-infinite ${className}`.trim()}
      scrollY
      onScrollToLower={async () => {
        if (loading || !hasMore) return
        setLoading(true)
        await onLoadMore?.()
        setLoading(false)
      }}
    >
      <View className="kit-infinite__content">{children}</View>
      <View className="kit-infinite__footer">
        <Text className="kit-infinite__text">
          {loading ? loadingText : hasMore ? '' : noMoreText}
        </Text>
      </View>
    </ScrollView>
  )
}
