/**
 * Rate 评分（web）—— 受控优先，星星点击选择，hover 预览，allowHalf 半星，
 * 禁用态，三尺寸，自定义字符。视觉值走 Tailwind 语义类。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { RateProps, RateSize } from './Rate.types'

const SIZE_FS: Record<RateSize, string> = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-3xl',
}

export function Rate({
  value,
  defaultValue = 0,
  onChange,
  count = 5,
  allowHalf = false,
  disabled = false,
  size = 'md',
  character = '★',
  className,
}: RateProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState(defaultValue)
  const [hoverValue, setHoverValue] = useState<number | null>(null)
  const current = isControlled ? value : inner
  const displayValue = hoverValue ?? current

  const handleSelect = (v: number) => {
    if (disabled) return
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1',
        disabled ? 'cursor-not-allowed opacity-60' : '',
        className,
      )}
      onMouseLeave={() => setHoverValue(null)}
      role="radiogroup"
      aria-label="评分"
    >
      {Array.from({ length: count }).map((_, i) => {
        const full = displayValue >= i + 1
        const half = allowHalf && displayValue >= i + 0.5 && displayValue < i + 1
        return (
          <div key={i} className="relative">
            {allowHalf ? (
              <>
                <button
                  type="button"
                  className="absolute left-0 top-0 z-10 h-full w-1/2 cursor-pointer"
                  onMouseEnter={() => setHoverValue(i + 0.5)}
                  onClick={() => handleSelect(i + 0.5)}
                  disabled={disabled}
                  aria-label={`${i + 0.5} 分`}
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 z-10 h-full w-1/2 cursor-pointer"
                  onMouseEnter={() => setHoverValue(i + 1)}
                  onClick={() => handleSelect(i + 1)}
                  disabled={disabled}
                  aria-label={`${i + 1} 分`}
                />
              </>
            ) : (
              <button
                type="button"
                className="cursor-pointer"
                onMouseEnter={() => setHoverValue(i + 1)}
                onClick={() => handleSelect(i + 1)}
                disabled={disabled}
                aria-label={`${i + 1} 分`}
              />
            )}
            <span
              className={cn(
                'pointer-events-none select-none leading-none transition-colors duration-fast',
                SIZE_FS[size],
                full
                  ? 'text-primary-default'
                  : half
                    ? 'text-primary-default/50'
                    : 'text-border-default',
              )}
            >
              {character}
            </span>
          </div>
        )
      })}
    </div>
  )
}
