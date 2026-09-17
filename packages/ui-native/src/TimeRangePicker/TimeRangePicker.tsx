/**
 * TimeRangePicker 时间范围选择器（native：iOS / Android）—— 两个 Tamagui Input 框 + 连接符。
 */
import { useState } from 'react'
import { Input, Text, XStack } from 'tamagui'
import type { TimeRangePickerProps } from './TimeRangePicker.types'

export function TimeRangePicker({
  value,
  onChange,
  placeholder = ['开始时间', '结束时间'],
  disabled = false,
  separator = '至',
  style,
}: TimeRangePickerProps) {
  const [innerValue, setInnerValue] = useState<[string, string]>(['', ''])
  const currentValue = value ?? innerValue

  const handleStartChange = (val: string) => {
    const newValue: [string, string] = [val, currentValue[1]]
    if (value === undefined) setInnerValue(newValue)
    onChange?.(newValue)
  }

  const handleEndChange = (val: string) => {
    const newValue: [string, string] = [currentValue[0], val]
    if (value === undefined) setInnerValue(newValue)
    onChange?.(newValue)
  }

  return (
    <XStack width="100%" alignItems="center" gap={8} style={style}>
      <Input
        flex={1}
        height={36}
        paddingHorizontal={12}
        fontSize="$bodySm"
        color="$textPrimary"
        placeholder={placeholder[0]}
        placeholderTextColor="$textTertiary"
        value={currentValue[0]}
        onChangeText={handleStartChange}
        editable={!disabled}
        backgroundColor={disabled ? '$bgMuted' : '$bgCard'}
        opacity={disabled ? 0.5 : 1}
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius="$md"
      />
      <Text flexShrink={0} fontSize="$bodySm" color="$textTertiary">
        {separator}
      </Text>
      <Input
        flex={1}
        height={36}
        paddingHorizontal={12}
        fontSize="$bodySm"
        color="$textPrimary"
        placeholder={placeholder[1]}
        placeholderTextColor="$textTertiary"
        value={currentValue[1]}
        onChangeText={handleEndChange}
        editable={!disabled}
        backgroundColor={disabled ? '$bgMuted' : '$bgCard'}
        opacity={disabled ? 0.5 : 1}
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius="$md"
      />
    </XStack>
  )
}
