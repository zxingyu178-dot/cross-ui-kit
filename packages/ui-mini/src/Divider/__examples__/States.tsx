/** Divider 示例：三线型、带文字、垂直（mini）。 */
import { Text, View } from '@tarojs/components'
import { Divider } from '../index'

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          solid / dashed / dotted
        </Text>
        <Divider type="solid" />
        <Divider type="dashed" />
        <Divider type="dotted" />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>带文字</Text>
        <Divider text="左侧文字" textPosition="left" />
        <Divider text="或者" textPosition="center" />
        <Divider text="右侧文字" textPosition="right" />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>垂直方向</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
            height: 40,
          }}
        >
          <Text style={{ fontSize: 14 }}>左侧</Text>
          <Divider orientation="vertical" />
          <Text style={{ fontSize: 14 }}>右侧</Text>
          <Divider orientation="vertical" type="dashed" />
          <Text style={{ fontSize: 14 }}>末尾</Text>
        </View>
      </View>
    </View>
  )
}
