/** StatusDot 示例：状态点（mini）。 */
import { View } from '@tarojs/components'
import { StatusDot } from '../index'

export function States() {
  return (
    <View style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <StatusDot tone="success" text="运行中" />
        <StatusDot tone="warning" text="待处理" />
        <StatusDot tone="danger" text="异常" />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
        <StatusDot tone="info" text="同步中" />
        <StatusDot tone="neutral" text="已停用" />
      </View>
    </View>
  )
}
