/**
 * InputPassword 密码输入框（native：iOS / Android）—— Tamagui Input secureTextEntry + 切换按钮。
 */
import { useState } from 'react'
import { Input, Text, XStack } from 'tamagui'
import type { InputPasswordProps } from './InputPassword.types'

export function InputPassword({
  value,
  onChange,
  placeholder = '请输入密码',
  disabled = false,
  visibilityToggle = true,
  style,
}: InputPasswordProps) {
  const [innerValue, setInnerValue] = useState('')
  const [visible, setVisible] = useState(false)
  const currentValue = value ?? innerValue

  const handleChange = (val: string) => {
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  return (
    <XStack width="100%" alignItems="center" position="relative" style={style}>
      <Input
        flex={1}
        height={36}
        paddingHorizontal={12}
        paddingRight={visibilityToggle ? 48 : 12}
        fontSize="$bodySm"
        color="$textPrimary"
        placeholder={placeholder}
        placeholderTextColor="$textTertiary"
        value={currentValue}
        onChangeText={handleChange}
        editable={!disabled}
        secureTextEntry={!visible}
        backgroundColor={disabled ? '$bgMuted' : '$bgCard'}
        opacity={disabled ? 0.5 : 1}
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius="$md"
      />
      {visibilityToggle ? (
        <Text
          position="absolute"
          right={8}
          fontSize="$caption"
          color="$textTertiary"
          paddingHorizontal={8}
          paddingVertical={4}
          onPress={() => setVisible((v) => !v)}
        >
          {visible ? '隐藏' : '显示'}
        </Text>
      ) : null}
    </XStack>
  )
}
