import { useState } from 'react'
import { Captcha } from '../index'

export function States() {
  const [code, setCode] = useState('')
  const [code2, setCode2] = useState('')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础验证码输入框</span>
        <div className="w-80">
          <Captcha
            value={code}
            onChange={setCode}
            onSend={() => console.log('发送验证码')}
            countdown={10}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">自定义占位与长度</span>
        <div className="w-80">
          <Captcha
            value={code2}
            onChange={setCode2}
            placeholder="请输入短信验证码"
            maxLength={4}
            countdown={30}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <div className="w-80">
          <Captcha value="123456" disabled />
        </div>
      </div>
    </div>
  )
}
