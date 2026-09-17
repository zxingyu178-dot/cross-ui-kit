/** Calendar 示例：基础/非受控（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Calendar } from '../index'

export function States() {
  const [date, setDate] = useState(new Date())
  return (
    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础（选中：{date.toLocaleDateString()}）
        </Text>
        <Calendar value={date} onChange={setDate} />
      </View>
    </View>
  )
}
