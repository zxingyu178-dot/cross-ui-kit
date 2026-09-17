/** InputNumber 示例：基础/小数/受控/无按钮禁用尺寸（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { InputNumber } from '../index'

export function States() {
  const [v, setV] = useState<number | null>(1)
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础（min 0 / max 10）
        </Text>
        <InputNumber defaultValue={1} min={0} max={10} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          小数（precision 2 / step 0.1）
        </Text>
        <InputNumber defaultValue={3.14} precision={2} step={0.1} min={0} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          受控（当前：{v ?? 'null'}）
        </Text>
        <InputNumber value={v} onChange={setV} min={-5} max={5} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          无按钮 / 禁用 / 尺寸
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 12,
            alignItems: 'center',
          }}
        >
          <InputNumber controls={false} placeholder="请输入" />
          <InputNumber defaultValue={5} disabled />
          <InputNumber defaultValue={1} size="sm" />
        </View>
      </View>
    </View>
  )
}
