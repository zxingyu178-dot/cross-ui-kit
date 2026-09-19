import { PullToRefresh } from '../index'
import { Cell } from '../../Cell'

export function States() {
  return (
    <PullToRefresh
      onRefresh={async () => {
        await new Promise((r) => setTimeout(r, 800))
      }}
    >
      <div className="flex flex-col">
        <Cell title="下拉试试" description="按住下拉触发刷新" />
        <Cell title="列表项 1" />
        <Cell title="列表项 2" />
      </div>
    </PullToRefresh>
  )
}
