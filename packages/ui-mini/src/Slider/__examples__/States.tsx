/** Slider 示例：基础/范围/步长/禁用（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Slider } from '../index'

export function States() {
  const [v1, setV1] = useState(30)
  const [v2, setV2] = useState(50)
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础（当前 {v1}）
        </Text>
        <Slider value={v1} onChange={setV1} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          范围 0-10 / 步长 0.5（当前 {v2}）
        </Text>
        <Slider value={v2} onChange={setV2} min={0} max={10} step={0.5} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用</Text>
        <Slider defaultValue={60} disabled />
      </View>
    </View>
  )
}
