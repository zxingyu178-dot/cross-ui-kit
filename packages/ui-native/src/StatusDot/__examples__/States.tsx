/** StatusDot 示例：状态点（native）。 */
import { XStack, YStack } from 'tamagui'
import { StatusDot } from '../index'

export function States() {
  return (
    <YStack padding={12} gap={16}>
      <XStack gap={24}>
        <StatusDot tone="success" text="运行中" />
        <StatusDot tone="warning" text="待处理" />
        <StatusDot tone="danger" text="异常" />
      </XStack>
      <XStack gap={24}>
        <StatusDot tone="info" text="同步中" />
        <StatusDot tone="neutral" text="已停用" />
      </XStack>
    </YStack>
  )
}
