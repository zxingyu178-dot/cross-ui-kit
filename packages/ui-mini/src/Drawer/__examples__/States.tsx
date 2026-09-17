/** Drawer 示例：右侧/左侧/底部（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Drawer } from '../index'

export function States() {
  const [rightOpen, setRightOpen] = useState(false)
  const [leftOpen, setLeftOpen] = useState(false)
  return (
    <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 12, padding: 12 }}>
      <View
        style={{
          padding: '8px 16px',
          backgroundColor: 'var(--kit-color-primary-default)',
          borderRadius: 6,
        }}
        onClick={() => setRightOpen(true)}
      >
        <Text style={{ color: '#fff', fontSize: 14 }}>右侧抽屉</Text>
      </View>
      <View
        style={{
          padding: '8px 16px',
          border: '1px solid var(--kit-color-border-default)',
          borderRadius: 6,
        }}
        onClick={() => setLeftOpen(true)}
      >
        <Text style={{ color: 'var(--kit-color-text-primary)', fontSize: 14 }}>左侧抽屉</Text>
      </View>
      <Drawer open={rightOpen} onOpenChange={setRightOpen} title="右侧抽屉" placement="right">
        <Text style={{ fontSize: 13, color: 'var(--kit-color-text-secondary)' }}>
          这是从右侧滑出的抽屉内容。
        </Text>
      </Drawer>
      <Drawer
        open={leftOpen}
        onOpenChange={setLeftOpen}
        title="左侧抽屉"
        placement="left"
        size={280}
      >
        <Text style={{ fontSize: 13, color: 'var(--kit-color-text-secondary)' }}>
          这是从左侧滑出的抽屉，宽度 280px。
        </Text>
      </Drawer>
    </View>
  )
}
