/** Image 示例：基础/圆形（native）。 */
import { Text, YStack } from 'tamagui'
import { Image } from '../index'

export function States() {
  return (
    <YStack flexDirection="row" flexWrap="wrap" gap={16} padding={12}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础
        </Text>
        <Image src="https://picsum.photos/200/150" width={200} height={150} radius={8} />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          圆形
        </Text>
        <Image src="https://picsum.photos/120" width={120} height={120} radius={60} />
      </YStack>
    </YStack>
  )
}
