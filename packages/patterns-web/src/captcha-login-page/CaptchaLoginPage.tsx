/**
 * CaptchaLoginPage 验证码登录页（web）—— 手机号 + 图形/短信验证码 + 倒计时。
 */
import { useEffect, useState } from 'react'
import { Card, Input, Button } from '@kit/ui-web'

export function CaptchaLoginPage() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [countdown, setCountdown] = useState(0)

  useEffect(() => {
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  const sendCode = () => {
    if (!/^1[3-9]\d{9}$/.test(phone)) return
    setCountdown(60)
  }

  return (
    <Card className="mx-auto max-w-sm">
      <h1 className="text-2xl font-semibold text-text-primary">短信验证码登录</h1>
      <p className="mt-1 text-bodySm text-text-secondary">未注册的手机号将自动创建账号</p>

      <div className="mt-6 flex flex-col gap-4">
        <Input value={phone} onChange={setPhone} placeholder="请输入手机号" prefixIcon="📱" />

        <div className="flex gap-2">
          <Input value={code} onChange={setCode} placeholder="6 位验证码" prefixIcon="🔑" />
          <Button
            variant="secondary"
            onClick={sendCode}
            disabled={countdown > 0 || !/^1[3-9]\d{9}$/.test(phone)}
          >
            {countdown > 0 ? `${countdown}s 后重发` : '获取验证码'}
          </Button>
        </div>

        {/* 图形验证码（模拟） */}
        <div className="flex items-center gap-3 rounded-lg bg-bg-secondary p-3">
          <span className="font-mono text-2xl italic tracking-widest text-primary-default select-none">
            A 7 k 9
          </span>
          <button className="text-bodySm text-text-secondary">看不清，换一张</button>
        </div>

        <Button variant="primary" block size="lg" disabled={!phone || code.length < 4}>
          登 录
        </Button>

        <div className="text-center text-bodySm text-text-secondary">
          <button className="text-primary-default">密码登录</button>
          <span className="mx-2">·</span>
          <button>注册新账号</button>
        </div>
      </div>
    </Card>
  )
}
