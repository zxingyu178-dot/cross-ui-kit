/** BackTop 示例（native）。 */
import { Text, YStack } from 'tamagui'
import { BackTop } from '../index'

export function States() {
  return (
    <YStack padding={12}>
      <Text fontSize={12} color="$textTertiary">
        向下滚动页面后，右下角会出现回到顶部按钮
      </Text>
      <BackTop visibilityHeight={200} />
    </YStack>
  )
}
