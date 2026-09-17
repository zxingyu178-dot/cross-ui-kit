/** Form 示例：垂直布局（native）。 */
import { useState } from 'react'
import { Text, YStack } from 'tamagui'
import { Form } from '../index'
import { Input } from '../../Input'
import { Button } from '../../Button'

export function States() {
  const [submitted, setSubmitted] = useState<Record<string, unknown> | null>(null)

  return (
    <YStack padding={12} maxWidth={400}>
      <Form
        layout="vertical"
        initialValues={{ username: '', email: '' }}
        onFinish={(values) => setSubmitted(values)}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item label="邮箱" name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
          <Input placeholder="请输入邮箱" />
        </Form.Item>
        <Form.Item>
          <Button onPress={() => {}}>提交</Button>
        </Form.Item>
      </Form>
      {submitted ? (
        <YStack marginTop={12} padding={12} borderRadius={6} backgroundColor="rgba(16,185,129,0.1)">
          <Text fontSize={12} color="$successDefault">
            提交成功：{JSON.stringify(submitted)}
          </Text>
        </YStack>
      ) : null}
    </YStack>
  )
}
