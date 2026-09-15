/**
 * Badge 徽标/标签（web）—— 纯展示胶囊，无第三方底座依赖（同 shadcn Badge 思路）。
 * 颜色全部走 @theme inline 语义类（token），白字为控件中性常量（三栈统一，同 Switch 滑块先例）；
 * 胶囊圆角无 pill token，rounded-full 为结构值。
 */
import { forwardRef } from 'react'
import { cn } from '@kit/core'
import type { BadgeProps, BadgeSize, BadgeTone, BadgeVariant } from './Badge.types'

/** tone × variant 颜色映射（只允许 token 语义类） */
const TONE_VARIANT: Record<BadgeTone, Record<BadgeVariant, string>> = {
  soft: {
    neutral: 'bg-bg-hover text-text-secondary',
    primary: 'bg-primary-bg text-primary-default',
    success: 'bg-success-bg text-success-default',
    warning: 'bg-warning-bg text-warning-default',
    danger: 'bg-danger-bg text-danger-default',
    info: 'bg-info-bg text-info-default',
  },
  solid: {
    neutral: 'bg-bg-inverse text-text-inverse',
    primary: 'bg-primary-default text-white',
    success: 'bg-success-default text-white',
    warning: 'bg-warning-default text-white',
    danger: 'bg-danger-default text-white',
    info: 'bg-info-default text-white',
  },
  outline: {
    neutral: 'border border-border-default text-text-secondary',
    primary: 'border border-primary-default text-primary-default',
    success: 'border border-success-border text-success-default',
    warning: 'border border-warning-border text-warning-default',
    danger: 'border border-danger-border text-danger-default',
    info: 'border border-info-border text-info-default',
  },
}

const SIZE: Record<BadgeSize, string> = {
  md: 'px-2 py-0.5 text-body-sm',
  sm: 'px-1.5 py-px text-caption',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { children, variant = 'neutral', tone = 'soft', size = 'md', className, onClick, ...rest },
  ref,
) {
  const clickable = typeof onClick === 'function'
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 whitespace-nowrap rounded-full font-medium',
        SIZE[size],
        TONE_VARIANT[tone][variant],
        clickable && 'cursor-pointer select-none',
        className,
      )}
      onClick={onClick}
      {...(clickable ? { role: 'button', tabIndex: 0 } : {})}
      {...rest}
    >
      {children}
    </span>
  )
})
