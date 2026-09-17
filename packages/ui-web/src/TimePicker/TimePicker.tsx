/**
 * TimePicker 时间选择器（web）—— div 容器 + 输入框 + 时间选择面板（时/分/秒三列），
 * 受控优先，支持 HH:mm:ss / HH:mm 格式。
 */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { TimePickerFormat, TimePickerProps } from './TimePicker.types'

function pad(n: number): string {
  return n.toString().padStart(2, '0')
}

function parseTime(value: string, format: TimePickerFormat): [number, number, number] {
  if (!value) return [0, 0, 0]
  const parts = value.split(':').map(Number)
  const h = parts[0] ?? 0
  const m = parts[1] ?? 0
  const s = format === 'HH:mm' ? 0 : (parts[2] ?? 0)
  return [h, m, s]
}

export function TimePicker({
  value,
  defaultValue,
  onChange,
  format = 'HH:mm:ss',
  placeholder = '请选择时间',
  className,
}: TimePickerProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string>(defaultValue ?? '')
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const current = isControlled ? value : inner

  const [hours, minutes, seconds] = parseTime(current, format)

  const commit = (h: number, m: number, s: number) => {
    const val = format === 'HH:mm' ? `${pad(h)}:${pad(m)}` : `${pad(h)}:${pad(m)}:${pad(s)}`
    if (!isControlled) setInner(val)
    onChange?.(val)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const hourOptions = Array.from({ length: 24 }, (_, i) => i)
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i)
  const secondOptions = Array.from({ length: 60 }, (_, i) => i)

  const columns: { options: number[]; value: number; onChange: (v: number) => void }[] = [
    { options: hourOptions, value: hours, onChange: (h) => commit(h, minutes, seconds) },
    { options: minuteOptions, value: minutes, onChange: (m) => commit(hours, m, seconds) },
  ]
  if (format === 'HH:mm:ss') {
    columns.push({
      options: secondOptions,
      value: seconds,
      onChange: (s) => commit(hours, minutes, s),
    })
  }

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div
        className={cn(
          'flex h-10 w-full cursor-pointer items-center justify-between rounded-md border bg-bg-card px-3 text-bodyMd transition-colors',
          open ? 'border-primary-default ring-2 ring-primary-default/20' : 'border-border-default',
        )}
        onClick={() => setOpen(!open)}
      >
        <span className={current ? 'text-text-primary' : 'text-text-tertiary'}>
          {current || placeholder}
        </span>
        <span className={cn('text-text-tertiary transition-transform', open ? 'rotate-180' : '')}>
          ▼
        </span>
      </div>
      {open ? (
        <div className="absolute z-50 mt-1 flex overflow-hidden rounded-md border border-border-default bg-bg-card shadow-lg">
          {columns.map((col, ci) => (
            <div
              key={ci}
              className="max-h-48 min-w-[60px] overflow-y-auto border-r border-border-default py-1 last:border-r-0"
            >
              {col.options.map((opt) => (
                <div
                  key={opt}
                  className={cn(
                    'cursor-pointer px-3 py-1.5 text-center text-bodySm transition-colors',
                    col.value === opt
                      ? 'bg-primary-default/10 font-medium text-primary-default'
                      : 'text-text-secondary hover:bg-bg-muted/50 hover:text-text-primary',
                  )}
                  onClick={() => col.onChange(opt)}
                >
                  {pad(opt)}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
