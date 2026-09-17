/** CountUp 示例：数字滚动（native）。 */
import { Text, XStack, YStack } from 'tamagui'
import { CountUp } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础数字滚动
        </Text>
        <XStack gap={24}>
          <YStack alignItems="center" gap={4}>
            <CountUp value={12345} fontSize={24} />
            <Text fontSize={12} color="$textTertiary">
              整数
            </Text>
          </YStack>
          <YStack alignItems="center" gap={4}>
            <CountUp value={99.99} decimals={2} fontSize={24} />
            <Text fontSize={12} color="$textTertiary">
              小数
            </Text>
          </YStack>
        </XStack>
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          带前缀后缀
        </Text>
        <XStack gap={24}>
          <CountUp value={126560} prefix="¥" fontSize={20} color="$primaryDefault" />
          <CountUp value={8846} suffix=" 次" fontSize={20} />
        </XStack>
      </YStack>
    </YStack>
  )
}
