import { useState } from 'react'
import { OtpInput } from '../index'

export function States() {
  const [value, setValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          6 位验证码（自动聚焦下一个，支持粘贴）
        </span>
        <OtpInput value={value} onChange={setValue} length={6} />
        {value.length === 6 ? (
          <div className="mt-1 text-caption text-success-default">验证码已输入完成：{value}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">4 位密码模式</span>
        <OtpInput value={passwordValue} onChange={setPasswordValue} length={4} password />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <OtpInput value="123456" length={6} disabled />
      </div>
    </div>
  )
}
