/**
 * Search 搜索框（mini：小程序 / 移动 H5）—— Taro Input + 搜索按钮。
 */
import { Input, Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { SearchProps } from './Search.types'
import './Search.scss'

export function Search({
  value,
  onChange,
  placeholder = '请输入搜索关键词',
  disabled = false,
  onSearch,
  enterButton = true,
  enterButtonText = '搜索',
  className = '',
}: SearchProps) {
  const [innerValue, setInnerValue] = useState('')
  const currentValue = value ?? innerValue

  const handleInput = (e: { detail: { value: string } }) => {
    const val = e.detail.value
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  const handleSearch = () => {
    onSearch?.(currentValue)
  }

  return (
    <View className={`kit-search ${className}`.trim()}>
      <View className="kit-search__input-wrapper">
        <Text className="kit-search__icon">🔍</Text>
        <Input
          className="kit-search__native"
          value={currentValue}
          onInput={handleInput}
          placeholder={placeholder}
          disabled={disabled}
          confirmType="search"
          onConfirm={handleSearch}
        />
      </View>
      {enterButton ? (
        <View
          className={`kit-search__button ${disabled ? 'kit-search__button--disabled' : ''}`}
          onClick={handleSearch}
        >
          <Text className="kit-search__button-text">{enterButtonText}</Text>
        </View>
      ) : null}
    </View>
  )
}
