/**
 * Calendar 日历（web）—— div 表格布局自建，支持日期选择、月份切换、
 * 受控优先，date 模式。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { CalendarProps } from './Calendar.types'

const WEEK_DAYS = ['日', '一', '二', '三', '四', '五', '六']

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function Calendar({
  value,
  defaultValue,
  onChange,
  mode: _mode = 'date',
  fullscreen = false,
  className,
}: CalendarProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<Date>(defaultValue ?? new Date())
  const [viewDate, setViewDate] = useState<Date>(inner)
  const current = isControlled ? value : inner

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)

  const commit = (date: Date) => {
    if (!isControlled) setInner(date)
    onChange?.(date)
  }

  const prevMonth = () => setViewDate(new Date(year, month - 1, 1))
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1))

  return (
    <div
      className={cn(
        fullscreen ? 'w-full' : 'w-72',
        'rounded-md border border-border-default bg-bg-card p-4',
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-bg-muted hover:text-text-primary"
          onClick={prevMonth}
          aria-label="上个月"
        >
          ‹
        </button>
        <span className="text-bodyMd font-medium text-text-primary">
          {year}年{month + 1}月
        </span>
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-bg-muted hover:text-text-primary"
          onClick={nextMonth}
          aria-label="下个月"
        >
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {WEEK_DAYS.map((d) => (
          <div key={d} className="py-1 text-center text-caption text-text-tertiary">
            {d}
          </div>
        ))}
        {days.map((d, i) => (
          <div key={i} className="flex items-center justify-center">
            {d ? (
              <button
                type="button"
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-bodySm transition-colors',
                  isSameDay(current, new Date(year, month, d))
                    ? 'bg-primary-default text-white'
                    : 'text-text-primary hover:bg-bg-muted',
                )}
                onClick={() => commit(new Date(year, month, d))}
              >
                {d}
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
