/**
 * DateRangePicker 日期范围选择器（mini：小程序 / 移动 H5）—— 两个 Taro Input 框 + 连接符。
 */
import { Input, Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { DateRangePickerProps } from './DateRangePicker.types'
import './DateRangePicker.scss'

export function DateRangePicker({
  value,
  onChange,
  placeholder = ['开始日期', '结束日期'],
  disabled = false,
  separator = '至',
  className = '',
}: DateRangePickerProps) {
  const [innerValue, setInnerValue] = useState<[string, string]>(['', ''])
  const currentValue = value ?? innerValue

  const handleStartChange = (e: { detail: { value: string } }) => {
    const val = e.detail.value
    const newValue: [string, string] = [val, currentValue[1]]
    if (value === undefined) setInnerValue(newValue)
    onChange?.(newValue)
  }

  const handleEndChange = (e: { detail: { value: string } }) => {
    const val = e.detail.value
    const newValue: [string, string] = [currentValue[0], val]
    if (value === undefined) setInnerValue(newValue)
    onChange?.(newValue)
  }

  return (
    <View className={`kit-date-range-picker ${className}`.trim()}>
      <Input
        className={`kit-date-range-picker__input ${disabled ? 'kit-date-range-picker__input--disabled' : ''}`}
        value={currentValue[0]}
        onInput={handleStartChange}
        placeholder={placeholder[0]}
        disabled={disabled}
      />
      <Text className="kit-date-range-picker__separator">{separator}</Text>
      <Input
        className={`kit-date-range-picker__input ${disabled ? 'kit-date-range-picker__input--disabled' : ''}`}
        value={currentValue[1]}
        onInput={handleEndChange}
        placeholder={placeholder[1]}
        disabled={disabled}
      />
    </View>
  )
}
