/**
 * AutoComplete 自动完成（mini：小程序 / 移动 H5）—— View+Input+下拉列表自建，
 * 受控优先，自定义过滤，点击外部关闭。
 */
import { Input, ScrollView, Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { AutoCompleteOption, AutoCompleteProps } from './AutoComplete.types'

function defaultFilter(inputValue: string, option: AutoCompleteOption): boolean {
  const label = typeof option.label === 'string' ? option.label : option.value
  return label.toLowerCase().includes(inputValue.toLowerCase())
}

export function AutoComplete({
  value,
  defaultValue = '',
  onChange,
  onSelect,
  options,
  placeholder,
  disabled = false,
  filterOption = defaultFilter,
  className = '',
}: AutoCompleteProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const current = isControlled ? value : inner

  const filteredOptions = current ? options.filter((opt) => filterOption(current, opt)) : options

  const commit = (v: string) => {
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  const handleSelect = (option: AutoCompleteOption) => {
    if (option.disabled) return
    commit(option.value)
    onSelect?.(option)
    setOpen(false)
  }

  return (
    <View className={`kit-autocomplete ${className}`.trim()}>
      <Input
        className="kit-autocomplete__input"
        value={current}
        onInput={(e) => {
          commit(e.detail.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        disabled={disabled}
        {...(placeholder !== undefined ? { placeholder } : {})}
        placeholderClass="kit-autocomplete__placeholder"
      />
      {open && filteredOptions.length > 0 ? (
        <ScrollView scrollY className="kit-autocomplete__dropdown">
          {filteredOptions.map((opt) => (
            <View
              key={opt.value}
              className={`kit-autocomplete__option ${opt.disabled ? 'kit-autocomplete__option--disabled' : ''}`}
              onClick={() => handleSelect(opt)}
            >
              <Text>{opt.label}</Text>
            </View>
          ))}
        </ScrollView>
      ) : null}
    </View>
  )
}
