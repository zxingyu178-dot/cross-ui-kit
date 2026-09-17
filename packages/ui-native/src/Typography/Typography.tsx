/**
 * Typography 排版（native：iOS / Android）—— Tamagui Text 自建，
 * 统一文字样式，支持 h1-h4/body/caption 变体。
 */
import { Text } from 'tamagui'
import type { TextStyle } from 'react-native'
import type { TypographyProps, TypographyVariant } from './Typography.types'

const variantStyles: Record<
  TypographyVariant,
  { fontSize: number; fontWeight: TextStyle['fontWeight']; lineHeight: number }
> = {
  h1: { fontSize: 36, fontWeight: '700', lineHeight: 44 },
  h2: { fontSize: 30, fontWeight: '700', lineHeight: 38 },
  h3: { fontSize: 24, fontWeight: '600', lineHeight: 32 },
  h4: { fontSize: 20, fontWeight: '600', lineHeight: 28 },
  body: { fontSize: 14, fontWeight: '400', lineHeight: 22 },
  caption: { fontSize: 12, fontWeight: '400', lineHeight: 18 },
}

export function Typography({
  variant = 'body',
  color,
  ellipsis = false,
  bold = false,
  children,
  style,
}: TypographyProps) {
  const s = variantStyles[variant]
  return (
    <Text
      fontSize={s.fontSize}
      fontWeight={bold ? '700' : s.fontWeight}
      lineHeight={s.lineHeight}
      color={color ?? '$textPrimary'}
      numberOfLines={ellipsis ? 1 : undefined}
      style={style}
    >
      {children}
    </Text>
  )
}
