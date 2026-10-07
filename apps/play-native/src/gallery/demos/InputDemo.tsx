import { useState } from 'react'
import { Input } from '@kit/ui-native'
import { Text, YStack } from 'tamagui'
import { DemoScreen, Section } from '../DemoShell'

export default function InputDemo() {
  const [text, setText] = useState('')
  const [pwd, setPwd] = useState('')
  return (
    <DemoScreen title="Input 输入框">
      <Section label="普通受控（可真实输入）">
        <YStack gap="$2">
          <Input value={text} placeholder="请输入内容" onChange={setText} />
          <Text fontSize="$caption" color="$textTertiary">
            当前值：{text || '（空）'}
          </Text>
        </YStack>
      </Section>

      <Section label="类型">
        <YStack gap="$3">
          <Input value={pwd} type="password" placeholder="密码输入" onChange={setPwd} />
          <Input type="number" placeholder="数字键盘" />
          <Input type="email" placeholder="邮箱" />
        </YStack>
      </Section>

      <Section label="错误态">
        <Input error="最多只能输入 11 个字符" defaultValue="12345678901234" />
      </Section>

      <Section label="禁用 / 只读">
        <YStack gap="$3">
          <Input disabled placeholder="禁用态" />
          <Input readOnly defaultValue="只读内容" />
        </YStack>
      </Section>

      <Section label="前缀 / 长文本">
        <YStack gap="$3">
          <Input prefixIcon={<Text color="$textTertiary">⌕</Text>} placeholder="搜索" />
          <Input placeholder="这是一段非常非常非常非常非常非常长的占位提示文本用于验证布局不溢出" />
        </YStack>
      </Section>
    </DemoScreen>
  )
}
