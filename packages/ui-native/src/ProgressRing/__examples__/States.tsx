/** ProgressRing 示例：环形进度（native）。 */
import { YStack } from 'tamagui'
import { ProgressRing } from '../index'

export function States() {
  return (
    <YStack flexDirection="row" gap={16}>
      <ProgressRing value={65} tone="success" />
      <ProgressRing value={95} tone="danger" />
    </YStack>
  )
}
