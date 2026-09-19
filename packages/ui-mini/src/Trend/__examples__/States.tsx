/** Trend 示例：趋势指示器（mini）。 */
import { Text, View } from '@tarojs/components'
import { Trend } from '../index'

export function States() {
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          默认（涨红跌绿）
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
          <Trend direction="up" value="12.5%" />
          <Trend direction="down" value="3.2%" />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          反转（涨绿跌红）
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
          <Trend direction="up" value="8.8%" inverted />
          <Trend direction="down" value="1.4%" inverted />
        </View>
      </View>
    </View>
  )
}
