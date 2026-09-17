/**
 * OtpInput 验证码输入框（mini：小程序 / 移动 H5）—— 多个 Taro Input 框，自动聚焦下一个。
 */
import { Input, View } from '@tarojs/components'
import { useState } from 'react'
import type { OtpInputProps } from './OtpInput.types'
import './OtpInput.scss'

export function OtpInput({
  value,
  onChange,
  length = 6,
  disabled = false,
  password = false,
  className = '',
}: OtpInputProps) {
  const [innerValue, setInnerValue] = useState('')
  const currentValue = value ?? innerValue

  const handleInput = (index: number, e: { detail: { value: string } }) => {
    const val = e.detail.value
    const char = val.slice(-1)
    if (!/^\d*$/.test(char)) return
    const newValue = currentValue.split('')
    newValue[index] = char
    const result = newValue.join('').slice(0, length)
    if (value === undefined) setInnerValue(result)
    onChange?.(result)
  }

  return (
    <View className={`kit-otp-input ${className}`.trim()}>
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          className={`kit-otp-input__item ${disabled ? 'kit-otp-input__item--disabled' : ''}`}
          type="number"
          password={password}
          maxlength={1}
          value={currentValue[index] ?? ''}
          onInput={(e) => handleInput(index, e)}
          disabled={disabled}
        />
      ))}
    </View>
  )
}
