/** DataTable 示例：受控排序 / 加载骨架 / 空态 / 斑马纹+行点击。 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Badge } from '../../Badge'
import { DataTable } from '../index'
import type { TableColumn } from '../DataTable.types'

interface Device {
  name: string
  category: string
  stock: number
  price: number
  status: string
}

const DEVICES: Device[] = [
  { name: '锂电池组 48V', category: '电池', stock: 320, price: 1280, status: '在售' },
  { name: '控制器 12 管', category: '电控', stock: 85, price: 260, status: '在售' },
  { name: '电机 800W', category: '电机', stock: 0, price: 520, status: '缺货' },
  { name: '充电器 60V', category: '配件', stock: 214, price: 95, status: '在售' },
  { name: '车架 前叉', category: '车体', stock: 42, price: 180, status: '在售' },
]

const COLUMNS: TableColumn<Device>[] = [
  { key: 'name', title: '物料名称', sortable: true },
  { key: 'category', title: '分类' },
  { key: 'stock', title: '库存', align: 'right', sortable: true },
  { key: 'price', title: '单价(元)', align: 'right', sortable: true },
  {
    key: 'status',
    title: '状态',
    align: 'center',
    render: (v) => (
      <Badge variant={v === '在售' ? 'success' : 'warning'} size="sm">
        {String(v)}
      </Badge>
    ),
  },
]

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-caption text-text-tertiary">{label}</span>
      {children}
    </div>
  )
}

export function States() {
  const [sortState, setSortState] = useState<{ key: string; order: 'asc' | 'desc' } | null>({
    key: 'stock',
    order: 'desc',
  })
  const [clickedRow, setClickedRow] = useState('未点击')

  return (
    <div className="flex flex-col gap-8">
      <Group label="受控排序（默认库存降序，点表头切换，点击行回调）">
        <DataTable
          columns={COLUMNS}
          data={DEVICES}
          rowKey="name"
          sortState={sortState}
          onSortChange={(key, order) => setSortState({ key, order })}
          onRowClick={(row) => setClickedRow(`点击了：${row.name}`)}
        />
        <span className="text-body-sm text-text-secondary">{clickedRow}</span>
      </Group>

      <Group label="加载中（骨架行）">
        <DataTable columns={COLUMNS} data={DEVICES} loading />
      </Group>

      <Group label="空态（无数据）">
        <DataTable columns={COLUMNS} data={[]} />
      </Group>
    </div>
  )
}
