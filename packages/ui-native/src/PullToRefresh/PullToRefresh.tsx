/**
 * PullToRefresh 下拉刷新（native：iOS / Android）—— 简化实现：顶部指示器随 refreshing 显示。
 */
import { Text, YStack } from 'tamagui'
import type { PullToRefreshProps } from './PullToRefresh.types'

export function PullToRefresh({
  children,
  refreshing = false,
  loadingText = '加载中...',
  doneText = '刷新成功',
  style,
}: PullToRefreshProps) {
  return (
    <YStack style={style}>
      <YStack
        height={refreshing ? 40 : 0}
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Text fontSize={12} color="$textTertiary">
          {refreshing ? loadingText : doneText}
        </Text>
      </YStack>
      <YStack>{children}</YStack>
    </YStack>
  )
}
