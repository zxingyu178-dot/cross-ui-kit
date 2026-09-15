/** Steps 示例：横向可回溯 / 纵向 / 错误态（native）。 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Button } from '../../Button'
import { Steps } from '../index'
import type { StepItem } from '../Steps.types'

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <YStack gap="$4">
      <Text fontSize="$caption" color="$textTertiary">
        {label}
      </Text>
      {children}
    </YStack>
  )
}

const HORIZONTAL: StepItem[] = [
  { title: '填写信息', description: '基础资料' },
  { title: '资质上传', description: '营业执照' },
  { title: '平台审核' },
  { title: '完成开通' },
]

const VERTICAL: StepItem[] = [
  { title: '提交申请', description: '2026-09-15 09:20' },
  { title: '部门审批', description: '审批人：王经理' },
  { title: '财务复核' },
  { title: '归档完成' },
]

export function States() {
  const [current, setCurrent] = useState(2)

  return (
    <YStack gap="$8" padding="$4" backgroundColor="$bgPage">
      <Group label="横向步骤条（current=2，点已完成步骤回溯）">
        <Steps items={HORIZONTAL} current={current} onChange={setCurrent} />
        <XStack gap="$3">
          <Button
            size="sm"
            variant="secondary"
            onPress={() => setCurrent((c) => Math.max(0, c - 1))}
          >
            上一步
          </Button>
          <Button
            size="sm"
            onPress={() => setCurrent((c) => Math.min(HORIZONTAL.length - 1, c + 1))}
          >
            下一步
          </Button>
        </XStack>
      </Group>

      <Group label="纵向步骤条（current=1）">
        <Steps items={VERTICAL} current={1} direction="vertical" />
      </Group>

      <Group label="错误态（当前步显式 status=error）">
        <Steps
          items={[
            { title: '填写信息' },
            { title: '资质上传', status: 'error', description: '图片不清晰，请重新上传' },
            { title: '平台审核' },
          ]}
          current={1}
        />
      </Group>
    </YStack>
  )
}
