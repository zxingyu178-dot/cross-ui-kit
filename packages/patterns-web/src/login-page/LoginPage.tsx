/**
 * LoginPage 登录页模板（web）—— 只编排已登记组件，数据走 core。
 */
import { useState } from 'react'
import { Button, Input, InputPassword, Card, Form, FormItem, Divider } from '@kit/ui-web'

export interface LoginPageValues {
  username: string
  password: string
}

export interface LoginPageProps {
  title?: string
  subtitle?: string
  onSubmit?: (values: LoginPageValues) => void
  onRegister?: () => void
  onForgot?: () => void
  loading?: boolean
}

export function LoginPage({
  title = '欢迎登录',
  subtitle = '请输入账号密码继续',
  onSubmit,
  onRegister,
  onForgot,
  loading = false,
}: LoginPageProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg-secondary p-6">
      <Card variant="elevated" className="w-full max-w-md">
        <div className="mb-6 flex flex-col items-center gap-1">
          <h1 className="text-titleMd font-medium text-text-primary">{title}</h1>
          <p className="text-bodySm text-text-secondary">{subtitle}</p>
        </div>
        <Form onFinish={(values) => onSubmit?.(values as unknown as LoginPageValues)}>
          <div className="flex flex-col gap-4">
            <FormItem label="账号" name="username" required>
              <Input
                value={username}
                onChange={setUsername}
                placeholder="请输入账号"
                prefixIcon="👤"
              />
            </FormItem>
            <FormItem label="密码" name="password" required>
              <InputPassword value={password} onChange={setPassword} placeholder="请输入密码" />
            </FormItem>
            <Button type="submit" variant="primary" block loading={loading}>
              登 录
            </Button>
          </div>
        </Form>
        <Divider className="my-4" />
        <div className="flex items-center justify-between text-bodySm">
          <button type="button" className="text-primary-default hover:underline" onClick={onForgot}>
            忘记密码？
          </button>
          <button
            type="button"
            className="text-primary-default hover:underline"
            onClick={onRegister}
          >
            注册账号
          </button>
        </div>
      </Card>
    </div>
  )
}
