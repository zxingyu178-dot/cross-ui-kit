/**
 * InputPassword 密码输入框（mini：小程序 / 移动 H5）—— Taro Input password 属性 + 切换按钮。
 */
import { Input, Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { InputPasswordProps } from './InputPassword.types'
import './InputPassword.scss'

export function InputPassword({
  value,
  onChange,
  placeholder = '请输入密码',
  disabled = false,
  visibilityToggle = true,
  className = '',
}: InputPasswordProps) {
  const [innerValue, setInnerValue] = useState('')
  const [visible, setVisible] = useState(false)
  const currentValue = value ?? innerValue

  const handleInput = (e: { detail: { value: string } }) => {
    const val = e.detail.value
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  return (
    <View className={`kit-input-password ${className}`.trim()}>
      <Input
        className={`kit-input-password__native ${disabled ? 'kit-input-password__native--disabled' : ''}`}
        password={!visible}
        value={currentValue}
        onInput={handleInput}
        placeholder={placeholder}
        disabled={disabled}
      />
      {visibilityToggle ? (
        <View className="kit-input-password__toggle" onClick={() => setVisible((v) => !v)}>
          <Text className="kit-input-password__toggle-text">{visible ? '隐藏' : '显示'}</Text>
        </View>
      ) : null}
    </View>
  )
}
