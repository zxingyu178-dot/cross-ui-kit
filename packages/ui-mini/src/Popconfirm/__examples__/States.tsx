/** Popconfirm 示例：删除/提交/上方（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Popconfirm } from '../index'

export function States() {
  const [msg, setMsg] = useState('')
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
        <Popconfirm
          title="确认删除？"
          description="删除后不可恢复"
          onConfirm={() => setMsg('已确认删除')}
          onCancel={() => setMsg('已取消')}
          trigger={
            <Text
              style={{
                padding: '8px 16px',
                backgroundColor: '#ef4444',
                color: '#fff',
                borderRadius: 6,
                fontSize: 14,
              }}
            >
              删除
            </Text>
          }
        />
        <Popconfirm
          title="确认提交？"
          onConfirm={() => setMsg('已确认提交')}
          okText="提交"
          trigger={
            <Text
              style={{
                padding: '8px 16px',
                backgroundColor: 'var(--kit-color-primary-default)',
                color: '#fff',
                borderRadius: 6,
                fontSize: 14,
              }}
            >
              提交
            </Text>
          }
        />
      </View>
      {msg ? (
        <Text style={{ fontSize: 13, color: 'var(--kit-color-text-tertiary)' }}>状态：{msg}</Text>
      ) : null}
    </View>
  )
}
