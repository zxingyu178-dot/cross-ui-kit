/**
 * DateRangePicker 日期范围选择器（web）—— 两个日期输入框 + 连接符。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { DateRangePickerProps } from './DateRangePicker.types'

export function DateRangePicker({
  value,
  onChange,
  placeholder = ['开始日期', '结束日期'],
  disabled = false,
  separator = '至',
  className,
}: DateRangePickerProps) {
  const [innerValue, setInnerValue] = useState<[string, string]>(['', ''])
  const currentValue = value ?? innerValue

  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    const newValue: [string, string] = [val, currentValue[1]]
    if (value === undefined) setInnerValue(newValue)
    onChange?.(newValue)
  }

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    const newValue: [string, string] = [currentValue[0], val]
    if (value === undefined) setInnerValue(newValue)
    onChange?.(newValue)
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div className="relative flex-1">
        <input
          type="date"
          value={currentValue[0]}
          onChange={handleStartChange}
          placeholder={placeholder[0]}
          disabled={disabled}
          className={cn(
            'h-9 w-full rounded-md border border-border-default bg-bg-card px-3 text-bodySm text-text-primary outline-none transition-colors placeholder:text-text-tertiary hover:border-primary-default/50 focus:border-primary-default focus:ring-1 focus:ring-primary-default/20',
            disabled ? 'cursor-not-allowed bg-bg-muted opacity-50' : '',
          )}
        />
      </div>
      <span className="text-bodySm text-text-tertiary">{separator}</span>
      <div className="relative flex-1">
        <input
          type="date"
          value={currentValue[1]}
          onChange={handleEndChange}
          placeholder={placeholder[1]}
          disabled={disabled}
          className={cn(
            'h-9 w-full rounded-md border border-border-default bg-bg-card px-3 text-bodySm text-text-primary outline-none transition-colors placeholder:text-text-tertiary hover:border-primary-default/50 focus:border-primary-default focus:ring-1 focus:ring-primary-default/20',
            disabled ? 'cursor-not-allowed bg-bg-muted opacity-50' : '',
          )}
        />
      </div>
    </div>
  )
}
