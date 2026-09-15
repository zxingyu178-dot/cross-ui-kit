/**
 * Progress 进度条（native：iOS / Android）—— Tamagui Progress 封装，线性形态。
 * 受控 value/max；Indicator 宽度由 Tamagui 按 value 自动管理；
 * 颜色/高度/圆角只引用 Tamagui token，无障碍 progressbar 语义由 Tamagui 承担。
 */
import { Progress as TamProgress, Text, XStack } from 'tamagui'
import type { ProgressProps, ProgressSize, ProgressTone } from './Progress.types'

const TONE_BAR: Record<ProgressTone, string> = {
  primary: '$primaryDefault',
  success: '$successDefault',
  warning: '$warningDefault',
  danger: '$dangerDefault',
}

// 轨道高度取 spacing 档位：sm=$1(4)、md=$2(8)
const HEIGHT: Record<ProgressSize, string> = {
  sm: '$1',
  md: '$2',
}

export function Progress({
  value,
  max = 100,
  size = 'md',
  tone = 'primary',
  showLabel = false,
  accessibilityLabel,
}: ProgressProps) {
  const safeMax = max > 0 ? max : 100
  const pct = Math.min(100, Math.max(0, (value / safeMax) * 100))
  const label = `${Math.round(pct)}%`

  const bar = (
    <TamProgress
      value={value}
      max={safeMax}
      getValueLabel={() => label}
      height={HEIGHT[size]}
      backgroundColor="$bgActive"
      borderRadius={999}
      overflow="hidden"
      {...(showLabel ? { flex: 1 } : { width: '100%' })}
      {...(accessibilityLabel !== undefined ? { accessibilityLabel } : {})}
    >
      <TamProgress.Indicator backgroundColor={TONE_BAR[tone]} borderRadius={999} />
    </TamProgress>
  )

  if (!showLabel) return bar

  return (
    <XStack flexDirection="row" alignItems="center" gap="$2" width="100%">
      {bar}
      <Text fontSize="$caption" color="$textSecondary" minWidth={34} textAlign="right">
        {label}
      </Text>
    </XStack>
  )
}
