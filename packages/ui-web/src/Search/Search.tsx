/**
 * Search 搜索框（web）—— input + 搜索按钮，支持回车搜索。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { SearchProps } from './Search.types'

export function Search({
  value,
  onChange,
  placeholder = '请输入搜索关键词',
  disabled = false,
  onSearch,
  enterButton = true,
  enterButtonText = '搜索',
  className,
}: SearchProps) {
  const [innerValue, setInnerValue] = useState('')
  const currentValue = value ?? innerValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  const handleSearch = () => {
    onSearch?.(currentValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className={cn('flex w-full items-center gap-2', className)}>
      <div className="relative flex-1">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            'h-9 w-full rounded-md border border-border-default bg-bg-card pl-9 pr-3 text-bodySm text-text-primary outline-none transition-colors placeholder:text-text-tertiary hover:border-primary-default/50 focus:border-primary-default focus:ring-1 focus:ring-primary-default/20',
            disabled ? 'cursor-not-allowed bg-bg-muted opacity-50' : '',
          )}
        />
      </div>
      {enterButton ? (
        <button
          type="button"
          disabled={disabled}
          onClick={handleSearch}
          className={cn(
            'flex h-9 shrink-0 items-center justify-center rounded-md bg-primary-default px-4 text-bodySm font-medium text-white transition-colors hover:bg-primary-default/90',
            disabled ? 'cursor-not-allowed opacity-50' : '',
          )}
        >
          {enterButtonText}
        </button>
      ) : null}
    </div>
  )
}
