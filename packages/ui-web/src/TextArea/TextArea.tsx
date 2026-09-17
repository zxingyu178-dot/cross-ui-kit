/**
 * TextArea 多行文本框（web）—— textarea 元素，支持字数统计、自适应高度。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { TextAreaProps } from './TextArea.types'

export function TextArea({
  value,
  onChange,
  placeholder = '请输入',
  disabled = false,
  rows = 3,
  maxLength,
  showCount = false,
  autoSize = false,
  className,
}: TextAreaProps) {
  const [innerValue, setInnerValue] = useState('')
  const currentValue = value ?? innerValue

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  return (
    <div className={cn('relative w-full', className)}>
      <textarea
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        className={cn(
          'w-full resize-none rounded-md border border-border-default bg-bg-card px-3 py-2 text-bodySm text-text-primary outline-none transition-colors placeholder:text-text-tertiary hover:border-primary-default/50 focus:border-primary-default focus:ring-1 focus:ring-primary-default/20',
          disabled ? 'cursor-not-allowed bg-bg-muted opacity-50' : '',
          showCount ? 'pb-6' : '',
        )}
        style={autoSize ? { overflow: 'hidden' } : undefined}
      />
      {showCount ? (
        <div className="absolute bottom-2 right-3 text-caption text-text-tertiary">
          {currentValue.length}
          {maxLength !== undefined ? `/${maxLength}` : ''}
        </div>
      ) : null}
    </div>
  )
}
