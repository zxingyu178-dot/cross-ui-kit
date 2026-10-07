/**
 * Timeline 时间线（native：iOS / Android）—— Tamagui YStack/XStack+Text 自建垂直时间轴，
 * 语义色圆点 + 时间 + 标题 + 描述，支持倒序与自定义圆点。颜色只引用 $token。
 */
import { Text, XStack, YStack } from 'tamagui'
import type { TimelineColor, TimelineProps } from './Timeline.types'

const DOT_COLOR: Record<TimelineColor, string> = {
  primary: '$primaryDefault',
  success: '$successDefault',
  warning: '$warningDefault',
  error: '$dangerDefault',
  info: '$infoDefault',
  neutral: '$borderDefault',
}

export function Timeline({ items, reverse = false, style }: TimelineProps) {
  const list = reverse ? [...items].reverse() : items
  return (
    <YStack position="relative" style={style}>
      <YStack
        position="absolute"
        left={7}
        top={8}
        bottom={8}
        width={1}
        backgroundColor="$borderDefault"
      />
      {list.map((item, i) => {
        const color = item.color ?? 'neutral'
        const dotType = item.dotType ?? 'outline'
        const isLast = i === list.length - 1
        return (
          <XStack key={i} gap={12} paddingBottom={isLast ? 0 : 24}>
            {item.customDot ? (
              <XStack zIndex={1} flexShrink={0} alignItems="center" justifyContent="center">
                {item.customDot}
              </XStack>
            ) : (
              <YStack
                zIndex={1}
                flexShrink={0}
                marginTop={5}
                width={15}
                height={15}
                borderRadius={999}
                borderWidth={2}
                borderColor={DOT_COLOR[color]}
                backgroundColor={dotType === 'solid' ? DOT_COLOR[color] : '$bgCard'}
              />
            )}
            <YStack flex={1} minWidth={0} gap={4}>
              {item.time ? (
                <Text fontSize="$caption" color="$textTertiary" lineHeight={1.4}>
                  {item.time}
                </Text>
              ) : null}
              {item.title ? (
                <Text fontSize="$bodyMd" fontWeight={500} color="$textPrimary" lineHeight={1.4}>
                  {item.title}
                </Text>
              ) : null}
              {item.description ? (
                <Text fontSize="$bodySm" color="$textSecondary" lineHeight={1.5} marginTop={2}>
                  {item.description}
                </Text>
              ) : null}
            </YStack>
          </XStack>
        )
      })}
    </YStack>
  )
}
