/**
 * Mentions 提及输入（native：iOS / Android）—— Tamagui XStack+YStack+Text+Input 自建，
 * 输入框 + 弹出选项列表，输入 prefix 时触发。
 */
import { useMemo, useState } from 'react'
import { Input, Text, XStack, YStack } from 'tamagui'
import type { MentionOption, MentionsProps } from './Mentions.types'

export function Mentions({
  value,
  onChange,
  options = [],
  prefix = '@',
  placeholder = '请输入',
  disabled = false,
  allowClear = true,
  onSelect,
  style,
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
    <YStack width="100%" style={style}>
      <XStack
        alignItems="center"
        height={36}
        paddingHorizontal={12}
        borderWidth={1}
        borderColor={open ? '$primaryDefault' : '$borderDefault'}
        borderRadius="$md"
        backgroundColor={disabled ? '$bgMuted' : '$bgCard'}
        opacity={disabled ? 0.5 : 1}
      >
        <Input
          flex={1}
          height="100%"
          fontSize="$bodySm"
          color="$textPrimary"
          placeholder={placeholder}
          placeholderTextColor="$textTertiary"
          value={currentValue}
          onChangeText={handleInput}
          editable={!disabled}
          borderWidth={0}
          padding={0}
        />
        {allowClear && currentValue && !disabled ? (
          <Text
            width={16}
            height={16}
            fontSize={14}
            color="$textTertiary"
            textAlign="center"
            marginLeft={8}
            onPress={handleClear}
          >
            ×
          </Text>
        ) : null}
      </XStack>

      {open && filteredOptions.length > 0 ? (
        <YStack
          position="absolute"
          top="100%"
          left={0}
          right={0}
          marginTop={4}
          maxHeight={192}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          padding={4}
          zIndex={50}
          shadowColor="#000"
          shadowOffset={{ width: 0, height: 4 }}
          shadowOpacity={0.1}
          shadowRadius={12}
          elevation={8}
        >
          {filteredOptions.map((option) => (
            <XStack
              key={option.key}
              alignItems="center"
              gap={8}
              padding={6}
              borderRadius={4}
              onPress={() => handleSelect(option)}
            >
              <YStack
                width={24}
                height={24}
                borderRadius={12}
                backgroundColor="rgba(37,99,235,0.1)"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="$caption" fontWeight="500" color="$primaryDefault">
                  {option.label.charAt(0)}
                </Text>
              </YStack>
              <YStack flex={1} minWidth={0}>
                <Text fontSize="$bodySm" color="$textPrimary">
                  {option.label}
                </Text>
                {option.description ? (
                  <Text fontSize="$caption" color="$textTertiary">
                    {option.description}
                  </Text>
                ) : null}
              </YStack>
            </XStack>
          ))}
        </YStack>
      ) : null}
    </YStack>
  )
}
