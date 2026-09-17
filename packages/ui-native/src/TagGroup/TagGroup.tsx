/**
 * TagGroup 标签组（native：iOS / Android）—— 多个 Tamagui View 排列显示，超出显示 +N。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { TagGroupProps } from './TagGroup.types'

const sizeMap = {
  sm: { height: 20, paddingHorizontal: 8, fontSize: 12 },
  md: { height: 24, paddingHorizontal: 10, fontSize: 13 },
  lg: { height: 28, paddingHorizontal: 12, fontSize: 14 },
}

const colorMap = {
  primary: { bg: '$primaryBg', text: '$primaryDefault', border: '$primaryBorder' },
  success: { bg: '$successBg', text: '$successDefault', border: '$successBorder' },
  warning: { bg: '$warningBg', text: '$warningDefault', border: '$warningBorder' },
  danger: { bg: '$dangerBg', text: '$dangerDefault', border: '$dangerBorder' },
  info: { bg: '$infoBg', text: '$infoDefault', border: '$infoBorder' },
  neutral: { bg: '$neutralBg', text: '$neutralDefault', border: '$neutralBorder' },
}

export function TagGroup({
  items = [],
  max,
  size = 'md',
  variant = 'soft',
  onClose,
  style,
}: TagGroupProps) {
  const displayItems = max !== undefined ? items.slice(0, max) : items
  const remaining = max !== undefined ? items.length - max : 0
  const sizeStyle = sizeMap[size]

  return (
    <XStack flexWrap="wrap" alignItems="center" gap={8} style={style}>
      {displayItems.map((item) => {
        const colorStyle = colorMap[item.color ?? 'neutral']
        const bgColor =
          variant === 'solid'
            ? colorStyle.text
            : variant === 'outline'
              ? 'transparent'
              : colorStyle.bg
        const textColor = variant === 'solid' ? '#fff' : colorStyle.text
        const borderColor = variant === 'solid' ? 'transparent' : colorStyle.border
        return (
          <YStack
            key={item.key}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gap={4}
            height={sizeStyle.height}
            paddingHorizontal={sizeStyle.paddingHorizontal}
            borderRadius="$sm"
            backgroundColor={bgColor}
            borderWidth={variant === 'solid' ? 0 : 1}
            borderColor={borderColor}
          >
            <Text fontSize={sizeStyle.fontSize} fontWeight="500" color={textColor}>
              {item.label}
            </Text>
            {item.closable ? (
              <Text
                fontSize={sizeStyle.fontSize}
                color={textColor}
                opacity={0.6}
                onPress={() => onClose?.(item.key)}
              >
                ×
              </Text>
            ) : null}
          </YStack>
        )
      })}
      {remaining > 0 ? (
        <YStack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          height={sizeStyle.height}
          paddingHorizontal={sizeStyle.paddingHorizontal}
          borderRadius="$sm"
          backgroundColor="$bgMuted"
        >
          <Text fontSize={sizeStyle.fontSize} fontWeight="500" color="$textSecondary">
            +{remaining}
          </Text>
        </YStack>
      ) : null}
    </XStack>
  )
}
