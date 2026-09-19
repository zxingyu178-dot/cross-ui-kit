/** Backdrop 示例：遮罩层（native）。 */
import { YStack } from 'tamagui'
import { Backdrop } from '../index'

export function States() {
  return (
    <Backdrop open={false}>
      <YStack padding={24} backgroundColor="#fff" borderRadius={8}>
        内容
      </YStack>
    </Backdrop>
  )
}
