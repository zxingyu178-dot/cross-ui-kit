/**
 * Mentions 提及输入（mini：小程序 / 移动 H5）—— View+Text+Input 自建，
 * 输入框 + 弹出选项列表，输入 prefix 时触发。
 */
import { Input, Text, View } from '@tarojs/components'
import { useMemo, useState } from 'react'
import type { MentionOption, MentionsProps } from './Mentions.types'
import './Mentions.scss'

export function Mentions({
  value,
  onChange,
  options = [],
  prefix = '@',
  placeholder = '请输入',
  disabled = false,
  allowClear = true,
  onSelect,
  className = '',
}: MentionsProps) {
  const [innerValue, setInnerValue] = useState('')
  const [open, setOpen] = useState(false)
  const [searchText, setSearchText] = useState('')

  const currentValue = value ?? innerValue

  const filteredOptions = useMemo(() => {
    if (!searchText) return options
    return options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(searchText.toLowerCase()) ||
        opt.key.toLowerCase().includes(searchText.toLowerCase()),
    )
  }, [options, searchText])

  const handleInput = (val: string) => {
    if (value === undefined) setInnerValue(val)
    onChange?.(val)

    const lastChar = val.slice(-1)
    if (lastChar === prefix) {
      setSearchText('')
      setOpen(true)
    } else if (open) {
      const prefixIndex = val.lastIndexOf(prefix)
      if (prefixIndex >= 0) {
        const afterPrefix = val.slice(prefixIndex + 1)
        if (!afterPrefix.includes(' ')) {
          setSearchText(afterPrefix)
        } else {
          setOpen(false)
        }
      } else {
        setOpen(false)
      }
    }
  }

  const handleSelect = (option: MentionOption) => {
    const prefixIndex = currentValue.lastIndexOf(prefix)
    const newValue = currentValue.slice(0, prefixIndex) + prefix + option.label + ' '
    if (value === undefined) setInnerValue(newValue)
    onChange?.(newValue)
    setOpen(false)
    setSearchText('')
    onSelect?.(option)
  }

  const handleClear = () => {
    if (value === undefined) setInnerValue('')
    onChange?.('')
    setOpen(false)
  }

  return (
    <View className={`kit-mentions ${className}`.trim()}>
      <View
        className={`kit-mentions__input ${disabled ? 'kit-mentions__input--disabled' : ''} ${open ? 'kit-mentions__input--focus' : ''}`}
      >
        <Input
          className="kit-mentions__native-input"
          value={currentValue}
          onInput={(e) => handleInput(e.detail.value)}
          placeholder={placeholder}
          disabled={disabled}
        />
        {allowClear && currentValue && !disabled ? (
          <Text className="kit-mentions__clear" onClick={handleClear}>
            ×
          </Text>
        ) : null}
      </View>

      {open && filteredOptions.length > 0 ? (
        <View className="kit-mentions__dropdown">
          {filteredOptions.map((option) => (
            <View
              key={option.key}
              className="kit-mentions__option"
              onClick={() => handleSelect(option)}
            >
              <View className="kit-mentions__avatar">
                <Text className="kit-mentions__avatar-text">{option.label.charAt(0)}</Text>
              </View>
              <View className="kit-mentions__option-content">
                <Text className="kit-mentions__option-label">{option.label}</Text>
                {option.description ? (
                  <Text className="kit-mentions__option-desc">{option.description}</Text>
                ) : null}
              </View>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  )
}
