/** Skeleton 示例：rect/circle/text 与卡片、列表组合（native）。 */
import type { ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Skeleton } from '../index'

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
    <YStack gap="$5" padding="$4" width="100%">
      <Row label="矩形块 rect（默认高 16 / 覆盖宽高）">
        <YStack gap="$3" width="100%">
          <Skeleton />
          <Skeleton height={20} width="66%" />
          <Skeleton height={96} />
        </YStack>
      </Row>

      <Row label="圆形 circle（sm 24 / md 40 / lg 56）">
        <XStack alignItems="center" gap="$4">
          <Skeleton variant="circle" size="sm" />
          <Skeleton variant="circle" size="md" />
          <Skeleton variant="circle" size="lg" />
        </XStack>
      </Row>

      <Row label="文本 text（多行，末行收窄 60%）">
        <YStack gap="$3" width="100%">
          <Skeleton variant="text" lines={3} />
          <Skeleton variant="text" lines={5} />
        </YStack>
      </Row>

      <Row label="组合：用户卡片加载态">
        <XStack alignItems="center" gap="$3" width="100%">
          <Skeleton variant="circle" size="md" />
          <YStack gap="$2" flex={1}>
            <Skeleton height={14} width="50%" />
            <Skeleton variant="text" lines={2} />
          </YStack>
        </XStack>
      </Row>

      <Row label="组合：列表项加载态">
        <YStack gap="$4" width="100%">
          {[0, 1, 2].map((i) => (
            <XStack key={i} alignItems="center" gap="$3">
              <Skeleton variant="circle" size="sm" />
              <YStack flex={1}>
                <Skeleton variant="text" lines={1} />
              </YStack>
            </XStack>
          ))}
        </YStack>
      </Row>
    </YStack>
  )
}
