/**
 * Captcha 验证码输入框（native：iOS / Android）—— 输入框 + 发送按钮（倒计时）。
 */
import { useEffect, useRef, useState } from 'react'
import { Button, Input, XStack } from 'tamagui'
import type { CaptchaProps } from './Captcha.types'

export function Captcha({
  value,
  onChange,
  onSend,
  countdown = 60,
  disabled = false,
  placeholder = '请输入验证码',
  maxLength = 6,
  style,
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

  const handleChange = (val: string) => {
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
    <XStack alignItems="center" gap={8} width="100%" style={style}>
      <Input
        flex={1}
        height={36}
        paddingHorizontal={12}
        fontSize="$bodySm"
        color="$textPrimary"
        placeholder={placeholder}
        placeholderTextColor="$textTertiary"
        value={currentValue}
        onChangeText={handleChange}
        editable={!disabled}
        maxLength={maxLength}
        keyboardType="numeric"
        backgroundColor={disabled ? '$bgMuted' : '$bgCard'}
        opacity={disabled ? 0.5 : 1}
        borderWidth={1}
        borderColor="$borderDefault"
        borderRadius="$md"
      />
      <Button
        height={36}
        paddingHorizontal={16}
        borderRadius="$md"
        backgroundColor={isCounting || disabled ? '$bgMuted' : '$primaryDefault'}
        color={isCounting || disabled ? '$textTertiary' : '#fff'}
        fontSize="$bodySm"
        fontWeight="500"
        disabled={isCounting || disabled}
        onPress={handleSend}
      >
        {isCounting ? `${remaining}s 后重发` : '获取验证码'}
      </Button>
    </XStack>
  )
}
