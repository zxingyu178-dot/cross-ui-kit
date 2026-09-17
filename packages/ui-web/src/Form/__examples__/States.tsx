import { useState } from 'react'
import { Form } from '../index'
import { Input } from '../../Input'
import { Button } from '../../Button'
import { Select } from '../../Select'

export function States() {
  const [submitted, setSubmitted] = useState<Record<string, unknown> | null>(null)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">垂直布局（vertical）</span>
        <div className="max-w-md">
          <Form
            layout="vertical"
            initialValues={{ username: '', email: '', role: 'user' }}
            onFinish={(values) => setSubmitted(values)}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              label="邮箱"
              name="email"
              rules={[
                { required: true, message: '请输入邮箱' },
                { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '邮箱格式不正确' },
              ]}
            >
              <Input placeholder="请输入邮箱" />
            </Form.Item>
            <Form.Item label="角色" name="role">
              <Select
                options={[
                  { value: 'user', label: '普通用户' },
                  { value: 'admin', label: '管理员' },
                ]}
              />
            </Form.Item>
            <Form.Item>
              <Button type="submit">提交</Button>
            </Form.Item>
          </Form>
        </div>
        {submitted ? (
          <div className="mt-2 rounded-md border border-success-default/30 bg-success-bg/50 p-3">
            <span className="text-caption text-success-default">
              提交成功：{JSON.stringify(submitted)}
            </span>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">水平布局（horizontal）</span>
        <div className="max-w-lg">
          <Form layout="horizontal" labelWidth={80} initialValues={{ name: '', phone: '' }}>
            <Form.Item label="姓名" name="name" required>
              <Input placeholder="请输入姓名" />
            </Form.Item>
            <Form.Item label="电话" name="phone">
              <Input placeholder="请输入电话" />
            </Form.Item>
            <Form.Item labelWidth={80}>
              <Button type="submit">提交</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
