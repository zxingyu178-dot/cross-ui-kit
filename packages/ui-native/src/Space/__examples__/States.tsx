/** Space 示例：水平/垂直/自定义间距（native）。 */
import { YStack } from 'tamagui'
import { Space } from '../index'
import { Button } from '../../Button'

export function States() {
  return (
    <YStack padding={12} gap={24}>
      <Space size="md" direction="horizontal">
        <Button size="sm">按钮 1</Button>
        <Button size="sm">按钮 2</Button>
      </Space>
      <Space direction="vertical" size="sm">
        <Button size="sm">按钮 1</Button>
        <Button size="sm">按钮 2</Button>
        <Button size="sm">按钮 3</Button>
      </Space>
    </YStack>
  )
}
