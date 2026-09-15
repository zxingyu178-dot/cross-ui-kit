/**
 * Badge 徽标/标签（native：iOS / Android）—— 单个 Tamagui Text 胶囊，
 * 颜色只引用 Tamagui token，与 web/mini 的 soft/solid/outline 三形态、六语义色对齐。
 * 调色板用 Record 强制 tone×variant 全覆盖；白字统一 $primaryText（控件中性白）。
 */
import { Text } from 'tamagui'
import type { BadgeProps, BadgeSize, BadgeTone, BadgeVariant } from './Badge.types'

interface BadgeColor {
  backgroundColor?: string
  color: string
  borderColor?: string
}

/** tone × variant 调色板（值均为 Tamagui token 字符串；outline 背景透明、soft/solid 描边透明占位） */
const PALETTE: Record<BadgeTone, Record<BadgeVariant, BadgeColor>> = {
  soft: {
    neutral: { backgroundColor: '$bgHover', color: '$textSecondary', borderColor: 'transparent' },
    primary: {
      backgroundColor: '$primaryBg',
      color: '$primaryDefault',
      borderColor: 'transparent',
    },
    success: {
      backgroundColor: '$successBg',
      color: '$successDefault',
      borderColor: 'transparent',
    },
    warning: {
      backgroundColor: '$warningBg',
      color: '$warningDefault',
      borderColor: 'transparent',
    },
    danger: { backgroundColor: '$dangerBg', color: '$dangerDefault', borderColor: 'transparent' },
    info: { backgroundColor: '$infoBg', color: '$infoDefault', borderColor: 'transparent' },
  },
  solid: {
    neutral: { backgroundColor: '$bgInverse', color: '$textInverse', borderColor: 'transparent' },
    primary: {
      backgroundColor: '$primaryDefault',
      color: '$primaryText',
      borderColor: 'transparent',
    },
    success: {
      backgroundColor: '$successDefault',
      color: '$primaryText',
      borderColor: 'transparent',
    },
    warning: {
      backgroundColor: '$warningDefault',
      color: '$primaryText',
      borderColor: 'transparent',
    },
    danger: {
      backgroundColor: '$dangerDefault',
      color: '$primaryText',
      borderColor: 'transparent',
    },
    info: { backgroundColor: '$infoDefault', color: '$primaryText', borderColor: 'transparent' },
  },
  outline: {
    neutral: {
      backgroundColor: 'transparent',
      color: '$textSecondary',
      borderColor: '$borderDefault',
    },
    primary: {
      backgroundColor: 'transparent',
      color: '$primaryDefault',
      borderColor: '$primaryDefault',
    },
    success: {
      backgroundColor: 'transparent',
      color: '$successDefault',
      borderColor: '$successBorder',
    },
    warning: {
      backgroundColor: 'transparent',
      color: '$warningDefault',
      borderColor: '$warningBorder',
    },
    danger: {
      backgroundColor: 'transparent',
      color: '$dangerDefault',
      borderColor: '$dangerBorder',
    },
    info: { backgroundColor: 'transparent', color: '$infoDefault', borderColor: '$infoBorder' },
  },
}

const SIZE: Record<BadgeSize, { px: number; py: number; font: string }> = {
  md: { px: 8, py: 3, font: '$bodySm' },
  sm: { px: 6, py: 1, font: '$caption' },
}

export function Badge({
  children,
  variant = 'neutral',
  tone = 'soft',
  size = 'md',
  onPress,
  accessibilityLabel,
}: BadgeProps) {
  const c = PALETTE[tone][variant]
  const s = SIZE[size]
  return (
    <Text
      alignSelf="flex-start"
      alignItems="center"
      paddingHorizontal={s.px}
      paddingVertical={s.py}
      borderRadius={999}
      borderWidth={1}
      backgroundColor={c.backgroundColor}
      borderColor={c.borderColor}
      color={c.color}
      fontSize={s.font}
      fontWeight="$medium"
      {...(onPress ? { onPress } : {})}
      {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
    >
      {children}
    </Text>
  )
}
