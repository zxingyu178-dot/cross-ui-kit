/** Button 示例：变体与状态（native，iOS/Android 模拟器与真机查看）。 */
import { YStack } from 'tamagui'
import { Button } from '../index'

export function Variants() {
  return (
    <YStack gap={12} padding={16} width={280}>
      <Button variant="primary">主要</Button>
      <Button variant="secondary">次要</Button>
      <Button variant="ghost">幽灵</Button>
      <Button variant="danger">危险</Button>
      <Button variant="link">链接</Button>
      <Button size="sm">小号</Button>
      <Button loading accessibilityLabel="提交中">
        提交中
      </Button>
      <Button disabled>已禁用</Button>
      <Button block>撑满宽度</Button>
    </YStack>
  )
}
