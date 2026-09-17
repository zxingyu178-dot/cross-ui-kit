/**
 * DatePicker 日期选择器（web）—— 输入框 + Calendar 弹出面板，
 * 受控优先，支持多种显示格式，点击外部关闭。
 */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@kit/core'
import { Calendar } from '../Calendar'
import type { DatePickerFormat, DatePickerProps } from './DatePicker.types'

function formatDate(date: Date, format: DatePickerFormat): string {
  const y = date.getFullYear()
  const m = (date.getMonth() + 1).toString().padStart(2, '0')
  const d = date.getDate().toString().padStart(2, '0')
  switch (format) {
    case 'YYYY/MM/DD':
      return `${y}/${m}/${d}`
    case 'YYYY年MM月DD日':
      return `${y}年${m}月${d}日`
    case 'YYYY-MM-DD':
    default:
      return `${y}-${m}-${d}`
  }
}

export function DatePicker({
  value,
  defaultValue,
  onChange,
  format = 'YYYY-MM-DD',
  placeholder = '请选择日期',
  disabled = false,
  className,
}: DatePickerProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<Date | undefined>(defaultValue)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const current = isControlled ? value : inner

  const displayText = current ? formatDate(current, format) : ''

  const commit = (date: Date) => {
    if (!isControlled) setInner(date)
    onChange?.(date)
    setOpen(false)
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

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div
        className={cn(
          'flex h-10 w-full cursor-pointer items-center justify-between rounded-md border bg-bg-card px-3 text-bodyMd transition-colors',
          open ? 'border-primary-default ring-2 ring-primary-default/20' : 'border-border-default',
          disabled ? 'cursor-not-allowed opacity-50' : '',
        )}
        onClick={() => !disabled && setOpen(!open)}
      >
        <span className={displayText ? 'text-text-primary' : 'text-text-tertiary'}>
          {displayText || placeholder}
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-tertiary"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>
      {open && !disabled ? (
        <div className="absolute z-50 mt-1 rounded-md border border-border-default bg-bg-card p-2 shadow-lg">
          <Calendar {...(current !== undefined ? { value: current } : {})} onChange={commit} />
        </div>
      ) : null}
    </div>
  )
}
