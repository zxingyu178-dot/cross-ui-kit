/**
 * Spinner 加载指示器（native：iOS / Android）—— 不确定时长的加载旋转圈。
 * 外层 react-native Animated 做 1s linear 匀速旋转（useNativeDriver，不依赖 Tamagui animation driver），
 * 内层 Tamagui Stack 承载 border 视觉，颜色只引用 token；inverse 为白圈（结构色）。
 */
import { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'
import { Stack } from 'tamagui'
import type { SpinnerProps, SpinnerSize, SpinnerTone } from './Spinner.types'

// 直径档：sm=icon-sm(16)、md=icon-lg(24)、lg=control-height-sm(32)
const SIZE: Record<SpinnerSize, number> = { sm: 16, md: 24, lg: 32 }

// [轨道色, 旋转头色]
const TONE: Record<SpinnerTone, { track: string; head: string }> = {
  primary: { track: '$borderDefault', head: '$primaryDefault' },
  muted: { track: '$borderDefault', head: '$textTertiary' },
  inverse: { track: 'rgba(255,255,255,0.3)', head: '#ffffff' },
}

export function Spinner({ size = 'md', tone = 'primary', accessibilityLabel }: SpinnerProps) {
  const rotate = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    )
    loop.start()
    return () => loop.stop()
  }, [rotate])

  const d = SIZE[size]
  const t = TONE[tone]
  const spin = rotate.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '360deg'] })

  return (
    <Animated.View
      style={{ transform: [{ rotate: spin }], width: d, height: d }}
      accessibilityRole="progressbar"
      accessibilityState={{ busy: true }}
      {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
    >
      <Stack
        width={d}
        height={d}
        borderRadius={9999}
        borderWidth={2}
        borderColor={t.track}
        borderTopColor={t.head}
      />
    </Animated.View>
  )
}
