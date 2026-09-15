/**
 * Tag 标签（native：iOS / Android）—— 可选中（筛选）/ 可关闭（删除）的内容标签。
 * 调色板与 Badge 一致（PALETTE tone×variant）；selected 强制 solid；
 * 关闭区为独立可点 Stack（RN 手势被子元素捕获，不会触发标签本身 onPress）。
 * 颜色/字号只引用 Tamagui token；尺寸数字与 web/mini 视觉对齐（同 Badge native 先例）。
 */
import { Stack, Text, XStack } from 'tamagui'
import type { TagProps, TagSize, TagTone, TagVariant } from './Tag.types'

interface TagColor {
  backgroundColor?: string
  color: string
  borderColor?: string
}

/** tone × variant 调色板（值均为 Tamagui token 字符串），与 Badge 同值 */
const PALETTE: Record<TagTone, Record<TagVariant, TagColor>> = {
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

const SIZE: Record<TagSize, { h: number; px: number; font: string; close: number }> = {
  md: { h: 24, px: 10, font: '$bodySm', close: 16 },
  sm: { h: 20, px: 8, font: '$caption', close: 14 },
}

export function Tag({
  children,
  variant = 'neutral',
  tone = 'soft',
  size = 'md',
  selected = false,
  closable = false,
  disabled = false,
  onClose,
  onPress,
}: TagProps) {
  const effectiveTone: TagTone = selected ? 'solid' : tone
  const c = PALETTE[effectiveTone][variant]
  const s = SIZE[size]
  const clickable = typeof onPress === 'function' && !disabled
  const closeable = !disabled && typeof onClose === 'function'

  return (
    <XStack
      alignItems="center"
      gap={2}
      height={s.h}
      paddingLeft={s.px}
      paddingRight={closable ? 2 : s.px}
      borderRadius={999}
      borderWidth={1}
      backgroundColor={c.backgroundColor}
      borderColor={c.borderColor}
      {...(disabled ? { opacity: 0.5 } : {})}
      {...(clickable ? { onPress } : {})}
      {...(clickable ? { accessibilityRole: 'button' } : {})}
      {...(clickable || selected ? { accessibilityState: { selected, disabled } } : {})}
    >
      <Text fontSize={s.font} fontWeight="$medium" color={c.color}>
        {children}
      </Text>
      {closable && (
        <Stack
          width={s.close}
          height={s.close}
          marginLeft={2}
          alignItems="center"
          justifyContent="center"
          {...(closeable ? { onPress: () => onClose() } : {})}
          {...(closeable ? { accessibilityRole: 'button', accessibilityLabel: '移除标签' } : {})}
        >
          <Text fontSize={s.font} color={c.color} lineHeight={s.close}>
            ×
          </Text>
        </Stack>
      )}
    </XStack>
  )
}
