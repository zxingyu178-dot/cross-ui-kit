import { Spinner } from '@kit/ui-native'
import { XStack, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function SpinnerDemo() {
  return (
    <DemoScreen title="Spinner 加载圈">
      <Section label="尺寸">
        <XStack alignItems="center" gap="$6">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </XStack>
      </Section>

      <Section label="色调">
        <YStack gap="$4">
          <Spinner tone="primary" />
          <Spinner tone="muted" />
        </YStack>
      </Section>

      <Section label="反白（置于主色底）">
        <XStack
          backgroundColor="$primaryDefault"
          padding="$6"
          borderRadius="$md"
          alignItems="center"
          gap="$4"
        >
          <Spinner tone="inverse" />
        </XStack>
      </Section>
    </DemoScreen>
  )
}
