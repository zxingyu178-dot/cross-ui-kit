/** InputPassword 示例：基础密码输入框（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { InputPassword } from '../index'

export function States() {
  const [value, setValue] = useState('')
  return (
    <View style={{ padding: 12, maxWidth: 320 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础密码输入框
        </Text>
        <InputPassword value={value} onChange={setValue} placeholder="请输入密码" />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用状态</Text>
        <InputPassword value="123456" disabled />
      </View>
    </View>
  )
}
