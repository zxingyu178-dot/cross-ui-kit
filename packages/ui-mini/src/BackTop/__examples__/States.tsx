/** BackTop 示例（mini）。 */
import { Text, View } from '@tarojs/components'
import { BackTop } from '../index'

export function States() {
  return (
    <View style={{ padding: 12 }}>
      <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
        向下滚动页面后，右下角会出现回到顶部按钮
      </Text>
      <BackTop visibilityHeight={200} />
    </View>
  )
}
