/** InputPassword 示例：基础密码输入框（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { InputPassword } from '../index'

export function States() {
  const [value, setValue] = useState('')
  return (
    <YStack padding={12} gap={24} maxWidth={320}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础密码输入框
        </Text>
        <InputPassword value={value} onChange={setValue} placeholder="请输入密码" />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          禁用状态
        </Text>
        <InputPassword value="123456" disabled />
      </YStack>
    </YStack>
  )
}
