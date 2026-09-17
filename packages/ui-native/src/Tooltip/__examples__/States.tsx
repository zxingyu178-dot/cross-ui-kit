/** Tooltip 示例：四向 placement、长文本、禁用（native）。点击触发切换。 */
import { Text, XStack, YStack } from 'tamagui'
import { Button } from '../../Button'
import { Tooltip } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          四向 placement（点击切换）
        </Text>
        <XStack flexWrap="wrap" gap={12} alignItems="flex-end" paddingTop={24} paddingBottom={24}>
          <Tooltip content="顶部提示气泡" placement="top">
            <Button size="sm">Top</Button>
          </Tooltip>
          <Tooltip content="底部提示气泡" placement="bottom">
            <Button size="sm">Bottom</Button>
          </Tooltip>
          <Tooltip content="左侧提示气泡" placement="left">
            <Button size="sm">Left</Button>
          </Tooltip>
          <Tooltip content="右侧提示气泡" placement="right">
            <Button size="sm">Right</Button>
          </Tooltip>
        </XStack>
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          长文本 / 禁用
        </Text>
        <XStack flexWrap="wrap" gap={12} alignItems="flex-end" paddingTop={24}>
          <Tooltip content="这是一段较长的提示文本，用于测试气泡在长内容下的表现" placement="top">
            <Button size="sm" variant="secondary">
              长文本
            </Button>
          </Tooltip>
          <Tooltip content="此提示已禁用" disabled placement="top">
            <Button size="sm" variant="secondary" disabled>
              Disabled
            </Button>
          </Tooltip>
        </XStack>
      </YStack>
    </YStack>
  )
}
