/**
 * ListPage 列表页模板（web）—— Search + DataTable + Pagination + 四态。
 */
import { useMemo, useState } from 'react'
import {
  Button,
  DataTable,
  Empty,
  Pagination,
  Search,
  Skeleton,
  Tag,
  type TableColumn,
  type TagVariant,
} from '@kit/ui-web'

export interface ListRow {
  id: string
  name: string
  status: 'active' | 'inactive' | 'pending'
  owner: string
  updatedAt: string
}

export interface ListPageProps {
  title?: string
  rows?: ListRow[]
  loading?: boolean
  error?: boolean
  onAdd?: () => void
  onRefresh?: () => void
  pageSize?: number
}

const statusTone: Record<ListRow['status'], TagVariant> = {
  active: 'success',
  inactive: 'neutral',
  pending: 'warning',
}
const statusLabel: Record<ListRow['status'], string> = {
  active: '启用',
  inactive: '停用',
  pending: '待审',
}

export function ListPage({
  title = '列表管理',
  rows = [],
  loading = false,
  error = false,
  onAdd,
  onRefresh,
  pageSize = 10,
}: ListPageProps) {
  const [keyword, setKeyword] = useState('')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    if (!keyword.trim()) return rows
    return rows.filter((r) => r.name.includes(keyword.trim()) || r.owner.includes(keyword.trim()))
  }, [rows, keyword])

  const paged = useMemo(
    () => filtered.slice((page - 1) * pageSize, page * pageSize),
    [filtered, page, pageSize],
  )

  const columns: TableColumn<ListRow>[] = [
    {
      key: 'name',
      title: '名称',
      render: (v) => <span className="font-medium text-text-primary">{String(v)}</span>,
    },
    { key: 'owner', title: '负责人' },
    {
      key: 'status',
      title: '状态',
      render: (_v, row) => <Tag variant={statusTone[row.status]}>{statusLabel[row.status]}</Tag>,
    },
    { key: 'updatedAt', title: '更新时间' },
  ]

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-titleMd font-medium text-text-primary">{title}</h1>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={onRefresh}>
            刷新
          </Button>
          <Button variant="primary" onClick={onAdd}>
            新建
          </Button>
        </div>
      </div>
      <div className="flex gap-2">
        <Search
          value={keyword}
          onChange={(v) => {
            setKeyword(v)
            setPage(1)
          }}
          placeholder="搜索名称 / 负责人"
          enterButton
        />
      </div>

      {loading ? (
        <Skeleton variant="text" lines={6} />
      ) : error ? (
        <Empty
          description="加载失败，点击重试"
          action={
            <Button variant="secondary" onClick={onRefresh}>
              重试
            </Button>
          }
        />
      ) : paged.length === 0 ? (
        <Empty description={keyword ? '未找到匹配结果' : '暂无数据'} />
      ) : (
        <DataTable columns={columns} data={paged} rowKey="id" stripe />
      )}

      {!loading && !error && filtered.length > 0 ? (
        <div className="flex justify-end">
          <Pagination
            current={page}
            pageSize={pageSize}
            total={filtered.length}
            onChange={setPage}
          />
        </div>
      ) : null}
    </div>
  )
}
