/** Input 示例：基础、尺寸、密码、错误、禁用（native）。 */
import { YStack } from 'tamagui'
import { useState } from 'react'
import { Input } from '../index'

export function States() {
  const [name, setName] = useState('')

  return (
    <YStack gap={12} padding={16} width={300}>
      <Input
        placeholder="基础输入框"
        value={name}
        onChange={setName}
        accessibilityLabel="基础输入框"
      />
      <Input size="sm" placeholder="小号" accessibilityLabel="小号输入框" />
      <Input size="md" placeholder="中号（默认）" accessibilityLabel="中号输入框" />
      <Input size="lg" placeholder="大号" accessibilityLabel="大号输入框" />
      <Input type="password" placeholder="密码输入" accessibilityLabel="密码" />
      <Input type="number" placeholder="数字键盘" accessibilityLabel="数字输入" />
      <Input error="该字段为必填项" placeholder="错误态" accessibilityLabel="错误输入框" />
      <Input
        disabled
        placeholder="禁用态"
        defaultValue="不可编辑"
        accessibilityLabel="禁用输入框"
      />
    </YStack>
  )
}
