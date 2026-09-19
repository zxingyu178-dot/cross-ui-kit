/** LoadingBar 示例：顶部进度条（mini）。 */
import { View } from '@tarojs/components'
import { LoadingBar } from '../index'

export function States() {
  return (
    <View style={{ padding: 16 }}>
      <LoadingBar progress={40} visible />
    </View>
  )
}
