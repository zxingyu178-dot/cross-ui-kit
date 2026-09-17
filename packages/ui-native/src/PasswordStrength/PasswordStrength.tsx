/**
 * PasswordStrength 密码强度指示器（native：iOS / Android）—— 进度条 + 强度文字。
 */
import { Text, XStack, YStack } from 'tamagui'
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

const levelConfig: Record<StrengthLevel, { label: string; color: string; width: number }> = {
  empty: { label: '请输入密码', color: '$bgMuted', width: 0 },
  weak: { label: '弱', color: '$dangerDefault', width: 33 },
  medium: { label: '中', color: '$warningDefault', width: 66 },
  strong: { label: '强', color: '$successDefault', width: 100 },
}

export function PasswordStrength({ value, minLength = 8, style }: PasswordStrengthProps) {
  const level = calcStrength(value, minLength)
  const config = levelConfig[level]

  return (
    <YStack gap={6} width="100%" style={style}>
      <YStack width="100%" height={6} borderRadius={3} backgroundColor="$bgMuted" overflow="hidden">
        <YStack
          height="100%"
          borderRadius={3}
          backgroundColor={config.color}
          width={`${config.width}%`}
        />
      </YStack>
      <XStack alignItems="center" justifyContent="space-between">
        <Text fontSize="$caption" color="$textTertiary">
          密码强度：
          <Text fontSize="$caption" fontWeight="500" color={config.color}>
            {config.label}
          </Text>
        </Text>
        <Text fontSize="$caption" color="$textTertiary">
          {value.length}/{minLength}+
        </Text>
      </XStack>
    </YStack>
  )
}
