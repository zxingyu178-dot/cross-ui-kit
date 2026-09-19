/**
 * DataTablePage 高级数据表格页（web）—— 工具栏 + 搜索 + 表格 + 分页。
 */
import { useState } from 'react'
import { Card, Button, Search, DataTable, Pagination, Tag } from '@kit/ui-web'

const data = [
  {
    id: '1',
    name: '金彭电器管理系统',
    owner: '赵星宇',
    status: '进行中',
    progress: 75,
    updated: '2026-09-18',
  },
  {
    id: '2',
    name: '跨端 UI 组件库',
    owner: '李明',
    status: '设计',
    progress: 40,
    updated: '2026-09-17',
  },
  {
    id: '3',
    name: '移动端巡检 App',
    owner: '王芳',
    status: '待排期',
    progress: 10,
    updated: '2026-09-16',
  },
  {
    id: '4',
    name: '数据大屏',
    owner: '赵星宇',
    status: '已完成',
    progress: 100,
    updated: '2026-09-15',
  },
]

const columns = [
  { key: 'name', title: '项目名', sortable: true },
  { key: 'owner', title: '负责人' },
  {
    key: 'status',
    title: '状态',
    render: (v: unknown) => (
      <Tag
        variant={
          v === '进行中'
            ? 'primary'
            : v === '设计'
              ? 'info'
              : v === '已完成'
                ? 'success'
                : 'warning'
        }
      >
        {String(v)}
      </Tag>
    ),
  },
  {
    key: 'progress',
    title: '进度',
    render: (v: unknown) => (
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-24 rounded-full bg-bg-secondary">
          <div className="h-1.5 rounded-full bg-primary-default" style={{ width: `${v}%` }} />
        </div>
        <span className="text-bodySm text-text-secondary">{String(v)}%</span>
      </div>
    ),
  },
  { key: 'updated', title: '更新时间' },
]

export function DataTablePage() {
  const [keyword, setKeyword] = useState('')

  return (
    <Card className="mx-auto max-w-4xl">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-titleSm font-medium text-text-primary">项目列表</h3>
        <Button variant="primary" size="sm">
          + 新建项目
        </Button>
      </div>

      <div className="mb-4 flex items-center gap-3">
        <Search value={keyword} onChange={setKeyword} placeholder="搜索项目名…" />
      </div>

      <DataTable columns={columns} data={data} rowKey="id" />

      <div className="mt-4 flex justify-end">
        <Pagination current={1} pageSize={10} total={4} onChange={() => {}} />
      </div>
    </Card>
  )
}
