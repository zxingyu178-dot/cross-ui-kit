/**
 * OtpInput 验证码输入框（web）—— 多个 input 框，自动聚焦下一个，支持粘贴。
 */
import { useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { OtpInputProps } from './OtpInput.types'

export function OtpInput({
  value,
  onChange,
  length = 6,
  disabled = false,
  password = false,
  className,
}: OtpInputProps) {
  const [innerValue, setInnerValue] = useState('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const currentValue = value ?? innerValue

  const handleChange = (index: number, val: string) => {
    const char = val.slice(-1)
    if (!/^\d*$/.test(char)) return
    const newValue = currentValue.split('')
    newValue[index] = char
    const result = newValue.join('').slice(0, length)
    if (value === undefined) setInnerValue(result)
    onChange?.(result)
    if (char && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !currentValue[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
    if (value === undefined) setInnerValue(pasted)
    onChange?.(pasted)
    const focusIndex = Math.min(pasted.length, length - 1)
    inputRefs.current[focusIndex]?.focus()
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el
          }}
          type={password ? 'password' : 'text'}
          inputMode="numeric"
          maxLength={1}
          value={currentValue[index] ?? ''}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-md border border-border-default bg-bg-card text-center text-titleSm font-medium text-text-primary outline-none transition-colors hover:border-primary-default/50 focus:border-primary-default focus:ring-1 focus:ring-primary-default/20',
            disabled ? 'cursor-not-allowed bg-bg-muted opacity-50' : '',
          )}
        />
      ))}
    </div>
  )
}
