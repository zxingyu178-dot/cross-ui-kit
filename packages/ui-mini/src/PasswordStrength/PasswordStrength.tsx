/**
 * PasswordStrength 密码强度指示器（mini：小程序 / 移动 H5）—— 进度条 + 强度文字。
 */
import { Text, View } from '@tarojs/components'
import type { PasswordStrengthProps, StrengthLevel } from './PasswordStrength.types'
import './PasswordStrength.scss'

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
  empty: { label: '请输入密码', color: 'var(--kit-color-bg-muted)', width: '0%' },
  weak: { label: '弱', color: 'var(--kit-color-danger-default)', width: '33%' },
  medium: { label: '中', color: 'var(--kit-color-warning-default)', width: '66%' },
  strong: { label: '强', color: 'var(--kit-color-success-default)', width: '100%' },
}

export function PasswordStrength({ value, minLength = 8, className = '' }: PasswordStrengthProps) {
  const level = calcStrength(value, minLength)
  const config = levelConfig[level]

  return (
    <View className={`kit-password-strength ${className}`.trim()}>
      <View className="kit-password-strength__bar">
        <View
          className="kit-password-strength__bar-inner"
          style={{ width: config.width, backgroundColor: config.color }}
        />
      </View>
      <View className="kit-password-strength__info">
        <Text className="kit-password-strength__label">
          密码强度：
          <Text className={`kit-password-strength__level kit-password-strength__level--${level}`}>
            {config.label}
          </Text>
        </Text>
        <Text className="kit-password-strength__count">
          {value.length}/{minLength}+
        </Text>
      </View>
    </View>
  )
}
