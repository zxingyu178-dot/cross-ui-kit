/** Rate 示例：基础/半星/自定义/禁用（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Rate } from '../index'

export function States() {
  const [score, setScore] = useState(3)
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础（受控，当前 {score} 分）
        </Text>
        <Rate value={score} onChange={setScore} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          半星（allowHalf）
        </Text>
        <Rate defaultValue={3.5} allowHalf />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          自定义数量 / 字符 / 尺寸
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <Rate defaultValue={4} count={10} size="sm" />
          <Rate defaultValue={3} character="♥" />
          <Rate defaultValue={5} size="lg" character="▲" />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用</Text>
        <Rate defaultValue={4} disabled />
      </View>
    </View>
  )
}
