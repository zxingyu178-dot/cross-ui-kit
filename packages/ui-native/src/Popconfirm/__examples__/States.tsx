/** Popconfirm 示例：删除/提交（native）。 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Popconfirm } from '../index'

export function States() {
  const [msg, setMsg] = useState('')
  return (
    <YStack padding={12} gap={16}>
      <XStack flexWrap="wrap" gap={12}>
        <Popconfirm
          title="确认删除？"
          description="删除后不可恢复"
          onConfirm={() => setMsg('已确认删除')}
          onCancel={() => setMsg('已取消')}
          trigger={
            <Text padding={8} backgroundColor="#ef4444" color="#fff" borderRadius={6} fontSize={14}>
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
              padding={8}
              backgroundColor="$primaryDefault"
              color="#fff"
              borderRadius={6}
              fontSize={14}
            >
              提交
            </Text>
          }
        />
      </XStack>
      {msg ? (
        <Text fontSize={13} color="$textTertiary">
          状态：{msg}
        </Text>
      ) : null}
    </YStack>
  )
}
