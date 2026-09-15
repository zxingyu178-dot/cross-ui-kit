/**
 * Steps 步骤条（native：iOS / Android）—— 横向/纵向两方向，四态圆点 + 连线。
 * 状态由 @kit/core 的 deriveStepStatus 推导；颜色只引用 Tamagui token，尺寸数字对齐 web/mini。
 * finish 步骤可点回溯（onPress + accessibilityRole=button）。
 */
import { Stack, Text, XStack, YStack } from 'tamagui'
import { deriveStepStatus, isConnectorActive } from '@kit/core'
import type { StepStatus } from '@kit/core'
import type { StepsProps } from './Steps.types'

const INDICATOR: Record<
  StepStatus,
  { bg: string; color: string; borderColor: string; borderWidth: number }
> = {
  finish: {
    bg: '$primaryDefault',
    color: '$primaryText',
    borderColor: 'transparent',
    borderWidth: 0,
  },
  process: {
    bg: '$bgCard',
    color: '$primaryDefault',
    borderColor: '$primaryDefault',
    borderWidth: 2,
  },
  wait: { bg: '$bgActive', color: '$textTertiary', borderColor: 'transparent', borderWidth: 0 },
  error: { bg: '$dangerBg', color: '$dangerDefault', borderColor: 'transparent', borderWidth: 0 },
}

function Indicator({ status, index }: { status: StepStatus; index: number }) {
  const s = INDICATOR[status]
  return (
    <Stack
      width={28}
      height={28}
      borderRadius={999}
      alignItems="center"
      justifyContent="center"
      backgroundColor={s.bg}
      borderWidth={s.borderWidth}
      borderColor={s.borderColor}
    >
      <Text fontSize="$bodySm" fontWeight="medium" color={s.color}>
        {status === 'finish' ? '✓' : status === 'error' ? '!' : index + 1}
      </Text>
    </Stack>
  )
}

function titleColor(status: StepStatus): string {
  if (status === 'wait') return '$textTertiary'
  if (status === 'error') return '$dangerDefault'
  return '$textPrimary'
}

export function Steps({ items, current = 0, direction = 'horizontal', onChange }: StepsProps) {
  const horizontal = direction === 'horizontal'

  if (horizontal) {
    return (
      <XStack alignItems="flex-start" width="100%">
        {items.map((item, i) => {
          const status = deriveStepStatus(i, current, item.status)
          const active = isConnectorActive(i, current, item.status)
          const clickable = typeof onChange === 'function' && status === 'finish'
          return (
            <XStack key={i} flex={1} alignItems="flex-start">
              <YStack
                alignItems="center"
                flexShrink={0}
                {...(clickable ? { onPress: () => onChange(i), accessibilityRole: 'button' } : {})}
              >
                <Indicator status={status} index={i} />
                <YStack alignItems="center" marginTop={8}>
                  <Text
                    fontSize="$bodySm"
                    color={titleColor(status)}
                    fontWeight={status === 'process' ? 'medium' : 'normal'}
                  >
                    {item.title}
                  </Text>
                  {item.description !== undefined && (
                    <Text
                      marginTop={2}
                      fontSize="$caption"
                      color="$textTertiary"
                      textAlign="center"
                    >
                      {item.description}
                    </Text>
                  )}
                </YStack>
              </YStack>
              {i < items.length - 1 && (
                <Stack
                  flex={1}
                  height={2}
                  minWidth={12}
                  marginTop={13}
                  marginHorizontal={4}
                  borderRadius={1}
                  backgroundColor={active ? '$primaryDefault' : '$borderDefault'}
                />
              )}
            </XStack>
          )
        })}
      </XStack>
    )
  }

  return (
    <YStack width="100%">
      {items.map((item, i) => {
        const status = deriveStepStatus(i, current, item.status)
        const active = isConnectorActive(i, current, item.status)
        const clickable = typeof onChange === 'function' && status === 'finish'
        return (
          <XStack key={i} alignItems="stretch">
            <YStack alignItems="center" flexShrink={0}>
              <Stack
                {...(clickable ? { onPress: () => onChange(i), accessibilityRole: 'button' } : {})}
              >
                <Indicator status={status} index={i} />
              </Stack>
              {i < items.length - 1 && (
                <Stack
                  width={2}
                  flex={1}
                  minHeight={20}
                  marginVertical={2}
                  borderRadius={1}
                  backgroundColor={active ? '$primaryDefault' : '$borderDefault'}
                />
              )}
            </YStack>
            <YStack flex={1} marginLeft={12} paddingBottom={20} minWidth={0}>
              <Text
                fontSize="$bodySm"
                color={titleColor(status)}
                fontWeight={status === 'process' ? 'medium' : 'normal'}
              >
                {item.title}
              </Text>
              {item.description !== undefined && (
                <Text marginTop={2} fontSize="$caption" color="$textTertiary">
                  {item.description}
                </Text>
              )}
            </YStack>
          </XStack>
        )
      })}
    </YStack>
  )
}
