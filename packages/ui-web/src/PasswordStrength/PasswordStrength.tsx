/**
 * PasswordStrength 密码强度指示器（web）—— 进度条 + 强度文字。
 */
import { cn } from '@kit/core'
import type { PasswordStrengthProps, StrengthLevel } from './PasswordStrength.types'

function calcStrength(value: string, minLength: number): StrengthLevel {
  if (!value) return 'empty'
  let score = 0
  if (value.length >= minLength) score++
  if (/[a-z]/.test(value) && /[A-Z]/.test(value)) score++
  if (/\d/.test(value)) score++
  if (/[^a-zA-Z0-9]/.test(value)) score++
  if (score <= 1) return 'weak'
  if (score <= 3) return 'medium'
  return 'strong'
}

const levelConfig: Record<StrengthLevel, { label: string; color: string; width: string }> = {
  empty: { label: '请输入密码', color: 'bg-bg-muted', width: '0%' },
  weak: { label: '弱', color: 'bg-danger-default', width: '33%' },
  medium: { label: '中', color: 'bg-warning-default', width: '66%' },
  strong: { label: '强', color: 'bg-success-default', width: '100%' },
}

export function PasswordStrength({ value, minLength = 8, className }: PasswordStrengthProps) {
  const level = calcStrength(value, minLength)
  const config = levelConfig[level]

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-muted">
        <div
          className={cn('h-full rounded-full transition-all duration-300', config.color)}
          style={{ width: config.width }}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-caption text-text-tertiary">
          密码强度：
          <span
            className={cn(
              'font-medium',
              level === 'weak'
                ? 'text-danger-default'
                : level === 'medium'
                  ? 'text-warning-default'
                  : level === 'strong'
                    ? 'text-success-default'
                    : 'text-text-tertiary',
            )}
          >
            {config.label}
          </span>
        </span>
        <span className="text-caption text-text-tertiary">
          {value.length}/{minLength}+
        </span>
      </div>
    </div>
  )
}
