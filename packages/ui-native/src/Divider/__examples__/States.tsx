/** Divider 示例：三线型、带文字、垂直（native）。 */
import { Text, XStack, YStack } from 'tamagui'
import { Divider } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={16}>
      <YStack gap={12}>
        <Text fontSize={12} color="$textTertiary">
          solid / dashed / dotted
        </Text>
        <Divider type="solid" />
        <Divider type="dashed" />
        <Divider type="dotted" />
      </YStack>
      <YStack gap={12}>
        <Text fontSize={12} color="$textTertiary">
          带文字
        </Text>
        <Divider text="左侧文字" textPosition="left" />
        <Divider text="或者" textPosition="center" />
        <Divider text="右侧文字" textPosition="right" />
      </YStack>
      <YStack gap={12}>
        <Text fontSize={12} color="$textTertiary">
          垂直方向
        </Text>
        <XStack alignItems="center" gap={16} height={40}>
          <Text fontSize={14}>左侧</Text>
          <Divider orientation="vertical" />
          <Text fontSize={14}>右侧</Text>
          <Divider orientation="vertical" type="dashed" />
          <Text fontSize={14}>末尾</Text>
        </XStack>
      </YStack>
    </YStack>
  )
}
