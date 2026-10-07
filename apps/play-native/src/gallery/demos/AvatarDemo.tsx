import { Avatar } from '@kit/ui-native'
import { XStack, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function AvatarDemo() {
  return (
    <DemoScreen title="Avatar 头像">
      <Section label="尺寸">
        <XStack alignItems="center" gap="$4">
          <Avatar size="sm" name="张三" />
          <Avatar size="md" name="李四" />
          <Avatar size="lg" name="王五" />
        </XStack>
      </Section>

      <Section label="图片 / 失败回退首字">
        <XStack alignItems="center" gap="$4">
          <Avatar src="https://i.pravatar.cc/80?img=3" name="图片" />
          <Avatar src="https://invalid.example.com/bad.png" name="赵星宇" />
        </XStack>
      </Section>

      <Section label="形状 / 自定义内容">
        <YStack gap="$3">
          <XStack gap="$4">
            <Avatar shape="circle" name="圆" />
            <Avatar shape="square" name="方" />
          </XStack>
          <Avatar>
            <XStack width="100%" height="100%" alignItems="center" justifyContent="center">
              自定义
            </XStack>
          </Avatar>
        </YStack>
      </Section>
    </DemoScreen>
  )
}
