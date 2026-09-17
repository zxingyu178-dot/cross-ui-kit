/** OtpInput 示例：6 位验证码（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { OtpInput } from '../index'

export function States() {
  const [value, setValue] = useState('')
  return (
    <View style={{ padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>6 位验证码</Text>
        <OtpInput value={value} onChange={setValue} length={6} />
        {value.length === 6 ? (
          <Text style={{ fontSize: 12, color: 'var(--kit-color-success-default)' }}>
            验证码已输入完成：{value}
          </Text>
        ) : null}
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用状态</Text>
        <OtpInput value="123456" length={6} disabled />
      </View>
    </View>
  )
}
