/**
 * AutoComplete 自动完成（native：iOS / Android）—— Tamagui XStack+YStack+Input 自建，
 * 受控优先，自定义过滤，点击选项关闭。
 */
import { useState } from 'react'
import { Input, Text, XStack, YStack } from 'tamagui'
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
  style,
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
    <XStack position="relative" style={style}>
      <YStack flex={1}>
        <Input
          value={current}
          onChangeText={(v) => {
            commit(v)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          editable={!disabled}
          placeholder={placeholder}
          placeholderTextColor="$textTertiary"
          height={40}
          paddingHorizontal={12}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          color="$textPrimary"
          fontSize="$bodyMd"
          opacity={disabled ? 0.5 : 1}
        />
        {open && filteredOptions.length > 0 ? (
          <YStack
            position="absolute"
            top="100%"
            left={0}
            right={0}
            marginTop={4}
            maxHeight={240}
            borderWidth={1}
            borderColor="$borderDefault"
            borderRadius="$md"
            backgroundColor="$bgCard"
            zIndex={100}
          >
            {filteredOptions.map((opt) => (
              <XStack
                key={opt.value}
                paddingHorizontal={12}
                paddingVertical={10}
                opacity={opt.disabled ? 0.4 : 1}
                onPress={() => handleSelect(opt)}
              >
                <Text fontSize="$bodySm" color="$textSecondary">
                  {opt.label}
                </Text>
              </XStack>
            ))}
          </YStack>
        ) : null}
      </YStack>
    </XStack>
  )
}
