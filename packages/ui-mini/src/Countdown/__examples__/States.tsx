/** Countdown 示例：基础倒计时（mini）。 */
import { Text, View } from '@tarojs/components'
import { Countdown } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础倒计时（1 分钟）
        </Text>
        <Countdown value={60000} format="mm:ss" />
      </View>
    </View>
  )
}
