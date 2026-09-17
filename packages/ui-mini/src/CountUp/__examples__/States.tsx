/** CountUp 示例：数字滚动（mini）。 */
import { Text, View } from '@tarojs/components'
import { CountUp } from '../index'

export function States() {
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础数字滚动</Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <CountUp value={12345} className="" />
            <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>整数</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <CountUp value={99.99} decimals={2} />
            <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>小数</Text>
          </View>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>带前缀后缀</Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 24 }}>
          <CountUp value={126560} prefix="¥" />
          <CountUp value={8846} suffix=" 次" />
        </View>
      </View>
    </View>
  )
}
