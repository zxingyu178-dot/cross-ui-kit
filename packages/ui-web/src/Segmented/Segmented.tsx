/**
 * Segmented 分段控制器（web）—— 受控优先，选项切换，选中态高亮卡片，
 * 整体/单项禁用，三尺寸。视觉值走 Tailwind 语义类。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { SegmentedProps, SegmentedSize } from './Segmented.types'

const SIZE_PX: Record<SegmentedSize, string> = {
  sm: 'h-8 text-bodySm px-3',
  md: 'h-10 text-bodyMd px-4',
  lg: 'h-12 text-titleSm px-5',
}

export function Segmented({
  value,
  defaultValue,
  onChange,
  options,
  size = 'md',
  disabled = false,
  className,
}: SegmentedProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string | undefined>(defaultValue)
  const current = isControlled ? value : inner

  const handleSelect = (v: string) => {
    if (disabled) return
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-lg bg-bg-muted p-1',
        disabled ? 'cursor-not-allowed opacity-50' : '',
        className,
      )}
      role="tablist"
    >
      {options.map((opt) => {
        const active = current === opt.value
        const itemDisabled = disabled || opt.disabled
        return (
          <button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={active}
            disabled={itemDisabled}
            onClick={() => handleSelect(opt.value)}
            className={cn(
              'rounded-md font-medium transition-all duration-fast',
              SIZE_PX[size],
              active
                ? 'bg-bg-card text-text-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-card/50',
              itemDisabled
                ? 'cursor-not-allowed opacity-40 hover:bg-transparent'
                : 'cursor-pointer',
            )}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
