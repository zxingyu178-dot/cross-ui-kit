/**
 * Skeleton 骨架屏（native：iOS / Android）—— 内容加载中的占位灰块，服务四态之 loading。
 * 三形态 rect/circle/text；Tamagui Stack/YStack 承担 token 化视觉（底色 $bgActive、圆角/尺寸 token），
 * 呼吸脉冲用 react-native Animated（不依赖 Tamagui animation driver），整组统一淡入淡出。
 */
import { useEffect, useRef, type ReactNode } from 'react'
import { Animated } from 'react-native'
import { Stack, YStack } from 'tamagui'
import type { SkeletonProps, SkeletonSize } from './Skeleton.types'

// circle 直径档（spacing token）：sm $6=24、md $10=40、lg $14=56
const CIRCLE: Record<SkeletonSize, string> = { sm: '$6', md: '$10', lg: '$14' }
// rect 默认高 $4=16（spacing-4）、text 行高 $3=12（caption 档）
const RECT_H = '$4'
const TEXT_H = '$3'

export function Skeleton({
  variant = 'rect',
  size = 'md',
  lines = 3,
  width,
  height,
  accessibilityLabel,
}: SkeletonProps) {
  const opacity = useRef(new Animated.Value(1)).current

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, { toValue: 0.5, duration: 750, useNativeDriver: true }),
        Animated.timing(opacity, { toValue: 1, duration: 750, useNativeDriver: true }),
      ]),
    )
    loop.start()
    return () => loop.stop()
  }, [opacity])

  // 用户覆盖的宽高走 style（RN DimensionValue：数字 px / 百分比字符串）
  const override = {
    ...(width !== undefined ? { width } : {}),
    ...(height !== undefined ? { height } : {}),
  }

  const wrap = (node: ReactNode) => (
    <Animated.View
      style={{ opacity }}
      {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
    >
      {node}
    </Animated.View>
  )

  if (variant === 'circle') {
    const useToken = width === undefined && height === undefined
    return wrap(
      <Stack
        backgroundColor="$bgActive"
        borderRadius={9999}
        {...(useToken ? { width: CIRCLE[size], height: CIRCLE[size] } : {})}
        style={useToken ? undefined : override}
      />,
    )
  }

  if (variant === 'text') {
    const count = lines > 0 ? lines : 1
    return wrap(
      <YStack
        gap="$2"
        width={width === undefined ? '100%' : undefined}
        style={width !== undefined ? { width } : undefined}
      >
        {Array.from({ length: count }).map((_, i) => {
          const isLast = i === count - 1
          return (
            <Stack
              key={i}
              backgroundColor="$bgActive"
              borderRadius={9999}
              {...(height === undefined ? { height: TEXT_H } : {})}
              width={isLast && count > 1 ? '60%' : '100%'}
              style={height !== undefined ? { height } : undefined}
            />
          )
        })}
      </YStack>,
    )
  }

  // rect
  return wrap(
    <Stack
      backgroundColor="$bgActive"
      borderRadius="$md"
      {...(height === undefined ? { height: RECT_H } : {})}
      width={width === undefined ? '100%' : undefined}
      style={{
        ...(width !== undefined ? { width } : {}),
        ...(height !== undefined ? { height } : {}),
      }}
    />,
  )
}
