/** Form 示例：垂直布局（mini）。 */
import { useState } from 'react'
import { Text, View } from '@tarojs/components'
import { Form } from '../index'
import { Input } from '../../Input'
import { Button } from '../../Button'

export function States() {
  const [submitted, setSubmitted] = useState<Record<string, unknown> | null>(null)

  return (
    <View style={{ padding: 12, maxWidth: 400 }}>
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
        <View
          style={{
            marginTop: 12,
            padding: 12,
            borderRadius: 6,
            background: 'rgba(16,185,129,0.1)',
          }}
        >
          <Text style={{ fontSize: 12, color: 'var(--kit-color-success-default)' }}>
            提交成功：{JSON.stringify(submitted)}
          </Text>
        </View>
      ) : null}
    </View>
  )
}
