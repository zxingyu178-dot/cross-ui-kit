/** Trend 示例：趋势指示器（native）。 */
import { Text, XStack, YStack } from 'tamagui'
import { Trend } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          默认（涨红跌绿）
        </Text>
        <XStack gap={24}>
          <Trend direction="up" value="12.5%" />
          <Trend direction="down" value="3.2%" />
        </XStack>
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          反转（涨绿跌红）
        </Text>
        <XStack gap={24}>
          <Trend direction="up" value="8.8%" inverted />
          <Trend direction="down" value="1.4%" inverted />
        </XStack>
      </YStack>
    </YStack>
  )
}
