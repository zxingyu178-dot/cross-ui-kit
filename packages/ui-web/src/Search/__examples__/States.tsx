import { useState } from 'react'
import { Search } from '../index'

export function States() {
  const [value, setValue] = useState('')
  const [searched, setSearched] = useState('')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          基础搜索框（回车或点击搜索按钮触发）
        </span>
        <div className="w-96">
          <Search
            value={value}
            onChange={setValue}
            onSearch={(v) => setSearched(v)}
            placeholder="请输入搜索关键词"
          />
        </div>
        {searched ? (
          <div className="mt-1 text-caption text-text-secondary">搜索关键词：{searched}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">无搜索按钮</span>
        <div className="w-96">
          <Search placeholder="请输入搜索关键词" enterButton={false} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <div className="w-96">
          <Search value="禁用的搜索词" disabled />
        </div>
      </div>
    </div>
  )
}
