/** PasswordStrength 示例：密码强度指示器（mini）。 */
import { useState } from 'react'
import { Input, Text, View } from '@tarojs/components'
import { PasswordStrength } from '../index'

export function States() {
  const [password, setPassword] = useState('')
  return (
    <View style={{ padding: 12, maxWidth: 400 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          密码强度指示器（输入测试）
        </Text>
        <Input
          type="text"
          password
          value={password}
          onInput={(e) => setPassword(e.detail.value)}
          placeholder="请输入密码"
          style={{
            height: 36,
            padding: '0 12px',
            border: '1px solid var(--kit-color-border-default)',
            borderRadius: 8,
            backgroundColor: 'var(--kit-color-bg-card)',
            fontSize: 13,
            color: 'var(--kit-color-text-primary)',
          }}
        />
        <PasswordStrength value={password} minLength={8} />
      </View>
    </View>
  )
}
