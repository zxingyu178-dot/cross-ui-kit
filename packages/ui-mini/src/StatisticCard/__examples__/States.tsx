/** StatisticCard 示例：基础统计卡片（mini）。 */
import { Text, View } from '@tarojs/components'
import { StatisticCard } from '../index'

export function States() {
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础统计卡片</Text>
        <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
          <View style={{ width: 'calc(50% - 6px)' }}>
            <StatisticCard
              title="总销售额"
              value="126,560"
              prefix="¥"
              trend="up"
              trendValue="12.5%"
            />
          </View>
          <View style={{ width: 'calc(50% - 6px)' }}>
            <StatisticCard title="访问量" value="8,846" trend="up" trendValue="8.2%" />
          </View>
        </View>
      </View>
    </View>
  )
}
