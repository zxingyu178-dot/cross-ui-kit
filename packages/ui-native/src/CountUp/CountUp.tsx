/**
 * CountUp 数字滚动（native：iOS / Android）—— 数字从 0 滚动到目标值的动画组件。
 */
import { useEffect, useRef, useState } from 'react'
import { Text } from 'tamagui'
import type { CountUpProps } from './CountUp.types'

function formatNumber(num: number, decimals: number, separator: boolean): string {
  const fixed = num.toFixed(decimals)
  if (!separator) return fixed
  const parts = fixed.split('.')
  const intPart = parts[0] ?? ''
  const decPart = parts[1]
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return decPart ? `${formattedInt}.${decPart}` : formattedInt
}

export function CountUp({
  value,
  duration = 1500,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = true,
  fontSize,
  color,
  style,
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const startTime = Date.now()
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(value * eased)
      if (progress >= 1 && timerRef.current) {
        clearInterval(timerRef.current)
      }
    }, 16)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [value, duration])

  return (
    <Text fontWeight="600" color={color ?? '$textPrimary'} fontSize={fontSize} style={style}>
      {prefix}
      {formatNumber(displayValue, decimals, separator)}
      {suffix}
    </Text>
  )
}
