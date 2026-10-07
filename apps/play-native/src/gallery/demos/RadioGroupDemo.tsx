import { useState } from 'react'
import { RadioGroup } from '@kit/ui-native'
import { Text, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

const OPTIONS = [
  { value: 'a', label: '选项一' },
  { value: 'b', label: '选项二' },
  { value: 'c', label: '选项三（禁用）', disabled: true },
]

export default function RadioGroupDemo() {
  const [v, setV] = useState('a')
  return (
    <DemoScreen title="RadioGroup 单选组">
      <Section label="纵向受控（可真实选择）">
        <YStack gap="$2">
          <RadioGroup options={OPTIONS} value={v} onValueChange={setV} />
          <Text fontSize="$caption" color="$textTertiary">
            已选：{v}
          </Text>
        </YStack>
      </Section>

      <Section label="横向">
        <RadioGroup
          direction="horizontal"
          options={[
            { value: 'x', label: '微信' },
            { value: 'y', label: '支付宝' },
          ]}
          defaultValue="x"
        />
      </Section>

      <Section label="整体禁用">
        <RadioGroup disabled options={OPTIONS} defaultValue="a" />
      </Section>
    </DemoScreen>
  )
}
