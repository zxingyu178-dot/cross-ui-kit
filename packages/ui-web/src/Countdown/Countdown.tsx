/**
 * Countdown 倒计时（web）—— useEffect + setInterval 倒计时，支持格式化。
 */
import { useEffect, useState } from 'react'
import { cn } from '@kit/core'
import type { CountdownProps, CountdownTime } from './Countdown.types'

function parseTime(remain: number): CountdownTime {
  const ms = Math.max(0, remain)
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
    milliseconds: ms % 1000,
  }
}

function formatTime(time: CountdownTime, format: string): string {
  return format
    .replace('DD', String(time.days).padStart(2, '0'))
    .replace('HH', String(time.hours).padStart(2, '0'))
    .replace('mm', String(time.minutes).padStart(2, '0'))
    .replace('ss', String(time.seconds).padStart(2, '0'))
    .replace('SSS', String(time.milliseconds).padStart(3, '0'))
}

export function Countdown({ value = 0, format = 'HH:mm:ss', onFinish, className }: CountdownProps) {
  const [remain, setRemain] = useState(() => {
    const now = Date.now()
    return value > now ? value - now : value
  })

  useEffect(() => {
    const now = Date.now()
    const target = value > now ? value : now + value
    const timer = setInterval(() => {
      const left = target - Date.now()
      if (left <= 0) {
        setRemain(0)
        clearInterval(timer)
        onFinish?.()
      } else {
        setRemain(left)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [value, onFinish])

  const time = parseTime(remain)

  return (
    <span className={cn('font-mono text-bodyMd tabular-nums text-text-primary', className)}>
      {formatTime(time, format)}
    </span>
  )
}
