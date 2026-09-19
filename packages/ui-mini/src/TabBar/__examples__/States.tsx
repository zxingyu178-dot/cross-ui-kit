/** TabBar 示例：底部标签栏（mini）。 */
import { View } from '@tarojs/components'
import { TabBar } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <TabBar
        items={[
          { key: 'home', label: '首页' },
          { key: 'order', label: '订单' },
          { key: 'me', label: '我的', badge: 3 },
        ]}
        defaultActiveKey="home"
      />
    </View>
  )
}
