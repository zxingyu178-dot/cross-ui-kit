/** LoadingBar 示例：顶部进度条（native）。 */
import { YStack } from 'tamagui'
import { LoadingBar } from '../index'

export function States() {
  return (
    <YStack padding={16}>
      <LoadingBar progress={40} visible />
    </YStack>
  )
}
