/**
 * Typography 排版（web）—— 统一文字样式，支持 h1-h4/body/caption 变体。
 */
import { cn } from '@kit/core'
import type { TypographyProps, TypographyVariant } from './Typography.types'

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'text-4xl font-bold leading-tight',
  h2: 'text-3xl font-bold leading-snug',
  h3: 'text-2xl font-semibold leading-snug',
  h4: 'text-xl font-semibold leading-normal',
  body: 'text-bodyMd leading-relaxed',
  caption: 'text-caption leading-normal',
}

export function Typography({
  variant = 'body',
  color,
  ellipsis = false,
  bold = false,
  children,
  className,
}: TypographyProps) {
  const isHeading = ['h1', 'h2', 'h3', 'h4'].includes(variant)
  const Tag = isHeading ? (variant as 'h1' | 'h2' | 'h3' | 'h4') : 'span'

  return (
    <Tag
      className={cn(
        variantClasses[variant],
        ellipsis ? 'truncate' : '',
        bold ? 'font-bold' : '',
        'text-text-primary',
        className,
      )}
      style={color ? { color } : undefined}
    >
      {children}
    </Tag>
  )
}
