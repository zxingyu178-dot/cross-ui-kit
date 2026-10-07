import { useState } from 'react'
import { Select } from '@kit/ui-native'
import { Text, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

const OPTIONS = [
  { label: '北京市', value: 'bj' },
  { label: '上海市', value: 'sh' },
  { label: '广州市', value: 'gz' },
  { label: '深圳市（禁用）', value: 'sz', disabled: true },
]

export default function SelectDemo() {
  const [v, setV] = useState<string | undefined>('bj')
  return (
    <DemoScreen title="Select 选择器">
      <Section label="受控（底部动作面板选择）">
        <YStack gap="$2">
          <Select options={OPTIONS} value={v} onChange={setV} />
          <Text fontSize="$caption" color="$textTertiary">
            已选：{v ?? '（未选择）'}
          </Text>
        </YStack>
      </Section>

      <Section label="占位 / 尺寸">
        <YStack gap="$3">
          <Select options={OPTIONS} placeholder="请选择城市" size="sm" />
          <Select options={OPTIONS} placeholder="未选择状态" size="lg" />
        </YStack>
      </Section>

      <Section label="错误 / 禁用">
        <YStack gap="$3">
          <Select options={OPTIONS} error="必选" value={undefined} />
          <Select options={OPTIONS} disabled placeholder="禁用态" />
        </YStack>
      </Section>
    </DemoScreen>
  )
}
