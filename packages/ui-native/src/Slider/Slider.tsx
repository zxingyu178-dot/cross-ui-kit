/**
 * Slider 滑块（native：iOS / Android）—— Tamagui XStack+YStack 自建，
 * 点击轨道设置值，受控优先，min/max/step，禁用态。
 */
import { useState } from 'react'
import { XStack, YStack } from 'tamagui'
import type { SliderProps } from './Slider.types'

export function Slider({
  value,
  defaultValue = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  style,
}: SliderProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState(defaultValue)
  const [trackWidth, setTrackWidth] = useState(200)
  const current = isControlled ? value : inner
  const percent = Math.max(0, Math.min(100, ((current - min) / (max - min)) * 100))

  const commit = (v: number) => {
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  const handlePress = (event: { nativeEvent?: { locationX?: number } }) => {
    if (disabled) return
    const locationX = event.nativeEvent?.locationX ?? 0
    const pct = Math.max(0, Math.min(1, locationX / Math.max(trackWidth, 1)))
    const raw = min + pct * (max - min)
    const stepped = Math.round(raw / step) * step
    commit(Math.max(min, Math.min(max, stepped)))
  }

  return (
    <XStack
      height={20}
      alignItems="center"
      opacity={disabled ? 0.5 : 1}
      style={style}
      onLayout={(e) => setTrackWidth(e.nativeEvent.layout.width)}
      onPress={handlePress}
    >
      <YStack
        position="absolute"
        left={0}
        right={0}
        height={4}
        borderRadius={2}
        backgroundColor="$borderDefault"
      />
      <YStack
        position="absolute"
        left={0}
        height={4}
        width={`${percent}%`}
        borderRadius={2}
        backgroundColor="$primaryDefault"
      />
      <YStack
        position="absolute"
        left={`${percent}%`}
        width={16}
        height={16}
        borderRadius={8}
        backgroundColor="$bgCard"
        borderWidth={2}
        borderColor="$primaryDefault"
        transform={[{ translateX: -8 }]}
      />
    </XStack>
  )
}
