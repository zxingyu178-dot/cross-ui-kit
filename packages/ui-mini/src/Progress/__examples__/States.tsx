/** Progress 示例：基础、语义色、尺寸、百分比、自定义 max（mini）。 */
import type { ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import { Progress } from '../index'

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Text
        style={{
          color: 'var(--kit-color-text-tertiary)',
          fontSize: 'var(--kit-font-size-caption)',
        }}
      >
        {label}
      </Text>
      {children}
    </View>
  )
}

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px' }}>
      <Row label="基础（primary，0 / 35 / 72 / 100）">
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Progress value={0} />
          <Progress value={35} />
          <Progress value={72} />
          <Progress value={100} />
        </View>
      </Row>

      <Row label="语义色调（success / warning / danger，均 60%）">
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Progress value={60} tone="success" />
          <Progress value={60} tone="warning" />
          <Progress value={60} tone="danger" />
        </View>
      </Row>

      <Row label="尺寸（sm 4px / md 8px，均 45%）">
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Progress value={45} size="sm" />
          <Progress value={45} size="md" />
        </View>
      </Row>

      <Row label="显示百分比（showLabel）">
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Progress value={28} showLabel />
          <Progress value={86} tone="success" showLabel />
        </View>
      </Row>

      <Row label="自定义 max（max=200，value=130 → 65%）">
        <Progress value={130} max={200} showLabel />
      </Row>
    </View>
  )
}
