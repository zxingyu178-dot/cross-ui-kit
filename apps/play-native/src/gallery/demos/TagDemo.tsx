import { useState } from 'react'
import { Tag } from '@kit/ui-native'
import { XStack, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function TagDemo() {
  const [kept, setKept] = useState(true)
  return (
    <DemoScreen title="Tag 标签">
      <Section label="语义色（soft）">
        <XStack flexWrap="wrap" gap="$2">
          <Tag>中性</Tag>
          <Tag variant="primary">主要</Tag>
          <Tag variant="success">成功</Tag>
          <Tag variant="warning">警告</Tag>
          <Tag variant="danger">危险</Tag>
          <Tag variant="info">信息</Tag>
        </XStack>
      </Section>

      <Section label="样式 tone">
        <XStack flexWrap="wrap" gap="$2">
          <Tag variant="primary" tone="soft">
            soft
          </Tag>
          <Tag variant="primary" tone="solid">
            solid
          </Tag>
          <Tag variant="primary" tone="outline">
            outline
          </Tag>
        </XStack>
      </Section>

      <Section label="选中 / 可关闭 / 禁用">
        <YStack gap="$3">
          <XStack flexWrap="wrap" gap="$2">
            <Tag variant="primary" selected>
              已选中
            </Tag>
            {kept && (
              <Tag closable onClose={() => setKept(false)}>
                点 x 关闭
              </Tag>
            )}
            <Tag disabled>禁用</Tag>
          </XStack>
        </YStack>
      </Section>
    </DemoScreen>
  )
}
