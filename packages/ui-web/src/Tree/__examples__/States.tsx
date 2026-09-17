import { useState } from 'react'
import { Tree } from '../index'
import type { TreeNode } from '../Tree.types'

const data: TreeNode[] = [
  {
    key: '1',
    title: '系统管理',
    children: [
      { key: '1-1', title: '用户管理' },
      { key: '1-2', title: '角色管理' },
      {
        key: '1-3',
        title: '权限管理',
        children: [
          { key: '1-3-1', title: '菜单权限' },
          { key: '1-3-2', title: '按钮权限' },
        ],
      },
    ],
  },
  {
    key: '2',
    title: '内容管理',
    children: [
      { key: '2-1', title: '文章管理' },
      { key: '2-2', title: '分类管理', disabled: true },
      { key: '2-3', title: '评论管理' },
    ],
  },
  {
    key: '3',
    title: '数据统计',
  },
]

export function States() {
  const [selected, setSelected] = useState<string[]>(['1-1'])
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">
          基础树形（默认展开全部，当前选中：{selected.join(', ') || '无'}）
        </span>
        <div className="w-72">
          <Tree data={data} defaultExpandAll selectedKeys={selected} onSelect={setSelected} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">默认折叠</span>
        <div className="w-72">
          <Tree data={data} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">禁用</span>
        <div className="w-72">
          <Tree data={data} defaultExpandAll disabled />
        </div>
      </div>
    </div>
  )
}
