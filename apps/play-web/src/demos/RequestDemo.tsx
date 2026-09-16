/** useRequest + StateContainer + DataTable 组合演示：加载骨架 → 成功表格；模拟失败 → error 重试；刷新重跑。 */
import { useRequest } from '@kit/core'
import { Button } from '@kit/ui-web/src/Button'
import { DataTable } from '@kit/ui-web/src/DataTable'
import type { TableColumn } from '@kit/ui-web/src/DataTable'
import { StateContainer } from '@kit/ui-web/src/StateContainer'
import type { StateStatus } from '@kit/ui-web/src/StateContainer'

interface DeviceRow {
  name: string
  category: string
  stock: number
  price: number
}

const DEVICES: DeviceRow[] = [
  { name: '锂电池组 48V', category: '电池', stock: 320, price: 1280 },
  { name: '控制器 12 管', category: '电控', stock: 85, price: 260 },
  { name: '电机 800W', category: '电机', stock: 0, price: 520 },
  { name: '充电器 60V', category: '配件', stock: 214, price: 95 },
  { name: '车架 前叉', category: '车体', stock: 42, price: 180 },
]

/** mock 请求：700ms 后返回；fail=true 抛错 */
async function fetchDevices(opts: { fail?: boolean } = {}): Promise<DeviceRow[]> {
  await new Promise((r) => setTimeout(r, 700))
  if (opts.fail) throw new Error('网络异常（模拟）')
  return DEVICES
}

const COLUMNS: TableColumn<DeviceRow>[] = [
  { key: 'name', title: '物料名称', sortable: true },
  { key: 'category', title: '分类' },
  { key: 'stock', title: '库存', align: 'right', sortable: true },
  { key: 'price', title: '单价(元)', align: 'right', sortable: true },
]

export function RequestDemo() {
  const { data, status, run, refresh } = useRequest<DeviceRow[], [opts?: { fail?: boolean }]>({
    service: fetchDevices,
  })

  const mapped: StateStatus =
    status === 'loading'
      ? 'loading'
      : status === 'error'
        ? 'error'
        : data !== undefined && data.length > 0
          ? 'success'
          : 'empty'

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-3">
        <Button size="sm" onClick={() => refresh()}>
          刷新
        </Button>
        <Button size="sm" variant="secondary" onClick={() => run({ fail: true })}>
          模拟失败
        </Button>
        <span className="text-caption text-text-tertiary">
          useRequest 自动执行 → 700ms 返回；失败走 StateContainer error 重试
        </span>
      </div>
      <StateContainer status={mapped} onRetry={() => refresh()} loadingMode="skeleton">
        <DataTable columns={COLUMNS} data={data ?? []} rowKey="name" />
      </StateContainer>
    </div>
  )
}
