/** ColorPicker 示例：基础/自定义预设/禁用（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { ColorPicker } from '../index'

export function States() {
  const [c1, setC1] = useState('#2563eb')
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 224 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础（当前：{c1}）
        </Text>
        <ColorPicker value={c1} onChange={setC1} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 224 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用</Text>
        <ColorPicker defaultValue="#2563eb" disabled />
      </View>
    </View>
  )
}
