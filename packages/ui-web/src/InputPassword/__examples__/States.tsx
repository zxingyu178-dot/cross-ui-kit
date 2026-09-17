import { useState } from 'react'
import { InputPassword } from '../index'

export function States() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          基础密码输入框（点击眼睛图标切换显示/隐藏）
        </span>
        <div className="w-72">
          <InputPassword value={value} onChange={setValue} placeholder="请输入密码" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <div className="w-72">
          <InputPassword value="123456" disabled />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">无切换按钮</span>
        <div className="w-72">
          <InputPassword placeholder="请输入密码" visibilityToggle={false} />
        </div>
      </div>
    </div>
  )
}
