/** FloatButton 示例：基础悬浮按钮（mini）。 */
import { Text, View } from '@tarojs/components'
import { FloatButton } from '../index'

export function States() {
  return (
    <View style={{ position: 'relative', height: 192, padding: 12 }}>
      <View style={{ position: 'relative', height: 80, width: 80 }}>
        <FloatButton bottom={0} right={0} />
      </View>
      <View style={{ position: 'relative', height: 80, width: 80, marginTop: 12 }}>
        <FloatButton bottom={0} right={0} type="default" icon={<Text>⚙</Text>} />
      </View>
    </View>
  )
}
