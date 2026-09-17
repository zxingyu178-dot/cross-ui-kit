/** FloatButton 示例：基础悬浮按钮（native）。 */
import { Text, YStack } from 'tamagui'
import { FloatButton } from '../index'

export function States() {
  return (
    <YStack position="relative" height={192} padding={12}>
      <YStack position="relative" height={80} width={80}>
        <FloatButton bottom={0} right={0} />
      </YStack>
      <YStack position="relative" height={80} width={80} marginTop={12}>
        <FloatButton bottom={0} right={0} type="default" icon={<Text>⚙</Text>} />
      </YStack>
    </YStack>
  )
}
