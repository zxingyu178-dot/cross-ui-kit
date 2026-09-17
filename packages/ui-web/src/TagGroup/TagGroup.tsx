/**
 * TagGroup 标签组（web）—— 多个标签排列显示，超出显示 +N。
 */
import { cn } from '@kit/core'
import type { TagGroupProps } from './TagGroup.types'

const sizeMap = {
  sm: 'h-5 px-2 text-caption',
  md: 'h-6 px-2.5 text-bodySm',
  lg: 'h-7 px-3 text-bodyMd',
}

const colorMap = {
  primary: 'bg-primary-bg text-primary-default border-primary-border',
  success: 'bg-success-bg text-success-default border-success-border',
  warning: 'bg-warning-bg text-warning-default border-warning-border',
  danger: 'bg-danger-bg text-danger-default border-danger-border',
  info: 'bg-info-bg text-info-default border-info-border',
  neutral: 'bg-neutral-bg text-neutral-default border-neutral-border',
}

export function TagGroup({
  items = [],
  max,
  size = 'md',
  variant = 'soft',
  onClose,
  children,
  className,
}: TagGroupProps) {
  const displayItems = max !== undefined ? items.slice(0, max) : items
  const remaining = max !== undefined ? items.length - max : 0

  const variantClass =
    variant === 'outline'
      ? 'border bg-transparent'
      : variant === 'solid'
        ? 'border-transparent text-white'
        : 'border'

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {displayItems.map((item) => (
        <span
          key={item.key}
          className={cn(
            'inline-flex items-center gap-1 rounded-md font-medium',
            sizeMap[size],
            variantClass,
            variant !== 'solid' ? colorMap[item.color ?? 'neutral'] : '',
            variant === 'solid' ? `bg-${item.color ?? 'neutral'}-default` : '',
          )}
        >
          {item.label}
          {item.closable ? (
            <button
              type="button"
              onClick={() => onClose?.(item.key)}
              className="ml-0.5 cursor-pointer opacity-60 hover:opacity-100"
              aria-label={`关闭 ${item.label}`}
            >
              ×
            </button>
          ) : null}
        </span>
      ))}
      {remaining > 0 ? (
        <span
          className={cn(
            'inline-flex items-center rounded-md bg-bg-muted font-medium text-text-secondary',
            sizeMap[size],
          )}
        >
          +{remaining}
        </span>
      ) : null}
      {children}
    </div>
  )
}
