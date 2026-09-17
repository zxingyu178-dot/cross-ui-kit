/**
 * Rate 评分（native：iOS / Android）—— Tamagui XStack+Text 自建，
 * 受控优先，点击选择，allowHalf 半星，禁用态，三尺寸，自定义字符。
 */
import { useState } from 'react'
import { Text, XStack } from 'tamagui'
import type { RateProps, RateSize } from './Rate.types'

const SIZE_FS: Record<RateSize, number> = { sm: 18, md: 24, lg: 30 }

export function Rate({
  value,
  defaultValue = 0,
  onChange,
  count = 5,
  allowHalf = false,
  disabled = false,
  size = 'md',
  character = '★',
  style,
}: RateProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState(defaultValue)
  const current = isControlled ? value : inner
  const fs = SIZE_FS[size]

  const handleSelect = (v: number) => {
    if (disabled) return
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  return (
    <XStack alignItems="center" gap={4} opacity={disabled ? 0.6 : 1} style={style}>
      {Array.from({ length: count }).map((_, i) => {
        const full = current >= i + 1
        const half = allowHalf && current >= i + 0.5 && current < i + 1
        return (
          <XStack
            key={i}
            position="relative"
            width={fs}
            height={fs}
            alignItems="center"
            justifyContent="center"
          >
            {allowHalf ? (
              <>
                <XStack
                  position="absolute"
                  left={0}
                  top={0}
                  width={fs / 2}
                  height={fs}
                  zIndex={1}
                  onPress={() => handleSelect(i + 0.5)}
                />
                <XStack
                  position="absolute"
                  right={0}
                  top={0}
                  width={fs / 2}
                  height={fs}
                  zIndex={1}
                  onPress={() => handleSelect(i + 1)}
                />
              </>
            ) : (
              <XStack
                position="absolute"
                left={0}
                top={0}
                width={fs}
                height={fs}
                zIndex={1}
                onPress={() => handleSelect(i + 1)}
              />
            )}
            <Text
              fontSize={fs}
              lineHeight={1}
              color={full ? '$primaryDefault' : half ? '$primaryDefault' : '$borderDefault'}
              opacity={half ? 0.5 : 1}
            >
              {character}
            </Text>
          </XStack>
        )
      })}
    </XStack>
  )
}
