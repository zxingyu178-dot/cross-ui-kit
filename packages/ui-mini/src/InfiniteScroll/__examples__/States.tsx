/** InfiniteScroll 示例：无限滚动（mini）。 */
import { View } from '@tarojs/components'
import { InfiniteScroll } from '../index'
import { Cell } from '../../Cell'

export function States() {
  return (
    <InfiniteScroll
      onLoadMore={async () => {
        await new Promise((r) => setTimeout(r, 600))
      }}
      hasMore={false}
    >
      <View>
        <Cell title="列表项 1" />
        <Cell title="列表项 2" />
      </View>
    </InfiniteScroll>
  )
}
