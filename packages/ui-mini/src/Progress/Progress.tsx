/**
 * Progress 进度条（mini：小程序 / 移动 H5）—— NutUI Progress 封装，线性形态。
 * 统一契约 value/max（内部换算 percent）；填充色/轨道色通过 CSS 变量传入，
 * 其余视觉在 Progress.scss 全量 token 化。
 */
import { Progress as NutProgress } from '@nutui/nutui-react-taro'
import { cn } from '@kit/core'
import type { ProgressProps, ProgressSize, ProgressTone } from './Progress.types'
import './Progress.scss'

const TONE_VAR: Record<ProgressTone, string> = {
  primary: 'var(--kit-color-primary-default)',
  success: 'var(--kit-color-success-default)',
  warning: 'var(--kit-color-warning-default)',
  danger: 'var(--kit-color-danger-default)',
}

// 轨道高度取 spacing 档位：sm=spacing-1(4)、md=spacing-2(8)
const HEIGHT: Record<ProgressSize, string> = {
  sm: '4px',
  md: '8px',
}

export function Progress({
  value,
  max = 100,
  size = 'md',
  tone = 'primary',
  showLabel = false,
  className,
}: ProgressProps) {
  const safeMax = max > 0 ? max : 100
  const pct = Math.min(100, Math.max(0, (value / safeMax) * 100))

  return (
    <NutProgress
      className={cn('kit-progress', className)}
      percent={pct}
      strokeWidth={HEIGHT[size]}
      activeColor={TONE_VAR[tone]}
      backgroundColor="var(--kit-color-bg-active)"
      borderRadius="999px"
      showText={showLabel}
      animated
      active
      duration={250}
    />
  )
}
