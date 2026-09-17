/**
 * OtpInput 验证码输入框（native：iOS / Android）—— 多个 Tamagui Input 框。
 */
import { useState } from 'react'
import { Input, XStack } from 'tamagui'
import type { OtpInputProps } from './OtpInput.types'

export function OtpInput({
  value,
  onChange,
  length = 6,
  disabled = false,
  password = false,
  style,
}: OtpInputProps) {
  const [innerValue, setInnerValue] = useState('')
  const currentValue = value ?? innerValue

  const handleChange = (index: number, val: string) => {
    const char = val.slice(-1)
    if (!/^\d*$/.test(char)) return
    const newValue = currentValue.split('')
    newValue[index] = char
    const result = newValue.join('').slice(0, length)
    if (value === undefined) setInnerValue(result)
    onChange?.(result)
  }

  return (
    <XStack alignItems="center" gap={8} style={style}>
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          width={44}
          height={44}
          textAlign="center"
          fontSize="$titleSm"
          fontWeight="500"
          color="$textPrimary"
          value={currentValue[index] ?? ''}
          onChangeText={(val) => handleChange(index, val)}
          editable={!disabled}
          secureTextEntry={password}
          keyboardType="numeric"
          maxLength={1}
          backgroundColor={disabled ? '$bgMuted' : '$bgCard'}
          opacity={disabled ? 0.5 : 1}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          padding={0}
        />
      ))}
    </XStack>
  )
}
