/**
 * Search 搜索框（native：iOS / Android）—— Tamagui Input + 搜索按钮。
 */
import { useState } from 'react'
import { Input, Text, XStack, YStack } from 'tamagui'
import type { SearchProps } from './Search.types'

export function Search({
  value,
  onChange,
  placeholder = '请输入搜索关键词',
  disabled = false,
  onSearch,
  enterButton = true,
  enterButtonText = '搜索',
  style,
}: SearchProps) {
  const [innerValue, setInnerValue] = useState('')
  const currentValue = value ?? innerValue

  const handleChange = (val: string) => {
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  const handleSearch = () => {
    onSearch?.(currentValue)
  }

  return (
    <XStack width="100%" alignItems="center" gap={8} style={style}>
      <XStack flex={1} alignItems="center" position="relative">
        <Text position="absolute" left={10} fontSize={14} color="$textTertiary" zIndex={1}>
          🔍
        </Text>
        <Input
          flex={1}
          height={36}
          paddingHorizontal={12}
          paddingLeft={36}
          fontSize="$bodySm"
          color="$textPrimary"
          placeholder={placeholder}
          placeholderTextColor="$textTertiary"
          value={currentValue}
          onChangeText={handleChange}
          editable={!disabled}
          backgroundColor={disabled ? '$bgMuted' : '$bgCard'}
          opacity={disabled ? 0.5 : 1}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
      </XStack>
      {enterButton ? (
        <YStack
          flexShrink={0}
          height={36}
          paddingHorizontal={16}
          alignItems="center"
          justifyContent="center"
          borderRadius="$md"
          backgroundColor="$primaryDefault"
          opacity={disabled ? 0.5 : 1}
          onPress={handleSearch}
        >
          <Text fontSize="$bodySm" fontWeight="500" color="#fff">
            {enterButtonText}
          </Text>
        </YStack>
      ) : null}
    </XStack>
  )
}
