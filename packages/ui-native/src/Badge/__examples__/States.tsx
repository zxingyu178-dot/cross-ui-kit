/** Badge 示例：soft/solid/outline 三形态 × 六语义色、两种尺寸、可点击（native）。 */
import { useState, type ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Badge } from '../index'
import type { BadgeTone, BadgeVariant } from '../Badge.types'

const VARIANTS: BadgeVariant[] = ['primary', 'success', 'warning', 'danger', 'info', 'neutral']
const LABEL: Record<BadgeVariant, string> = {
  primary: '主要',
  success: '成功',
  warning: '警告',
  danger: '危险',
  info: '信息',
  neutral: '中性',
}
const TONES: BadgeTone[] = ['soft', 'solid', 'outline']

function Caption({ children }: { children: ReactNode }) {
  return (
    <Text color="$textTertiary" fontSize="$bodySm">
      {children}
    </Text>
  )
}

export function States() {
  const [count, setCount] = useState(0)
  return (
    <YStack gap="$5" padding="$4">
      {TONES.map((tone) => (
        <YStack key={tone} gap="$2">
          <Caption>{tone}</Caption>
          <XStack flexWrap="wrap" gap="$2">
            {VARIANTS.map((v) => (
              <Badge key={v} variant={v} tone={tone}>
                {LABEL[v]}
              </Badge>
            ))}
          </XStack>
        </YStack>
      ))}

      <YStack gap="$2">
        <Caption>尺寸</Caption>
        <XStack gap="$2" alignItems="center">
          <Badge size="md" variant="primary">
            md 标签
          </Badge>
          <Badge size="sm" variant="success">
            sm 标签
          </Badge>
        </XStack>
      </YStack>

      <YStack gap="$2">
        <Caption>可点击</Caption>
        <Badge variant="primary" tone="solid" onPress={() => setCount((c) => c + 1)}>
          点我 {count}
        </Badge>
      </YStack>
    </YStack>
  )
}
