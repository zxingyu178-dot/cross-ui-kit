/** Segmented 示例：基础/含禁用项/尺寸（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Segmented } from '../index'

export function States() {
  const [mode, setMode] = useState('day')
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>基础（受控）</Text>
        <Segmented
          value={mode}
          onChange={setMode}
          options={[
            { label: '日', value: 'day' },
            { label: '周', value: 'week' },
            { label: '月', value: 'month' },
          ]}
        />
        <Text style={{ fontSize: 13, color: 'var(--kit-color-text-secondary)' }}>当前：{mode}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>含禁用项</Text>
        <Segmented
          defaultValue="list"
          options={[
            { label: '列表', value: 'list' },
            { label: '网格', value: 'grid' },
            { label: '看板', value: 'board', disabled: true },
          ]}
        />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          尺寸 / 整体禁用
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
          <Segmented
            size="sm"
            defaultValue="a"
            options={[
              { label: '小', value: 'a' },
              { label: '中', value: 'b' },
            ]}
          />
          <Segmented
            size="md"
            defaultValue="a"
            options={[
              { label: '中', value: 'a' },
              { label: '大', value: 'b' },
            ]}
          />
          <Segmented
            disabled
            defaultValue="a"
            options={[
              { label: '禁用', value: 'a' },
              { label: '项', value: 'b' },
            ]}
          />
        </View>
      </View>
    </View>
  )
}
