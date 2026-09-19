/** SafeArea 示例：安全区（mini）。 */
import { View } from '@tarojs/components'
import { SafeArea } from '../index'

export function States() {
  return (
    <View style={{ padding: 16 }}>
      <SafeArea position="bottom">
        <View style={{ padding: 12, background: '#f1f5f9', borderRadius: 8 }}>底部安全区占位</View>
      </SafeArea>
    </View>
  )
}
