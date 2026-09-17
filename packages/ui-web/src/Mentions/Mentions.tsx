/**
 * Mentions 提及输入（web）—— 输入框 + 弹出选项列表，输入 prefix 时触发。
 */
import { useMemo, useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { MentionOption, MentionsProps } from './Mentions.types'

export function Mentions({
  value,
  onChange,
  options = [],
  prefix = '@',
  placeholder = '请输入',
  disabled = false,
  allowClear = true,
  onSelect,
  className,
}: MentionsProps) {
  const [innerValue, setInnerValue] = useState('')
  const [open, setOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const currentValue = value ?? innerValue

  const filteredOptions = useMemo(() => {
    if (!searchText) return options
    return options.filter(
      (opt) =>
        opt.label.toLowerCase().includes(searchText.toLowerCase()) ||
        opt.key.toLowerCase().includes(searchText.toLowerCase()),
    )
  }, [options, searchText])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (value === undefined) setInnerValue(val)
    onChange?.(val)

    const lastChar = val.slice(-1)
    if (lastChar === prefix) {
      setSearchText('')
      setOpen(true)
    } else if (open) {
      const prefixIndex = val.lastIndexOf(prefix)
      if (prefixIndex >= 0) {
        const afterPrefix = val.slice(prefixIndex + 1)
        if (!afterPrefix.includes(' ') && !afterPrefix.includes('\n')) {
          setSearchText(afterPrefix)
        } else {
          setOpen(false)
        }
      } else {
        setOpen(false)
      }
    }
  }

  const handleSelect = (option: MentionOption) => {
    const prefixIndex = currentValue.lastIndexOf(prefix)
    const newValue = currentValue.slice(0, prefixIndex) + prefix + option.label + ' '
    if (value === undefined) setInnerValue(newValue)
    onChange?.(newValue)
    setOpen(false)
    setSearchText('')
    onSelect?.(option)
    inputRef.current?.focus()
  }

  const handleClear = () => {
    if (value === undefined) setInnerValue('')
    onChange?.('')
    setOpen(false)
    inputRef.current?.focus()
  }

  return (
    <div className={cn('relative w-full', className)}>
      <div
        className={cn(
          'flex h-9 w-full items-center rounded-md border bg-bg-card px-3 transition-colors',
          open
            ? 'border-primary-default ring-1 ring-primary-default/20'
            : 'border-border-default hover:border-primary-default/50',
          disabled ? 'cursor-not-allowed bg-bg-muted opacity-50' : '',
        )}
      >
        <input
          ref={inputRef}
          type="text"
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          className="flex-1 bg-transparent text-bodySm text-text-primary outline-none placeholder:text-text-tertiary"
        />
        {allowClear && currentValue && !disabled ? (
          <button
            type="button"
            className="ml-2 flex h-4 w-4 items-center justify-center rounded-full text-text-tertiary hover:bg-bg-muted hover:text-text-secondary"
            onClick={handleClear}
            aria-label="清空"
          >
            ×
          </button>
        ) : null}
      </div>

      {open && filteredOptions.length > 0 ? (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 max-h-48 overflow-y-auto rounded-md border border-border-default bg-bg-card p-1 shadow-lg">
          {filteredOptions.map((option) => (
            <div
              key={option.key}
              className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-bg-muted/50"
              onClick={() => handleSelect(option)}
            >
              {option.avatar ? (
                <img src={option.avatar} alt="" className="h-6 w-6 rounded-full" />
              ) : (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-default/10 text-caption font-medium text-primary-default">
                  {option.label.charAt(0)}
                </div>
              )}
              <div className="min-w-0 flex-1">
                <div className="truncate text-bodySm text-text-primary">{option.label}</div>
                {option.description ? (
                  <div className="truncate text-caption text-text-tertiary">
                    {option.description}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
