/** Progress 示例：基础、语义色、尺寸、百分比、自定义 max（native）。 */
import type { ReactNode } from 'react'
import { Text, YStack } from 'tamagui'
import { Progress } from '../index'

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
      <Row label="基础（primary，0 / 35 / 72 / 100）">
        <YStack gap="$3" width="100%">
          <Progress value={0} />
          <Progress value={35} />
          <Progress value={72} />
          <Progress value={100} />
        </YStack>
      </Row>

      <Row label="语义色调（success / warning / danger，均 60%）">
        <YStack gap="$3" width="100%">
          <Progress value={60} tone="success" />
          <Progress value={60} tone="warning" />
          <Progress value={60} tone="danger" />
        </YStack>
      </Row>

      <Row label="尺寸（sm / md，均 45%）">
        <YStack gap="$3" width="100%">
          <Progress value={45} size="sm" />
          <Progress value={45} size="md" />
        </YStack>
      </Row>

      <Row label="显示百分比（showLabel）">
        <YStack gap="$3" width="100%">
          <Progress value={28} showLabel />
          <Progress value={86} tone="success" showLabel />
        </YStack>
      </Row>

      <Row label="自定义 max（max=200，value=130 → 65%）">
        <Progress value={130} max={200} showLabel />
      </Row>
    </YStack>
  )
}
