import { useState } from 'react'
import { Checkbox } from '@kit/ui-native'
import { YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function CheckboxDemo() {
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  const [ind, setInd] = useState(false)
  return (
    <DemoScreen title="Checkbox 复选框">
      <Section label="受控（可真实切换）">
        <YStack gap="$3">
          <Checkbox checked={a} onChange={setA} label="已勾选项" />
          <Checkbox checked={b} onChange={setB} label="未勾选项" />
        </YStack>
      </Section>

      <Section label="半选状态">
        <Checkbox checked={ind} indeterminate onChange={setInd} label="全选（半选）" />
      </Section>

      <Section label="错误 / 禁用">
        <YStack gap="$3">
          <Checkbox error label="需同意协议" />
          <Checkbox disabled label="禁用未选" />
          <Checkbox disabled defaultChecked label="禁用已选" />
        </YStack>
      </Section>

      <Section label="长文本">
        <Checkbox
          defaultChecked
          label="我已阅读并同意非常非常非常非常非常非常非常非常长的用户协议与隐私政策条款"
        />
      </Section>
    </DemoScreen>
  )
}
