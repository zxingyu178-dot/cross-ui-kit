/** Badge 示例：soft/solid/outline 三形态 × 六语义色、两种尺寸、可点击（mini）。 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import { Badge } from '../index'
import type { BadgeTone, BadgeVariant } from '../Badge.types'

const VARIANTS: BadgeVariant[] = ['primary', 'success', 'warning', 'danger', 'info', 'neutral']
const LABEL: Record<BadgeVariant, string> = {
  primary: '主要',
  success: '成功',
  warning: '警告',
  danger: '危险',
  info: '信息',
  neutral: '中性',
}
const TONES: BadgeTone[] = ['soft', 'solid', 'outline']

export function States() {
  const [count, setCount] = useState(0)
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 12 }}>
      {TONES.map((tone) => (
        <View key={tone} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Text style={{ fontSize: 12 }}>{tone}</Text>
          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {VARIANTS.map((v) => (
              <Badge key={v} variant={v} tone={tone}>
                {LABEL[v]}
              </Badge>
            ))}
          </View>
        </View>
      ))}

      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12 }}>尺寸</Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
          <Badge size="md" variant="primary">
            md 标签
          </Badge>
          <Badge size="sm" variant="success">
            sm 标签
          </Badge>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12 }}>可点击</Text>
        <Badge variant="primary" tone="solid" onClick={() => setCount((c) => c + 1)}>
          点我 {count}
        </Badge>
      </View>
    </View>
  )
}
