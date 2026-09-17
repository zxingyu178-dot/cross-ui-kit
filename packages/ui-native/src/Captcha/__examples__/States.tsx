/** Captcha 示例：基础验证码输入框（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { Captcha } from '../index'

export function States() {
  const [code, setCode] = useState('')
  return (
    <YStack padding={12} gap={24} maxWidth={400}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          基础验证码输入框
        </Text>
        <Captcha
          value={code}
          onChange={setCode}
          onSend={() => console.log('发送验证码')}
          countdown={10}
        />
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          禁用状态
        </Text>
        <Captcha value="123456" disabled />
      </YStack>
    </YStack>
  )
}
