/** Spinner 示例：尺寸、色调、反白、带文字（native）。 */
import type { ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Spinner } from '../index'

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <YStack gap="$2">
      <Text color="$textTertiary" fontSize="$caption">
        {label}
      </Text>
      {children}
    </YStack>
  )
}

export function States() {
  return (
    <YStack gap="$5" padding="$4">
      <Row label="尺寸（sm 16 / md 24 / lg 32）">
        <XStack alignItems="center" gap="$4">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </XStack>
      </Row>

      <Row label="色调（primary / muted）">
        <XStack alignItems="center" gap="$4">
          <Spinner tone="primary" />
          <Spinner tone="muted" />
        </XStack>
      </Row>

      <Row label="反白 inverse（主色底上）">
        <XStack
          alignItems="center"
          gap="$2"
          alignSelf="flex-start"
          backgroundColor="$primaryDefault"
          borderRadius="$md"
          paddingHorizontal="$4"
          paddingVertical="$2"
        >
          <Spinner size="sm" tone="inverse" />
          <Text color="#ffffff" fontSize="$bodySm">
            提交中…
          </Text>
        </XStack>
      </Row>

      <Row label="带文字（水平排列）">
        <XStack alignItems="center" gap="$2">
          <Spinner size="sm" />
          <Text color="$textSecondary" fontSize="$bodySm">
            正在加载数据，请稍候
          </Text>
        </XStack>
      </Row>
    </YStack>
  )
}
