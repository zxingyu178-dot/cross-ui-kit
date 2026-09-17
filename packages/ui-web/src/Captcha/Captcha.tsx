/**
 * Captcha 验证码输入框（web）—— 输入框 + 发送按钮（倒计时）。
 */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { CaptchaProps } from './Captcha.types'

export function Captcha({
  value,
  onChange,
  onSend,
  countdown = 60,
  disabled = false,
  placeholder = '请输入验证码',
  maxLength = 6,
  className,
}: CaptchaProps) {
  const [innerValue, setInnerValue] = useState('')
  const [remaining, setRemaining] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const currentValue = value ?? innerValue

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    if (value === undefined) setInnerValue(val)
    onChange?.(val)
  }

  const handleSend = async () => {
    if (remaining > 0 || disabled) return
    await onSend?.()
    setRemaining(countdown)
    timerRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const isCounting = remaining > 0

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <input
        type="text"
        inputMode="numeric"
        value={currentValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
        className={cn(
          'h-9 flex-1 rounded-md border border-border-default bg-bg-card px-3 text-bodySm text-text-primary outline-none transition-colors placeholder:text-text-tertiary hover:border-primary-default/50 focus:border-primary-default focus:ring-1 focus:ring-primary-default/20',
          disabled ? 'cursor-not-allowed bg-bg-muted opacity-50' : '',
        )}
      />
      <button
        type="button"
        onClick={handleSend}
        disabled={isCounting || disabled}
        className={cn(
          'h-9 shrink-0 rounded-md px-4 text-bodySm font-medium transition-colors',
          isCounting || disabled
            ? 'cursor-not-allowed bg-bg-muted text-text-tertiary'
            : 'bg-primary-default text-white hover:bg-primary-default/90 active:bg-primary-default/80',
        )}
      >
        {isCounting ? `${remaining}s 后重发` : '获取验证码'}
      </button>
    </div>
  )
}
