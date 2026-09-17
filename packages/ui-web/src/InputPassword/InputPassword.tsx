/**
 * InputPassword 密码输入框（web）—— input type="password" + 显示/隐藏切换按钮。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { InputPasswordProps } from './InputPassword.types'

export function InputPassword({
  value,
  onChange,
  placeholder = '请输入密码',
  disabled = false,
  visibilityToggle = true,
  className,
}: InputPasswordProps) {
  const [innerValue, setInnerValue] = useState('')
  const [visible, setVisible] = useState(false)
  const currentValue = value ?? innerValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  return (
    <div className={cn('relative w-full', className)}>
      <input
        type={visible ? 'text' : 'password'}
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          'h-9 w-full rounded-md border border-border-default bg-bg-card px-3 pr-10 text-bodySm text-text-primary outline-none transition-colors placeholder:text-text-tertiary hover:border-primary-default/50 focus:border-primary-default focus:ring-1 focus:ring-primary-default/20',
          disabled ? 'cursor-not-allowed bg-bg-muted opacity-50' : '',
        )}
      />
      {visibilityToggle ? (
        <button
          type="button"
          className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded text-text-tertiary hover:text-text-secondary"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? '隐藏密码' : '显示密码'}
        >
          {visible ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          )}
        </button>
      ) : null}
    </div>
  )
}
