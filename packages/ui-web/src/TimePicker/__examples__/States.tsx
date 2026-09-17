import { useState } from 'react'
import { TimePicker } from '../index'

export function States() {
  const [t1, setT1] = useState('')
  const [t2, setT2] = useState('14:30')
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">时分秒（当前：{t1 || '未选择'}）</span>
        <div className="w-48">
          <TimePicker value={t1} onChange={setT1} format="HH:mm:ss" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">仅时分（当前：{t2}）</span>
        <div className="w-40">
          <TimePicker value={t2} onChange={setT2} format="HH:mm" />
        </div>
      </div>
    </div>
  )
}
