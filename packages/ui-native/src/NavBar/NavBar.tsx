/**
 * NavBar 顶部导航栏（native：iOS / Android）。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { NavBarProps } from './NavBar.types'

export function NavBar({ title, left, right, onBack, showBack = true, style }: NavBarProps) {
  return (
    <XStack
      height={56}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal={16}
      borderBottomWidth={1}
      borderBottomColor="$borderDefault"
      backgroundColor="$bgCard"
      style={style}
    >
      <XStack width={96} alignItems="center">
        {left !== undefined
          ? left
          : showBack && (
              <YStack onPress={onBack} padding={8}>
                <Text fontSize={24} color="$textPrimary">
                  ‹
                </Text>
              </YStack>
            )}
      </XStack>
      <YStack flex={1} alignItems="center">
        <Text fontSize={18} fontWeight="500" color="$textPrimary">
          {title}
        </Text>
      </YStack>
      <XStack width={96} alignItems="center" justifyContent="flex-end" gap={8}>
        {right}
      </XStack>
    </XStack>
  )
}
