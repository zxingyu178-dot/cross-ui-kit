/**
 * StatusDot 状态点（native：iOS / Android）。
 */
import { Text, View, XStack } from 'tamagui'
import type { StatusDotProps } from './StatusDot.types'

const toneColor: Record<string, string> = {
  success: '$successDefault',
  warning: '$warningDefault',
  danger: '$dangerDefault',
  info: '$infoDefault',
  neutral: '$neutralDefault',
  primary: '$primaryDefault',
}

export function StatusDot({
  tone = 'neutral',
  size = 8,
  outlined = false,
  text,
  style,
}: StatusDotProps) {
  return (
    <XStack alignItems="center" gap={6} style={style}>
      <View
        width={size}
        height={size}
        borderRadius={size}
        backgroundColor={toneColor[tone]}
        borderWidth={outlined ? 2 : 0}
        borderColor="$bgCard"
      />
      {text ? (
        <Text fontSize={13} color="$textSecondary">
          {text}
        </Text>
      ) : null}
    </XStack>
  )
}
