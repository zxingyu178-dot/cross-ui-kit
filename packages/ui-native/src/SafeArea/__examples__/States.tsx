/** SafeArea 示例：安全区（native）。 */
import { YStack } from 'tamagui'
import { SafeArea } from '../index'

export function States() {
  return (
    <SafeArea position="bottom">
      <YStack padding={12} backgroundColor="#f1f5f9" borderRadius={8}>
        底部安全区占位
      </YStack>
    </SafeArea>
  )
}
