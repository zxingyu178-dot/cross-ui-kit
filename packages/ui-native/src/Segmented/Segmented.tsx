/**
 * Segmented 分段控制器（native：iOS / Android）—— Tamagui XStack+Text 自建，
 * 受控优先，选项切换，选中态高亮，整体/单项禁用，三尺寸。
 */
import { useState } from 'react'
import { Text, XStack } from 'tamagui'
import type { SegmentedProps, SegmentedSize } from './Segmented.types'

const SIZE_H: Record<SegmentedSize, number> = { sm: 32, md: 40, lg: 48 }
const SIZE_PX: Record<SegmentedSize, number> = { sm: 12, md: 16, lg: 20 }
const SIZE_FS: Record<SegmentedSize, string> = { sm: '$bodySm', md: '$bodyMd', lg: '$titleSm' }

export function Segmented({
  value,
  defaultValue,
  onChange,
  options,
  size = 'md',
  disabled = false,
  style,
}: SegmentedProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string | undefined>(defaultValue)
  const current = isControlled ? value : inner
  const h = SIZE_H[size]

  const handleSelect = (v: string) => {
    if (disabled) return
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  return (
    <XStack
      alignItems="center"
      gap={4}
      padding={4}
      borderRadius="$lg"
      backgroundColor="$bgMuted"
      opacity={disabled ? 0.5 : 1}
      style={style}
    >
      {options.map((opt) => {
        const active = current === opt.value
        const itemDisabled = disabled || opt.disabled
        return (
          <XStack
            key={opt.value}
            height={h}
            paddingHorizontal={SIZE_PX[size]}
            alignItems="center"
            justifyContent="center"
            borderRadius="$md"
            backgroundColor={active ? '$bgCard' : 'transparent'}
            opacity={itemDisabled ? 0.4 : 1}
            onPress={() => handleSelect(opt.value)}
          >
            <Text
              fontSize={SIZE_FS[size]}
              fontWeight={500}
              color={active ? '$textPrimary' : '$textSecondary'}
            >
              {opt.label}
            </Text>
          </XStack>
        )
      })}
    </XStack>
  )
}
