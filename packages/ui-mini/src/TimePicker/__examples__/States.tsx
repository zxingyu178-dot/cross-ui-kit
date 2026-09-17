/** TimePicker 示例：时分秒/仅时分（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { TimePicker } from '../index'

export function States() {
  const [t1, setT1] = useState('')
  const [t2, setT2] = useState('14:30')
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 192 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          时分秒（当前：{t1 || '未选择'}）
        </Text>
        <TimePicker value={t1} onChange={setT1} format="HH:mm:ss" />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 160 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          仅时分（当前：{t2}）
        </Text>
        <TimePicker value={t2} onChange={setT2} format="HH:mm" />
      </View>
    </View>
  )
}
