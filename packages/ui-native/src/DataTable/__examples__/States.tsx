/** DataTable 示例：受控排序 / 加载骨架 / 空态 / 斑马纹+行点击（native）。 */
import { useState } from 'react'
import type { ReactNode } from 'react'
import { Text, YStack } from 'tamagui'
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
  { key: 'status', title: '状态', align: 'center' },
]

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <YStack gap="$3">
      <Text fontSize="$caption" color="$textTertiary">
        {label}
      </Text>
      {children}
    </YStack>
  )
}

export function States() {
  const [sortState, setSortState] = useState<{ key: string; order: 'asc' | 'desc' } | null>({
    key: 'stock',
    order: 'desc',
  })
  const [clickedRow, setClickedRow] = useState('未点击')

  return (
    <YStack gap="$8" padding="$4" backgroundColor="$bgPage">
      <Group label="受控排序（默认库存降序，点表头切换，点击行回调）">
        <DataTable
          columns={COLUMNS}
          data={DEVICES}
          rowKey="name"
          sortState={sortState}
          onSortChange={(key, order) => setSortState({ key, order })}
          onRowClick={(row) => setClickedRow(`点击了：${row.name}`)}
        />
        <Text fontSize="$bodySm" color="$textSecondary">
          {clickedRow}
        </Text>
      </Group>

      <Group label="加载中（骨架行）">
        <DataTable columns={COLUMNS} data={DEVICES} loading />
      </Group>

      <Group label="空态（无数据）">
        <DataTable columns={COLUMNS} data={[]} />
      </Group>
    </YStack>
  )
}
