/** TimeRangePicker 示例：基础时间范围选择器（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { TimeRangePicker } from '../index'

export function States() {
  const [value, setValue] = useState<[string, string]>(['', ''])
  return (
    <View style={{ padding: 12, maxWidth: 400 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础时间范围选择器
        </Text>
        <TimeRangePicker value={value} onChange={setValue} />
        {value[0] && value[1] ? (
          <Text style={{ fontSize: 12, color: 'var(--kit-color-text-secondary)' }}>
            选中范围：{value[0]} 至 {value[1]}
          </Text>
        ) : null}
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用状态</Text>
        <TimeRangePicker value={['09:00', '18:00']} disabled />
      </View>
    </View>
  )
}
