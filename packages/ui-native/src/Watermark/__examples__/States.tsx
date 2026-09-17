/** Watermark 示例：基础水印（native）。 */
import { Text, YStack } from 'tamagui'
import { Watermark } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础水印
        </Text>
        <Watermark text="机密文件">
          <YStack
            height={128}
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius={6}
            padding={16}
            backgroundColor="$bgCard"
          >
            <Text fontSize={14} color="$textPrimary">
              这是一段需要加水印的内容。
            </Text>
          </YStack>
        </Watermark>
      </YStack>
    </YStack>
  )
}
