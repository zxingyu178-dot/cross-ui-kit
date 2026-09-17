/** Captcha 示例：基础验证码输入框（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Captcha } from '../index'

export function States() {
  const [code, setCode] = useState('')
  return (
    <View style={{ padding: 12, maxWidth: 400 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          基础验证码输入框
        </Text>
        <Captcha value={code} onChange={setCode} onSend={() => {}} countdown={10} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>禁用状态</Text>
        <Captcha value="123456" disabled />
      </View>
    </View>
  )
}
