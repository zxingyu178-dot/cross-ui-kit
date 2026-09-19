/** Backdrop 示例：遮罩层（mini）。 */
import { View } from '@tarojs/components'
import { Backdrop } from '../index'

export function States() {
  return (
    <View style={{ padding: 16 }}>
      <Backdrop open={false}>
        <View style={{ padding: 24, background: '#fff', borderRadius: 8 }}>内容</View>
      </Backdrop>
    </View>
  )
}
