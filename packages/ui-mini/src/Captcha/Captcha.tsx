/**
 * Captcha 验证码输入框（mini：小程序 / 移动 H5）—— 输入框 + 发送按钮（倒计时）。
 */
import { Input, View } from '@tarojs/components'
import { useEffect, useRef, useState } from 'react'
import type { CaptchaProps } from './Captcha.types'
import './Captcha.scss'

export function Captcha({
  value,
  onChange,
  onSend,
  countdown = 60,
  disabled = false,
  placeholder = '请输入验证码',
  maxLength = 6,
  className = '',
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

  const handleChange = (e: { detail: { value: string } }) => {
    const val = e.detail.value
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
    <View className={`kit-captcha ${className}`.trim()}>
      <Input
        className={`kit-captcha__input ${disabled ? 'kit-captcha__input--disabled' : ''}`}
        type="text"
        value={currentValue}
        onInput={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        maxlength={maxLength}
      />
      <View
        className={`kit-captcha__button ${isCounting || disabled ? 'kit-captcha__button--disabled' : ''}`}
        onClick={handleSend}
      >
        {isCounting ? `${remaining}s 后重发` : '获取验证码'}
      </View>
    </View>
  )
}
