/**
 * CountUp 数字滚动（web）—— 数字从 0 滚动到目标值的动画组件。
 */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@kit/core'
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
  className,
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    startTimeRef.current = null
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(value * eased)
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [value, duration])

  return (
    <span className={cn('font-semibold tabular-nums text-text-primary', className)}>
      {prefix}
      {formatNumber(displayValue, decimals, separator)}
      {suffix}
    </span>
  )
}
