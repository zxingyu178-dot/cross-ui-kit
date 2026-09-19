/**
 * Cell 列表项（native：iOS / Android）。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { CellProps } from './Cell.types'

export function Cell({
  title,
  description,
  icon,
  right,
  onClick,
  clickable = false,
  style,
}: CellProps) {
  const clickableNow = clickable || onClick !== undefined
  return (
    <XStack
      alignItems="center"
      gap={12}
      paddingHorizontal={16}
      paddingVertical={12}
      borderBottomWidth={1}
      borderBottomColor="$borderDefault"
      backgroundColor="$bgCard"
      {...(clickableNow ? { onPress: onClick } : {})}
      style={style}
    >
      {icon ? <YStack>{icon}</YStack> : null}
      <YStack flex={1} gap={2}>
        {title ? (
          <Text fontSize={14} color="$textPrimary">
            {title}
          </Text>
        ) : null}
        {description ? (
          <Text fontSize={12} color="$textTertiary">
            {description}
          </Text>
        ) : null}
      </YStack>
      <XStack alignItems="center" gap={6}>
        {right ? (
          <Text fontSize={13} color="$textSecondary">
            {right}
          </Text>
        ) : null}
        {clickableNow && right === undefined ? (
          <Text fontSize={16} color="$textTertiary">
            ›
          </Text>
        ) : null}
      </XStack>
    </XStack>
  )
}
