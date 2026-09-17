/**
 * ColorPicker 颜色选择器（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 预设色板，受控优先。
 */
import { useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { ColorPickerProps } from './ColorPicker.types'

const DEFAULT_PRESETS = [
  '#2563eb',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#06b6d4',
  '#f97316',
  '#ec4899',
  '#64748b',
  '#0f172a',
]

export function ColorPicker({
  value,
  defaultValue,
  onChange,
  presetColors = DEFAULT_PRESETS,
  disabled = false,
  placeholder = '请选择颜色',
  style,
}: ColorPickerProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string>(defaultValue ?? '')
  const [open, setOpen] = useState(false)
  const current = isControlled ? value : inner

  const commit = (color: string) => {
    if (!isControlled) setInner(color)
    onChange?.(color)
  }

  return (
    <YStack position="relative" style={style}>
      <XStack
        height={40}
        alignItems="center"
        gap={8}
        paddingHorizontal={12}
        borderWidth={1}
        borderColor={open ? '$primaryDefault' : '$borderDefault'}
        borderRadius="$md"
        backgroundColor="$bgCard"
        opacity={disabled ? 0.5 : 1}
        onPress={() => !disabled && setOpen(!open)}
      >
        <YStack
          width={20}
          height={20}
          borderRadius={4}
          borderWidth={1}
          borderColor="$borderDefault"
          backgroundColor={current || 'transparent'}
        />
        <Text fontSize="$bodyMd" color={current ? '$textPrimary' : '$textTertiary'}>
          {current || placeholder}
        </Text>
      </XStack>
      {open && !disabled ? (
        <YStack
          position="absolute"
          top="100%"
          left={0}
          marginTop={4}
          padding={12}
          borderWidth={1}
          borderColor="$borderDefault"
          borderRadius="$md"
          backgroundColor="$bgCard"
          zIndex={100}
          width={224}
        >
          <XStack flexWrap="wrap" gap={8}>
            {presetColors.map((color) => (
              <YStack
                key={color}
                width={32}
                height={32}
                borderRadius={4}
                borderWidth={2}
                borderColor={current === color ? '$primaryDefault' : 'transparent'}
                backgroundColor={color}
                onPress={() => commit(color)}
              />
            ))}
          </XStack>
        </YStack>
      ) : null}
    </YStack>
  )
}
