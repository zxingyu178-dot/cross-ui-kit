import { useState } from 'react'
import { Button, Progress } from '@kit/ui-native'
import { XStack, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function ProgressDemo() {
  const [v, setV] = useState(40)
  return (
    <DemoScreen title="Progress 进度条">
      <Section label="受控 + 标签（可真实变化）">
        <YStack gap="$3">
          <Progress value={v} showLabel />
          <XStack gap="$3">
            <Button size="sm" variant="secondary" onPress={() => setV((x) => Math.max(0, x - 20))}>
              减少
            </Button>
            <Button size="sm" onPress={() => setV((x) => Math.min(100, x + 20))}>
              增加
            </Button>
          </XStack>
        </YStack>
      </Section>

      <Section label="语义色">
        <YStack gap="$3">
          <Progress value={100} tone="success" />
          <Progress value={70} tone="warning" />
          <Progress value={30} tone="danger" />
        </YStack>
      </Section>

      <Section label="尺寸">
        <YStack gap="$3">
          <Progress value={60} size="sm" />
          <Progress value={60} size="md" />
        </YStack>
      </Section>
    </DemoScreen>
  )
}
