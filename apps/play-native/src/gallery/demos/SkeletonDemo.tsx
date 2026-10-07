import { Skeleton } from '@kit/ui-native'
import { XStack, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function SkeletonDemo() {
  return (
    <DemoScreen title="Skeleton 骨架屏">
      <Section label="矩形">
        <YStack gap="$3">
          <Skeleton variant="rect" />
          <Skeleton variant="rect" height={80} />
        </YStack>
      </Section>

      <Section label="圆形（头像占位）">
        <XStack alignItems="center" gap="$4">
          <Skeleton variant="circle" size="sm" />
          <Skeleton variant="circle" size="md" />
          <Skeleton variant="circle" size="lg" />
        </XStack>
      </Section>

      <Section label="文本行">
        <Skeleton variant="text" lines={4} />
      </Section>

      <Section label="自定义尺寸">
        <Skeleton variant="rect" width={160} height={48} />
      </Section>
    </DemoScreen>
  )
}
