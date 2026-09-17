/**
 * AvatarGroup 头像组（native：iOS / Android）—— 多个 Tamagui View 堆叠显示，超出显示 +N。
 */
import { Image, Text, XStack, YStack } from 'tamagui'
import type { AvatarGroupProps } from './AvatarGroup.types'

export function AvatarGroup({
  items = [],
  max = 5,
  size = 32,
  shape = 'circle',
  style,
}: AvatarGroupProps) {
  const displayItems = items.slice(0, max)
  const remaining = items.length - max

  return (
    <XStack alignItems="center" style={style}>
      {displayItems.map((item, index) => (
        <YStack
          key={item.key}
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          borderWidth={2}
          borderColor="$bgCard"
          width={size}
          height={size}
          borderRadius={shape === 'circle' ? size / 2 : '$md'}
          backgroundColor={item.color ?? '$primaryDefault'}
          marginLeft={index > 0 ? -size / 4 : 0}
          zIndex={displayItems.length - index}
        >
          {item.src ? (
            <Image source={{ uri: item.src }} width="100%" height="100%" />
          ) : (
            <Text fontSize={size * 0.4} fontWeight="500" color="#fff">
              {item.text ?? item.key.charAt(0).toUpperCase()}
            </Text>
          )}
        </YStack>
      ))}
      {remaining > 0 ? (
        <YStack
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          borderWidth={2}
          borderColor="$bgCard"
          width={size}
          height={size}
          borderRadius={shape === 'circle' ? size / 2 : '$md'}
          backgroundColor="$bgMuted"
          marginLeft={-size / 4}
          zIndex={0}
        >
          <Text fontSize={size * 0.35} fontWeight="500" color="$textSecondary">
            +{remaining}
          </Text>
        </YStack>
      ) : null}
    </XStack>
  )
}
