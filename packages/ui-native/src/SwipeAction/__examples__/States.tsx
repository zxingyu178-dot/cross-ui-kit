/** SwipeAction 示例：滑动操作（native）。 */
import { YStack } from 'tamagui'
import { SwipeAction } from '../index'
import { Cell } from '../../Cell'

export function States() {
  return (
    <YStack gap={8}>
      <SwipeAction
        actions={[
          { key: 'edit', label: '编辑' },
          { key: 'del', label: '删除', danger: true },
        ]}
      >
        <Cell title="订单 #12345" />
      </SwipeAction>
    </YStack>
  )
}
