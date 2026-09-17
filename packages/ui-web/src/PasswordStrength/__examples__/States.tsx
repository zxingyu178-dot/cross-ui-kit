import { useState } from 'react'
import { PasswordStrength } from '../index'

export function States() {
  const [password, setPassword] = useState('')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">密码强度指示器（输入测试）</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="请输入密码"
          className="h-9 w-64 rounded-md border border-border-default bg-bg-card px-3 text-bodySm text-text-primary outline-none placeholder:text-text-tertiary focus:border-primary-default focus:ring-1 focus:ring-primary-default/20"
        />
        <div className="w-64">
          <PasswordStrength value={password} minLength={8} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-caption text-text-tertiary">各强度等级预览</span>
        <div className="w-64">
          <PasswordStrength value="" minLength={8} />
        </div>
        <div className="w-64">
          <PasswordStrength value="123" minLength={8} />
        </div>
        <div className="w-64">
          <PasswordStrength value="abc123" minLength={8} />
        </div>
        <div className="w-64">
          <PasswordStrength value="Abc12345" minLength={8} />
        </div>
        <div className="w-64">
          <PasswordStrength value="Abc123!@#" minLength={8} />
        </div>
      </div>
    </div>
  )
}
