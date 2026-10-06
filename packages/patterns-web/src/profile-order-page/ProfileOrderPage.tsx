/**
 * ProfileOrderPage 个人中心订单版（web）—— 用户信息 + 订单入口 + 功能菜单。
 */
import { Card, Avatar, Tag, Button } from '@kit/ui-web'

const orderEntries = [
  { emoji: '💳', label: '待付款', count: 1 },
  { emoji: '📦', label: '待发货', count: 2 },
  { emoji: '🚚', label: '待收货', count: 0 },
  { emoji: '⭐', label: '待评价', count: 3 },
  { emoji: '↩️', label: '退换/售后', count: 0 },
]

const menus = ['我的收藏', '浏览历史', '收货地址', '优惠券', '账户设置', '帮助中心']

export function ProfileOrderPage() {
  return (
    <div className="flex flex-col gap-4">
      {/* 用户横幅 */}
      <Card>
        <div className="flex items-center gap-4">
          <Avatar name="赵" size="lg" />
          <div className="flex-1">
            <h2 className="text-titleMd font-semibold text-text-primary">赵星宇</h2>
            <p className="text-bodySm text-text-secondary">普通会员 · 成长值 1280</p>
          </div>
          <Button variant="secondary" size="sm">
            编辑资料
          </Button>
        </div>
      </Card>

      {/* 我的订单 */}
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-titleSm font-medium text-text-primary">我的订单</h3>
          <button className="text-bodySm text-primary-default">查看全部 →</button>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {orderEntries.map((o) => (
            <button
              key={o.label}
              className="flex flex-col items-center gap-1 rounded-lg py-3 hover:bg-bg-secondary"
            >
              <div className="relative">
                <span className="text-2xl">{o.emoji}</span>
                {o.count > 0 && (
                  <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-danger px-1 text-bodySm text-white">
                    {o.count}
                  </span>
                )}
              </div>
              <span className="text-bodySm text-text-secondary">{o.label}</span>
            </button>
          ))}
        </div>
      </Card>

      {/* 功能菜单 */}
      <Card>
        <h3 className="mb-2 text-titleSm font-medium text-text-primary">常用功能</h3>
        <div className="flex flex-col">
          {menus.map((m, i) => (
            <div
              key={m}
              className="flex items-center justify-between border-b border-border-default py-3 last:border-0"
            >
              <span className="text-bodyMd text-text-primary">{m}</span>
              {i === 3 && (
                <Tag variant="warning" tone="soft">
                  3 张可用
                </Tag>
              )}
              <span className="text-text-tertiary">›</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
