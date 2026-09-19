import { NavBar } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-4">
      <NavBar title="详情页" onBack={() => {}} />
      <NavBar
        title="订单"
        showBack={false}
        right={<button className="text-bodySm text-primary-default">全部</button>}
      />
      <NavBar
        title="我的"
        right={<button className="text-bodySm text-primary-default">编辑</button>}
      />
    </div>
  )
}
