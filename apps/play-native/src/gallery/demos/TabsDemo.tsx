import { useState } from 'react'
import { Tabs } from '@kit/ui-native'
import { Text } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function TabsDemo() {
  const [v, setV] = useState('1')
  return (
    <DemoScreen title="Tabs 标签页">
      <Section label="受控（可真实切换）">
        <Tabs
          value={v}
          onValueChange={setV}
          items={[
            { value: '1', label: '概览', content: <Text color="$textSecondary">概览内容</Text> },
            { value: '2', label: '详情', content: <Text color="$textSecondary">详情内容</Text> },
            {
              value: '3',
              label: '禁用',
              disabled: true,
              content: <Text>不可见</Text>,
            },
          ]}
        />
      </Section>

      <Section label="小号">
        <Tabs
          size="sm"
          defaultValue="a"
          items={[
            { value: 'a', label: '日', content: <Text>日视图</Text> },
            { value: 'b', label: '周', content: <Text>周视图</Text> },
          ]}
        />
      </Section>
    </DemoScreen>
  )
}
