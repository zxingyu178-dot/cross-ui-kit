/**
 * TextArea 多行文本框（native：iOS / Android）—— Tamagui TextArea 组件，
 * 支持字数统计。
 */
import { useState } from 'react'
import { Text, TextArea as TamaguiTextArea, YStack } from 'tamagui'
import type { TextAreaProps } from './TextArea.types'

export function TextArea({
  value,
  onChange,
  placeholder = '请输入',
  disabled = false,
  rows = 3,
  maxLength,
  showCount = false,
  style,
}: TextAreaProps) {
  const [innerValue, setInnerValue] = useState('')
  const currentValue = value ?? innerValue

  const handleChange = (val: string) => {
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  return (
    <YStack width="100%" position="relative" style={style}>
      <TamaguiTextArea
        value={currentValue}
        onChangeText={handleChange}
        placeholder={placeholder}
        placeholderTextColor="$textTertiary"
        editable={!disabled}
        maxLength={maxLength}
        numberOfLines={rows}
        multiline
        fontSize="$bodySm"
        color="$textPrimary"
        backgroundColor={disabled ? '$bgMuted' : '$bgCard'}
        opacity={disabled ? 0.5 : 1}
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius="$md"
        paddingHorizontal={12}
        paddingVertical={8}
        paddingBottom={showCount ? 24 : 8}
      />
      {showCount ? (
        <Text position="absolute" bottom={8} right={12} fontSize="$caption" color="$textTertiary">
          {currentValue.length}
          {maxLength !== undefined ? `/${maxLength}` : ''}
        </Text>
      ) : null}
    </YStack>
  )
}
