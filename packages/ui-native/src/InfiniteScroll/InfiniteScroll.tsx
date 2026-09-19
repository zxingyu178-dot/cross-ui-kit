/**
 * InfiniteScroll 无限滚动（native：iOS / Android）—— 简化实现：底部状态。
 */
import { Text, YStack } from 'tamagui'
import type { InfiniteScrollProps } from './InfiniteScroll.types'

export function InfiniteScroll({
  children,
  hasMore = true,
  loadingText = '加载中...',
  noMoreText = '没有更多了',
  style,
}: InfiniteScrollProps) {
  return (
    <YStack style={style}>
      {children}
      <YStack paddingVertical={12} alignItems="center">
        <Text fontSize={13} color="$textTertiary">
          {hasMore ? loadingText : noMoreText}
        </Text>
      </YStack>
    </YStack>
  )
}
