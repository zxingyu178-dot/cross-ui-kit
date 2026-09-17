/** Countdown 示例：基础倒计时（native）。 */
import { Text, YStack } from 'tamagui'
import { Countdown } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础倒计时（1 分钟）
        </Text>
        <Countdown value={60000} format="mm:ss" />
      </YStack>
    </YStack>
  )
}
