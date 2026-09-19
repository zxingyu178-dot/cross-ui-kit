/** SwipeAction 示例：滑动操作（mini）。 */
import { View } from '@tarojs/components'
import { SwipeAction } from '../index'
import { Cell } from '../../Cell'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <SwipeAction
        actions={[
          { key: 'edit', label: '编辑' },
          { key: 'del', label: '删除', danger: true },
        ]}
      >
        <Cell title="订单 #12345" />
      </SwipeAction>
    </View>
  )
}
