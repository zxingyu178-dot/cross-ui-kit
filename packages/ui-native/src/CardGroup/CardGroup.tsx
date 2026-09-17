/**
 * CardGroup 卡片组（native：iOS / Android）—— 多个 Tamagui View 网格排列。
 */
import { Image, Text, XStack, YStack } from 'tamagui'
import type { CardGroupProps } from './CardGroup.types'

export function CardGroup({ items = [], columns = 2, gutter = 12, style }: CardGroupProps) {
  return (
    <XStack flexWrap="wrap" gap={gutter} style={style}>
      {items.map((item) => (
        <YStack
          key={item.key}
          overflow="hidden"
          borderRadius="$lg"
          borderWidth={1}
          borderColor="$borderDefault"
          backgroundColor="$bgCard"
          shadowColor="#000"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.1}
          shadowRadius={4}
          elevation={2}
          width={`${(100 / columns).toFixed(2)}%`}
        >
          {item.cover ? <Image source={{ uri: item.cover }} width="100%" height={120} /> : null}
          <YStack padding={12} gap={4}>
            {item.title ? (
              <Text fontSize="$bodyMd" fontWeight="500" color="$textPrimary">
                {item.title}
              </Text>
            ) : null}
            {item.content ? (
              <Text fontSize="$bodySm" color="$textSecondary">
                {item.content}
              </Text>
            ) : null}
          </YStack>
        </YStack>
      ))}
    </XStack>
  )
}
