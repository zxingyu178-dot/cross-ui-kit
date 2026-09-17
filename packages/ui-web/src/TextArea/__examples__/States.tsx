import { useState } from 'react'
import { TextArea } from '../index'

export function States() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础多行文本框</span>
        <div className="w-96">
          <TextArea value={value} onChange={setValue} rows={4} placeholder="请输入内容" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">字数统计 + 最大长度</span>
        <div className="w-96">
          <TextArea rows={3} maxLength={200} showCount placeholder="最多输入 200 字" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <div className="w-96">
          <TextArea rows={2} disabled value="这是禁用的文本框内容" />
        </div>
      </div>
    </div>
  )
}
