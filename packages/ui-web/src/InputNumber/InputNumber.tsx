/**
 * InputNumber 数字输入（web）—— 受控优先，支持 min/max/step/precision，加减按钮，
 * 输入中允许空串，onBlur 格式化（clamp + precision）。视觉值走 Tailwind 语义类。
 */
import { useCallback, useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { InputNumberProps, InputNumberSize } from './InputNumber.types'

const SIZE_H: Record<InputNumberSize, string> = {
  sm: 'h-8 text-bodySm',
  md: 'h-10 text-bodyMd',
  lg: 'h-12 text-titleSm',
}

const BTN_SIZE: Record<InputNumberSize, string> = {
  sm: 'w-8 text-bodySm',
  md: 'w-10 text-bodyMd',
  lg: 'w-12 text-titleSm',
}

function clamp(v: number, min?: number, max?: number): number {
  let r = v
  if (min !== undefined && r < min) r = min
  if (max !== undefined && r > max) r = max
  return r
}

function format(v: number | null, precision?: number): string {
  if (v === null || Number.isNaN(v)) return ''
  const p = precision !== undefined ? v.toFixed(precision) : String(v)
  return p
}

export function InputNumber({
  value,
  defaultValue = null,
  onChange,
  min,
  max,
  step = 1,
  precision,
  disabled = false,
  size = 'md',
  placeholder,
  controls = true,
  className,
}: InputNumberProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<number | null>(defaultValue)
  const [display, setDisplay] = useState<string>(format(defaultValue, precision))
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const current = isControlled ? value : inner

  const commit = useCallback(
    (v: number | null) => {
      if (!isControlled) setInner(v)
      onChange?.(v)
    },
    [isControlled, onChange],
  )

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value
    setDisplay(raw)
    if (raw === '' || raw === '-') {
      commit(null)
      return
    }
    const num = Number(raw)
    if (!Number.isNaN(num)) commit(num)
  }

  const handleBlur = () => {
    setFocused(false)
    if (current === null) {
      setDisplay('')
      return
    }
    const clamped = clamp(current, min, max)
    if (clamped !== current) commit(clamped)
    setDisplay(format(clamped, precision))
  }

  const stepValue = (delta: number) => {
    if (disabled) return
    const base = current ?? 0
    const next = clamp(base + delta, min, max)
    commit(next)
    setDisplay(format(next, precision))
    inputRef.current?.focus()
  }

  const atMin = min !== undefined && current !== null && current <= min
  const atMax = max !== undefined && current !== null && current >= max

  return (
    <div
      className={cn(
        'inline-flex items-center overflow-hidden rounded-md border bg-bg-card transition-colors',
        focused ? 'border-primary-default ring-2 ring-primary-default/20' : 'border-border-default',
        disabled ? 'cursor-not-allowed opacity-50' : '',
        SIZE_H[size],
        className,
      )}
    >
      {controls ? (
        <button
          type="button"
          className={cn(
            'flex h-full shrink-0 items-center justify-center border-r border-border-default text-text-secondary hover:bg-bg-muted disabled:cursor-not-allowed disabled:opacity-40',
            BTN_SIZE[size],
          )}
          onClick={() => stepValue(-step)}
          disabled={disabled || atMin}
          aria-label="减少"
        >
          −
        </button>
      ) : null}
      <input
        ref={inputRef}
        type="text"
        inputMode="decimal"
        className="h-full min-w-0 flex-1 bg-transparent px-3 text-center text-text-primary outline-none placeholder:text-text-tertiary"
        value={focused ? display : format(current, precision)}
        onChange={handleInput}
        onFocus={() => {
          setFocused(true)
          setDisplay(format(current, precision))
        }}
        onBlur={handleBlur}
        disabled={disabled}
        placeholder={placeholder}
      />
      {controls ? (
        <button
          type="button"
          className={cn(
            'flex h-full shrink-0 items-center justify-center border-l border-border-default text-text-secondary hover:bg-bg-muted disabled:cursor-not-allowed disabled:opacity-40',
            BTN_SIZE[size],
          )}
          onClick={() => stepValue(step)}
          disabled={disabled || atMax}
          aria-label="增加"
        >
          +
        </button>
      ) : null}
    </div>
  )
}
