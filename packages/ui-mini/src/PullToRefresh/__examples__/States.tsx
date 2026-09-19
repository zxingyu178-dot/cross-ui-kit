/** PullToRefresh 示例：下拉刷新（mini）。 */
import { View } from '@tarojs/components'
import { PullToRefresh } from '../index'
import { Cell } from '../../Cell'

export function States() {
  return (
    <PullToRefresh
      onRefresh={async () => {
        await new Promise((r) => setTimeout(r, 800))
      }}
    >
      <View>
        <Cell title="下拉试试" />
        <Cell title="列表项 1" />
      </View>
    </PullToRefresh>
  )
}
