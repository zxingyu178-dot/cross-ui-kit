/**
 * TextArea 多行文本框（mini：小程序 / 移动 H5）—— Taro Textarea 组件，
 * 支持字数统计。
 */
import { Text, Textarea as TaroTextarea, View } from '@tarojs/components'
import { useState } from 'react'
import type { TextAreaProps } from './TextArea.types'
import './TextArea.scss'

export function TextArea({
  value,
  onChange,
  placeholder = '请输入',
  disabled = false,
  maxLength,
  showCount = false,
  className = '',
}: TextAreaProps) {
  const [innerValue, setInnerValue] = useState('')
  const currentValue = value ?? innerValue

  const handleInput = (e: { detail: { value: string } }) => {
    const val = e.detail.value
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  return (
    <View className={`kit-textarea ${className}`.trim()}>
      <TaroTextarea
        className={`kit-textarea__native ${disabled ? 'kit-textarea__native--disabled' : ''}`}
        value={currentValue}
        onInput={handleInput}
        placeholder={placeholder}
        disabled={disabled}
        {...(maxLength !== undefined ? { maxlength: maxLength } : {})}
      />
      {showCount ? (
        <View className="kit-textarea__count">
          <Text>
            {currentValue.length}
            {maxLength !== undefined ? `/${maxLength}` : ''}
          </Text>
        </View>
      ) : null}
    </View>
  )
}
