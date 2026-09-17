import { useState } from 'react'
import { TreeSelect } from '../index'
import type { TreeSelectNode } from '../TreeSelect.types'

const data: TreeSelectNode[] = [
  {
    key: '1',
    title: '技术部',
    children: [
      { key: '1-1', title: '前端组' },
      { key: '1-2', title: '后端组' },
      {
        key: '1-3',
        title: '测试组',
        children: [
          { key: '1-3-1', title: '功能测试' },
          { key: '1-3-2', title: '自动化测试' },
        ],
      },
    ],
  },
  {
    key: '2',
    title: '产品部',
    children: [
      { key: '2-1', title: '产品经理' },
      { key: '2-2', title: 'UI 设计', disabled: true },
    ],
  },
  { key: '3', title: '运营部' },
]

export function States() {
  const [value, setValue] = useState('')
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          基础树形选择（当前选中：{value || '无'}）
        </span>
        <div className="w-72">
          <TreeSelect data={data} value={value} onChange={(v) => setValue(v)} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用状态</span>
        <div className="w-72">
          <TreeSelect data={data} value="1-1" disabled />
        </div>
      </div>
    </div>
  )
}
