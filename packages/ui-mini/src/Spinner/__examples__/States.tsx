/** Spinner 示例：尺寸、色调、反白、带文字（mini）。 */
import type { ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import { Spinner } from '../index'

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
      <Row label="尺寸（sm 16 / md 24 / lg 32）">
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </View>
      </Row>

      <Row label="色调（primary / muted）">
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
          <Spinner tone="primary" />
          <Spinner tone="muted" />
        </View>
      </Row>

      <Row label="反白 inverse（主色底上）">
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
            alignSelf: 'flex-start',
            backgroundColor: 'var(--kit-color-primary-default)',
            borderRadius: 'var(--kit-radius-md)',
            padding: '8px 16px',
          }}
        >
          <Spinner size="sm" tone="inverse" />
          <Text style={{ color: '#ffffff', fontSize: 'var(--kit-font-size-body-sm)' }}>
            提交中…
          </Text>
        </View>
      </Row>

      <Row label="带文字（水平排列）">
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
          <Spinner size="sm" />
          <Text
            style={{
              color: 'var(--kit-color-text-secondary)',
              fontSize: 'var(--kit-font-size-body-sm)',
            }}
          >
            正在加载数据，请稍候
          </Text>
        </View>
      </Row>
    </View>
  )
}
