import { SwipeAction } from '../index'
import { Cell } from '../../Cell'

export function States() {
  return (
    <div className="flex flex-col gap-2">
      <SwipeAction
        actions={[
          { key: 'edit', label: '编辑' },
          { key: 'del', label: '删除', danger: true },
        ]}
      >
        <Cell title="订单 #12345" description="待支付" />
      </SwipeAction>
      <SwipeAction actions={[{ key: 'star', label: '收藏' }]}>
        <Cell title="消息通知" description="左滑查看操作" />
      </SwipeAction>
    </div>
  )
}
