/**
 * Tag 标签（web）—— 可选中（筛选）/ 可关闭（删除）的内容标签，区别于纯展示的 Badge。
 * 调色板与 Badge 完全一致（tone×variant）；selected 强制 solid；关闭 × 点击 stopPropagation。
 * 颜色全部走 @theme inline 语义类（token）；胶囊圆角为结构值。
 */
import { forwardRef } from 'react'
import type { MouseEvent } from 'react'
import { cn } from '@kit/core'
import type { TagProps, TagSize, TagTone, TagVariant } from './Tag.types'

/** tone × variant 颜色映射（与 Badge 保持一致，只允许 token 语义类） */
const TONE_VARIANT: Record<TagTone, Record<TagVariant, string>> = {
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
    neutral: 'border-border-default text-text-secondary',
    primary: 'border-primary-default text-primary-default',
    success: 'border-success-border text-success-default',
    warning: 'border-warning-border text-warning-default',
    danger: 'border-danger-border text-danger-default',
    info: 'border-info-border text-info-default',
  },
}

const SIZE: Record<TagSize, { box: string; close: string }> = {
  md: { box: 'h-6 pl-2.5 text-body-sm', close: 'h-4 w-4 text-body-sm' },
  sm: { box: 'h-5 pl-2 text-caption', close: 'h-3.5 w-3.5 text-caption' },
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(function Tag(
  {
    children,
    variant = 'neutral',
    tone = 'soft',
    size = 'md',
    selected = false,
    closable = false,
    disabled = false,
    onClose,
    onClick,
    className,
    ...rest
  },
  ref,
) {
  const clickable = typeof onClick === 'function' && !disabled
  const effectiveTone: TagTone = selected ? 'solid' : tone
  const s = SIZE[size]

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClose?.()
  }

  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-transparent font-medium',
        s.box,
        closable ? 'pr-1' : 'pr-2.5',
        TONE_VARIANT[effectiveTone][variant],
        clickable && 'cursor-pointer select-none',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      onClick={clickable ? onClick : undefined}
      {...(clickable ? { role: 'button', tabIndex: 0 } : {})}
      {...(clickable || selected ? { 'aria-pressed': selected } : {})}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      <span className="leading-none">{children}</span>
      {closable && (
        <button
          type="button"
          aria-label="移除标签"
          disabled={disabled}
          onClick={handleClose}
          className={cn(
            'ml-0.5 inline-flex shrink-0 items-center justify-center rounded-full leading-none transition-opacity duration-150 hover:opacity-70',
            disabled && 'cursor-not-allowed',
            s.close,
          )}
        >
          <span aria-hidden="true" className="leading-none">
            ×
          </span>
        </button>
      )}
    </span>
  )
})
