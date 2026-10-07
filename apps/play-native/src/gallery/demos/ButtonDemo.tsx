import { useState } from 'react'
import { Button } from '@kit/ui-native'
import { XStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function ButtonDemo() {
  const [count, setCount] = useState(0)
  return (
    <DemoScreen title="Button 按钮">
      <Section label="主要变体">
        <XStack flexWrap="wrap" gap="$3">
          <Button>主要</Button>
          <Button variant="secondary">次要</Button>
          <Button variant="ghost">幽灵</Button>
          <Button variant="danger">危险</Button>
          <Button variant="link">链接</Button>
        </XStack>
      </Section>

      <Section label="尺寸">
        <XStack flexWrap="wrap" alignItems="center" gap="$3">
          <Button size="sm">小</Button>
          <Button size="md">中</Button>
          <Button size="lg">大</Button>
        </XStack>
      </Section>

      <Section label="状态">
        <XStack flexWrap="wrap" gap="$3">
          <Button loading>加载中</Button>
          <Button disabled>已禁用</Button>
          <Button variant="secondary" disabled>
            次要禁用
          </Button>
        </XStack>
      </Section>

      <Section label="块级与真实交互">
        <Button block onPress={() => setCount((c) => c + 1)}>
          点我计数：{count}
        </Button>
      </Section>
    </DemoScreen>
  )
}
