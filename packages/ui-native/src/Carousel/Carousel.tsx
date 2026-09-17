/**
 * Carousel 轮播图（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 滑动切换 + 指示器 + 左右箭头，支持自动播放。
 */
import { useEffect, useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { CarouselProps } from './Carousel.types'

export function Carousel({
  items = [],
  autoplay = false,
  interval = 3000,
  dots = true,
  arrows = true,
  onChange,
  height = 200,
  style,
}: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const goTo = (index: number) => {
    const next = (index + items.length) % items.length
    setCurrent(next)
    onChange?.(next)
  }

  useEffect(() => {
    if (!autoplay || items.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % items.length
        onChange?.(next)
        return next
      })
    }, interval)
    return () => clearInterval(timer)
  }, [autoplay, interval, items.length, onChange])

  if (items.length === 0) return null

  return (
    <YStack
      position="relative"
      overflow="hidden"
      borderRadius="$md"
      backgroundColor="$bgMuted"
      height={height}
      style={style}
    >
      <XStack height="100%" style={{ transform: [{ translateX: -current * 100 }] }}>
        {items.map((item) => (
          <YStack key={item.key} width="100%" height="100%">
            {item.content}
          </YStack>
        ))}
      </XStack>

      {arrows && items.length > 1 ? (
        <>
          <XStack
            position="absolute"
            left={8}
            top="50%"
            width={32}
            height={32}
            borderRadius={16}
            backgroundColor="rgba(255,255,255,0.8)"
            alignItems="center"
            justifyContent="center"
            zIndex={10}
            onPress={() => goTo(current - 1)}
          >
            <Text fontSize={20} color="$textPrimary">
              ‹
            </Text>
          </XStack>
          <XStack
            position="absolute"
            right={8}
            top="50%"
            width={32}
            height={32}
            borderRadius={16}
            backgroundColor="rgba(255,255,255,0.8)"
            alignItems="center"
            justifyContent="center"
            zIndex={10}
            onPress={() => goTo(current + 1)}
          >
            <Text fontSize={20} color="$textPrimary">
              ›
            </Text>
          </XStack>
        </>
      ) : null}

      {dots && items.length > 1 ? (
        <XStack position="absolute" bottom={12} left="50%" gap={8} zIndex={10}>
          {items.map((item, index) => (
            <YStack
              key={item.key}
              width={index === current ? 24 : 8}
              height={8}
              borderRadius={4}
              backgroundColor={index === current ? '$primaryDefault' : 'rgba(255,255,255,0.6)'}
              onPress={() => goTo(index)}
            />
          ))}
        </XStack>
      ) : null}
    </YStack>
  )
}
