/**
 * AutoComplete 自动完成（web）—— 输入框 + 下拉候选列表，受控优先，
 * 自定义过滤，键盘无障碍（上下键/回车/Esc）。
 */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { AutoCompleteOption, AutoCompleteProps } from './AutoComplete.types'

function defaultFilter(inputValue: string, option: AutoCompleteOption): boolean {
  const label = typeof option.label === 'string' ? option.label : option.value
  return label.toLowerCase().includes(inputValue.toLowerCase())
}

export function AutoComplete({
  value,
  defaultValue = '',
  onChange,
  onSelect,
  options,
  placeholder,
  disabled = false,
  filterOption = defaultFilter,
  className,
}: AutoCompleteProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  const current = isControlled ? value : inner

  const filteredOptions = current ? options.filter((opt) => filterOption(current, opt)) : options

  const commit = (v: string) => {
    if (!isControlled) setInner(v)
    onChange?.(v)
  }

  const handleSelect = (option: AutoCompleteOption) => {
    if (option.disabled) return
    commit(option.value)
    onSelect?.(option)
    setOpen(false)
    setActiveIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      setOpen(true)
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => Math.min(prev + 1, filteredOptions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => Math.max(prev - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (activeIndex >= 0 && filteredOptions[activeIndex]) {
        handleSelect(filteredOptions[activeIndex])
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
      setActiveIndex(-1)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setActiveIndex(-1)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <input
        type="text"
        className={cn(
          'h-10 w-full rounded-md border bg-bg-card px-3 text-bodyMd text-text-primary outline-none transition-colors placeholder:text-text-tertiary',
          open ? 'border-primary-default ring-2 ring-primary-default/20' : 'border-border-default',
          disabled ? 'cursor-not-allowed opacity-50' : '',
        )}
        value={current}
        onChange={(e) => {
          commit(e.target.value)
          setOpen(true)
          setActiveIndex(-1)
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        role="combobox"
        aria-expanded={open}
        aria-autocomplete="list"
      />
      {open && filteredOptions.length > 0 ? (
        <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border-default bg-bg-card py-1 shadow-lg">
          {filteredOptions.map((opt, i) => (
            <li
              key={opt.value}
              className={cn(
                'cursor-pointer px-3 py-2 text-bodySm transition-colors',
                i === activeIndex
                  ? 'bg-bg-muted text-text-primary'
                  : 'text-text-secondary hover:bg-bg-muted/50 hover:text-text-primary',
                opt.disabled ? 'cursor-not-allowed opacity-40' : '',
              )}
              onClick={() => handleSelect(opt)}
              role="option"
              aria-selected={i === activeIndex}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
