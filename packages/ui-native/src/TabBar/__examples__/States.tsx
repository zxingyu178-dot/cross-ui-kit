/** TabBar 示例：底部标签栏（native）。 */
import { YStack } from 'tamagui'
import { TabBar } from '../index'

export function States() {
  return (
    <YStack gap={16}>
      <TabBar
        items={[
          { key: 'home', label: '首页' },
          { key: 'order', label: '订单' },
          { key: 'me', label: '我的', badge: 3 },
        ]}
        defaultActiveKey="home"
      />
    </YStack>
  )
}
