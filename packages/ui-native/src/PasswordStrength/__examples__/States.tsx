/** PasswordStrength 示例：密码强度指示器（native）。 */
import { useState } from 'react'
import { Input, Text, YStack } from 'tamagui'
import { PasswordStrength } from '../index'

export function States() {
  const [password, setPassword] = useState('')
  return (
    <YStack padding={12} gap={8} maxWidth={400}>
      <Text fontSize={12} color="$textTertiary">
        密码强度指示器（输入测试）
      </Text>
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="请输入密码"
        secureTextEntry
        height={36}
        paddingHorizontal={12}
        fontSize="$bodySm"
        color="$textPrimary"
        placeholderTextColor="$textTertiary"
        backgroundColor="$bgCard"
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius="$md"
      />
      <PasswordStrength value={password} minLength={8} />
    </YStack>
  )
}
