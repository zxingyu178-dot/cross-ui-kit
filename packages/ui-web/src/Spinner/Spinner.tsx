/**
 * Spinner 加载指示器（web）—— 不确定时长的加载旋转圈。
 * 标准 border 旋转圈 + Tailwind animate-spin（1s linear infinite）；
 * 尺寸取 Tailwind 刻度（= spacing/icon token），轨道与旋转头颜色走 token 语义类。
 * role=status 表达忙碌状态；inverse 用于主色/深色底（白色圈）。
 */
import { cn } from '@kit/core'
import type { SpinnerProps, SpinnerSize, SpinnerTone } from './Spinner.types'

// 直径档：sm 16（icon-sm）、md 24（icon-lg）、lg 32（control-height-sm）
const SIZE: Record<SpinnerSize, string> = {
  sm: 'size-4',
  md: 'size-6',
  lg: 'size-8',
}

// 轨道（border-color）+ 旋转头（border-top-color）
const TONE: Record<SpinnerTone, string> = {
  primary: 'border-border-default border-t-primary-default',
  muted: 'border-border-default border-t-text-tertiary',
  inverse: 'border-white/30 border-t-white',
}

export function Spinner({
  size = 'md',
  tone = 'primary',
  accessibilityLabel,
  className,
  id,
}: SpinnerProps) {
  return (
    <div
      role="status"
      {...(accessibilityLabel !== undefined ? { 'aria-label': accessibilityLabel } : {})}
      {...(id !== undefined ? { id } : {})}
      className={cn(
        'inline-block animate-spin rounded-full border-2',
        SIZE[size],
        TONE[tone],
        className,
      )}
    />
  )
}
