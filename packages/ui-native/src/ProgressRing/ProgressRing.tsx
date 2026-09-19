/**
 * ProgressRing 环形进度（native：iOS / Android）。
 * 简化：用两个堆叠的 View 近似环形（未引入 SVG 依赖），中间文字。
 */
import { View } from 'react-native'
import { Text, YStack } from 'tamagui'
import type { ProgressRingProps } from './ProgressRing.types'

const toneColor: Record<NonNullable<ProgressRingProps['tone']>, string> = {
  primary: '$primaryDefault',
  success: '$successDefault',
  warning: '$warningDefault',
  danger: '$dangerDefault',
}

export function ProgressRing({
  value,
  size = 80,
  strokeWidth = 8,
  children,
  tone = 'primary',
  style,
}: ProgressRingProps) {
  const clamped = Math.max(0, Math.min(100, value))
  const deg = (clamped / 100) * 360

  return (
    <YStack
      width={size}
      height={size}
      alignItems="center"
      justifyContent="center"
      backgroundColor="$bgSecondary"
      borderRadius={size / 2}
      style={style}
    >
      <View
        style={{
          width: size - strokeWidth * 2,
          height: size - strokeWidth * 2,
          borderRadius: (size - strokeWidth * 2) / 2,
          backgroundColor: '$bgCard',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text color={toneColor[tone]} fontSize={13} fontWeight="500">
          {children ?? `${Math.round(clamped)}%`}
        </Text>
      </View>
      {/* 进度角标（视觉近似） */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: size / 2,
          width: strokeWidth,
          height: size / 2,
          backgroundColor: toneColor[tone],
          transformOrigin: 'bottom',
          transform: [{ rotate: `${deg}deg` }],
          opacity: 0.25,
        }}
      />
    </YStack>
  )
}
