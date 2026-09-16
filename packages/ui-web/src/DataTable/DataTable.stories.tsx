import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DataTable } from './index'
import type { TableColumn } from './DataTable.types'

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
  { key: 'status', title: '状态', align: 'center' },
]

const meta: Meta<typeof DataTable> = {
  title: 'DataDisplay/DataTable',
  component: DataTable,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof DataTable>

export const Default: Story = {
  render: () => {
    const [sortState, setSortState] = useState<{ key: string; order: 'asc' | 'desc' } | null>({
      key: 'stock',
      order: 'desc',
    })
    return (
      <DataTable
        columns={COLUMNS}
        data={DEVICES}
        rowKey="name"
        sortState={sortState}
        onSortChange={(key, order) => setSortState({ key, order })}
      />
    )
  },
}

export const Loading: Story = {
  render: () => <DataTable columns={COLUMNS} data={DEVICES} loading />,
}

export const Empty: Story = {
  render: () => <DataTable columns={COLUMNS} data={[]} />,
}
