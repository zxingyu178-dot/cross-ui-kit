/** NavBar 示例：顶部导航栏（mini）。 */
import { View } from '@tarojs/components'
import { NavBar } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <NavBar title="详情" onBack={() => {}} />
      <NavBar title="订单" showBack={false} />
    </View>
  )
}
