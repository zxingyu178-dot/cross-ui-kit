/** RadioGroup 示例：受控、非受控、横向、尺寸、单项禁用、整组禁用（native）。 */
import { useState, type ReactNode } from 'react'
import { Text, YStack } from 'tamagui'
import { RadioGroup } from '../index'

function Caption({ children }: { children: ReactNode }) {
  return (
    <Text color="$textTertiary" fontSize="$bodyMd">
      {children}
    </Text>
  )
}

const FRUITS = [
  { value: 'apple', label: '苹果' },
  { value: 'banana', label: '香蕉' },
  { value: 'orange', label: '橙子' },
]

export function States() {
  const [fruit, setFruit] = useState('apple')
  const [pay, setPay] = useState('wechat')

  return (
    <YStack gap="$5" padding="$4">
      <YStack gap="$2">
        <Caption>受控（当前选中：{fruit}）</Caption>
        <RadioGroup options={FRUITS} value={fruit} onValueChange={setFruit} />
      </YStack>

      <YStack gap="$2">
        <Caption>非受控（默认香蕉）</Caption>
        <RadioGroup options={FRUITS} defaultValue="banana" />
      </YStack>

      <YStack gap="$2">
        <Caption>横向排列 + 含禁用项</Caption>
        <RadioGroup
          options={[
            { value: 'wechat', label: '微信支付' },
            { value: 'alipay', label: '支付宝' },
            { value: 'cloud', label: '云闪付（维护中）', disabled: true },
          ]}
          value={pay}
          onValueChange={setPay}
          direction="horizontal"
        />
      </YStack>

      <YStack gap="$2">
        <Caption>小号 sm</Caption>
        <RadioGroup options={FRUITS} defaultValue="apple" size="sm" direction="horizontal" />
      </YStack>

      <YStack gap="$2">
        <Caption>整组禁用</Caption>
        <RadioGroup options={FRUITS} defaultValue="apple" disabled />
      </YStack>
    </YStack>
  )
}
