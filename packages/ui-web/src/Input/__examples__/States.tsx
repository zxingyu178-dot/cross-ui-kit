/** Input 示例：基础、尺寸、类型、图标、错误、禁用（web）。 */
import { useState } from 'react'
import { Input } from '../index'

export function States() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <div className="flex w-96 flex-col gap-4">
      <Input placeholder="基础输入框" value={name} onChange={setName} />
      <Input size="sm" placeholder="小号" />
      <Input size="md" placeholder="中号（默认）" />
      <Input size="lg" placeholder="大号" />
      <Input type="password" placeholder="密码输入" />
      <Input prefixIcon={<SearchIcon />} placeholder="带前置图标（搜索）" />
      <Input
        value={phone}
        onChange={setPhone}
        error={phone.length > 0 && phone.length < 11 ? '请输入 11 位手机号' : false}
        placeholder="错误态（输入少于 11 位触发）"
      />
      <Input disabled placeholder="禁用态" defaultValue="不可编辑" />
      <Input readOnly placeholder="只读态" defaultValue="只读内容" />
    </div>
  )
}

function SearchIcon() {
  return (
    <svg
      style={{ width: 'var(--kit-icon-size-md)', height: 'var(--kit-icon-size-md)' }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
