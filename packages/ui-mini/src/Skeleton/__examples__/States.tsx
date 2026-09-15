/** Skeleton 示例：rect/circle/text 与卡片、列表组合（mini）。 */
import type { ReactNode } from 'react'
import { View, Text } from '@tarojs/components'
import { Skeleton } from '../index'

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
      <Row label="矩形块 rect（默认高 16 / 覆盖宽高）">
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Skeleton />
          <Skeleton height={20} width="66%" />
          <Skeleton height={96} />
        </View>
      </Row>

      <Row label="圆形 circle（sm 24 / md 40 / lg 56）">
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
          <Skeleton variant="circle" size="sm" />
          <Skeleton variant="circle" size="md" />
          <Skeleton variant="circle" size="lg" />
        </View>
      </Row>

      <Row label="文本 text（多行，末行收窄 60%）">
        <View style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Skeleton variant="text" lines={3} />
          <Skeleton variant="text" lines={5} />
        </View>
      </Row>

      <Row label="组合：用户卡片加载态">
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
          <Skeleton variant="circle" size="md" />
          <View style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: '8px' }}>
            <Skeleton height={14} width="50%" />
            <Skeleton variant="text" lines={2} />
          </View>
        </View>
      </Row>

      <Row label="组合：列表项加载态">
        <View style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[0, 1, 2].map((i) => (
            <View
              key={i}
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px' }}
            >
              <Skeleton variant="circle" size="sm" />
              <View style={{ display: 'flex', flex: 1 }}>
                <Skeleton variant="text" lines={1} />
              </View>
            </View>
          ))}
        </View>
      </Row>
    </View>
  )
}
