import { useState } from 'react'
import { Mentions } from '../index'
import type { MentionOption } from '../Mentions.types'

const options: MentionOption[] = [
  { key: '1', label: '张三', description: '前端工程师' },
  { key: '2', label: '李四', description: '后端工程师' },
  { key: '3', label: '王五', description: '测试工程师' },
  { key: '4', label: '赵六', description: '产品经理' },
  { key: '5', label: '钱七', description: 'UI 设计师' },
]

export function States() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础提及输入（输入 @ 触发用户列表）</span>
        <div className="w-80">
          <Mentions
            value={value}
            onChange={setValue}
            options={options}
            placeholder="输入 @ 提及用户"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <div className="w-80">
          <Mentions value="@张三 " disabled options={options} />
        </div>
      </div>
    </div>
  )
}
