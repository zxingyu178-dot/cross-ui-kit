/**
 * FormValidationPage 分步校验表单页（web）—— 字段实时校验 + 错误提示 + 提交。
 */
import { useState } from 'react'
import { Card, Input, Button, Form, FormItem } from '@kit/ui-web'

interface FormValues {
  username: string
  email: string
  phone: string
  password: string
  confirm: string
}

export function FormValidationPage() {
  const [values, setValues] = useState<FormValues>({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({})

  const set = (k: keyof FormValues) => (v: string) => {
    setValues((s) => ({ ...s, [k]: v }))
    setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormValues, string>> = {}
    if (!values.username.trim()) e.username = '请输入用户名'
    else if (values.username.length < 3) e.username = '用户名至少 3 个字符'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = '邮箱格式不正确'
    if (!/^1[3-9]\d{9}$/.test(values.phone)) e.phone = '手机号格式不正确'
    if (values.password.length < 6) e.password = '密码至少 6 位'
    if (values.confirm !== values.password) e.confirm = '两次密码不一致'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleFinish = () => {
    if (validate()) {
      // 校验通过，提交
    }
  }

  return (
    <Card className="mx-auto max-w-lg">
      <h3 className="mb-4 text-titleSm font-medium text-text-primary">注册账号（实时校验）</h3>
      <Form onFinish={handleFinish}>
        <FormItem label="用户名" required>
          <Input value={values.username} onChange={set('username')} placeholder="至少 3 个字符" />
          {errors.username ? <p className="text-bodySm text-danger">{errors.username}</p> : null}
        </FormItem>
        <FormItem label="邮箱" required>
          <Input value={values.email} onChange={set('email')} placeholder="name@example.com" />
          {errors.email ? <p className="text-bodySm text-danger">{errors.email}</p> : null}
        </FormItem>
        <FormItem label="手机号" required>
          <Input value={values.phone} onChange={set('phone')} placeholder="11 位手机号" />
          {errors.phone ? <p className="text-bodySm text-danger">{errors.phone}</p> : null}
        </FormItem>
        <FormItem label="密码" required>
          <Input
            type="password"
            value={values.password}
            onChange={set('password')}
            placeholder="至少 6 位"
          />
          {errors.password ? <p className="text-bodySm text-danger">{errors.password}</p> : null}
        </FormItem>
        <FormItem label="确认密码" required>
          <Input
            type="password"
            value={values.confirm}
            onChange={set('confirm')}
            placeholder="再次输入密码"
          />
          {errors.confirm ? <p className="text-bodySm text-danger">{errors.confirm}</p> : null}
        </FormItem>
        <Button variant="primary" block size="lg" type="submit">
          注 册
        </Button>
      </Form>
    </Card>
  )
}
