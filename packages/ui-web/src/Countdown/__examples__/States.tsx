import { useState } from 'react'
import { Countdown } from '../index'

export function States() {
  const [key, setKey] = useState(0)
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础倒计时（1 分钟）</span>
        <Countdown key={key} value={60000} format="mm:ss" onFinish={() => setKey((k) => k + 1)} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">带天时分秒（1 天 2 小时）</span>
        <Countdown value={Date.now() + 86400000 + 7200000} format="DD天 HH时 mm分 ss秒" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">带毫秒（10 秒）</span>
        <Countdown value={10000} format="ss.SSS" />
      </div>
    </div>
  )
}
