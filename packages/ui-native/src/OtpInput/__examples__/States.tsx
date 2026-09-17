/** OtpInput 示例：6 位验证码（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { OtpInput } from '../index'

export function States() {
  const [value, setValue] = useState('')
  return (
    <YStack padding={12} gap={24}>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          6 位验证码
        </Text>
        <OtpInput value={value} onChange={setValue} length={6} />
        {value.length === 6 ? (
          <Text fontSize={12} color="$successDefault">
            验证码已输入完成：{value}
          </Text>
        ) : null}
      </YStack>
      <YStack gap={8}>
        <Text fontSize={12} color="$textTertiary">
          禁用状态
        </Text>
        <OtpInput value="123456" length={6} disabled />
      </YStack>
    </YStack>
  )
}
