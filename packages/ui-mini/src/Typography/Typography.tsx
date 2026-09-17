/**
 * Typography 排版（mini：小程序 / 移动 H5）—— Text 自建，
 * 统一文字样式，支持 h1-h4/body/caption 变体。
 */
import { Text } from '@tarojs/components'
import type { TypographyProps, TypographyVariant } from './Typography.types'

const variantStyles: Record<
  TypographyVariant,
  { fontSize: number; fontWeight: string; lineHeight: number }
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
  className = '',
}: TypographyProps) {
  const style = variantStyles[variant]
  return (
    <Text
      className={`kit-typography ${className}`.trim()}
      style={{
        fontSize: style.fontSize,
        fontWeight: bold ? '700' : style.fontWeight,
        lineHeight: `${style.lineHeight}px`,
        color: color ?? 'var(--kit-color-text-primary)',
        ...(ellipsis ? { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } : {}),
      }}
    >
      {children}
    </Text>
  )
}
