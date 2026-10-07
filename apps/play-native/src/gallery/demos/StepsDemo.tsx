import { useState } from 'react'
import { Button, Steps } from '@kit/ui-native'
import { XStack, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

const ITEMS = [
  { title: '填写信息', description: '基础资料' },
  { title: '上传材料' },
  { title: '审核中' },
  { title: '完成' },
]

export default function StepsDemo() {
  const [cur, setCur] = useState(1)
  return (
    <DemoScreen title="Steps 步骤条">
      <Section label="横向受控（finish 可点回溯）">
        <YStack gap="$4">
          <Steps items={ITEMS} current={cur} onChange={setCur} />
          <XStack gap="$3">
            <Button size="sm" variant="secondary" onPress={() => setCur((c) => Math.max(0, c - 1))}>
              上一步
            </Button>
            <Button size="sm" onPress={() => setCur((c) => Math.min(ITEMS.length - 1, c + 1))}>
              下一步
            </Button>
          </XStack>
        </YStack>
      </Section>

      <Section label="纵向">
        <Steps direction="vertical" current={2} items={ITEMS} />
      </Section>

      <Section label="错误状态">
        <Steps
          current={2}
          items={[
            { title: '第一步' },
            { title: '第二步' },
            { title: '第三步', status: 'error', description: '校验未通过' },
          ]}
        />
      </Section>
    </DemoScreen>
  )
}
