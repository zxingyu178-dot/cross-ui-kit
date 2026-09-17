/** Affix 示例：顶部固钉（native）。 */
import { YStack } from 'tamagui'
import { Affix } from '../index'
import { Button } from '../../Button'

export function States() {
  return (
    <YStack padding={12} height={200}>
      <Affix offsetTop={20}>
        <Button size="sm">固定在顶部 20px</Button>
      </Affix>
    </YStack>
  )
}
