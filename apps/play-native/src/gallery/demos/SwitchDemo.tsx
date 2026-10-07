import { useState } from 'react'
import { Switch } from '@kit/ui-native'
import { YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function SwitchDemo() {
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  return (
    <DemoScreen title="Switch 开关">
      <Section label="受控（可真实切换）">
        <YStack gap="$3">
          <Switch checked={a} onCheckedChange={setA} label="开启状态" />
          <Switch checked={b} onCheckedChange={setB} label="关闭状态" />
        </YStack>
      </Section>

      <Section label="加载 / 禁用">
        <YStack gap="$3">
          <Switch loading label="加载中" />
          <Switch disabled label="禁用关闭" />
          <Switch disabled defaultChecked label="禁用开启" />
        </YStack>
      </Section>

      <Section label="尺寸">
        <YStack gap="$3">
          <Switch size="sm" defaultChecked label="小号" />
          <Switch size="md" defaultChecked label="中号" />
        </YStack>
      </Section>
    </DemoScreen>
  )
}
