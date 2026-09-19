/**
 * OrderListPage 订单列表页（web）—— 订单卡片 + 状态标签 + 操作按钮。
 */
import { Card, Tag, Button } from '@kit/ui-web'

const orders = [
  {
    id: 'ORD20260918001',
    name: '北欧陶瓷咖啡杯 x1',
    amount: '¥89.00',
    status: '待付款',
    date: '2026-09-18',
    variant: 'warning' as const,
  },
  {
    id: 'ORD20260917002',
    name: '简约马克杯 x2',
    amount: '¥118.00',
    status: '待发货',
    date: '2026-09-17',
    variant: 'primary' as const,
  },
  {
    id: 'ORD20260915003',
    name: '玻璃花瓶 x1',
    amount: '¥159.00',
    status: '已完成',
    date: '2026-09-15',
    variant: 'success' as const,
  },
  {
    id: 'ORD20260914004',
    name: '木质托盘 x1',
    amount: '¥45.00',
    status: '已取消',
    date: '2026-09-14',
    variant: 'neutral' as const,
  },
]

export function OrderListPage() {
  return (
    <div className="flex flex-col gap-3">
      {orders.map((o) => (
        <Card key={o.id}>
          <div className="flex items-center justify-between border-b border-border-default pb-2">
            <span className="font-mono text-bodySm text-text-secondary">{o.id}</span>
            <Tag variant={o.variant} tone="soft">
              {o.status}
            </Tag>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div>
              <p className="text-bodyMd text-text-primary">{o.name}</p>
              <p className="text-bodySm text-text-secondary">{o.date}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-danger">{o.amount}</p>
              <div className="mt-1 flex gap-2">
                <Button variant="secondary" size="sm">
                  查看详情
                </Button>
                {o.status === '待付款' && (
                  <Button variant="primary" size="sm">
                    去付款
                  </Button>
                )}
                {o.status === '已完成' && (
                  <Button variant="ghost" size="sm">
                    再次购买
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
