/** ProgressRing 示例：环形进度（mini）。 */
import { View } from '@tarojs/components'
import { ProgressRing } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <ProgressRing value={65} tone="success">
        65%
      </ProgressRing>
      <ProgressRing value={95} tone="danger">
        95%
      </ProgressRing>
    </View>
  )
}
