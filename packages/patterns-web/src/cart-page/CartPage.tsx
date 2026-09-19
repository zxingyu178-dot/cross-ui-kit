/**
 * CartPage 购物车模板（web）—— 商品行 + 数量 + 勾选 + 结算栏。
 */
import { useState } from 'react'
import { Button, Card, Checkbox, InputNumber, Tag } from '@kit/ui-web'

export interface CartItem {
  id: string
  name: string
  spec: string
  price: number
  count: number
  emoji?: string
}

export interface CartPageProps {
  items?: CartItem[]
  onCheckout?: (ids: string[]) => void
}

export function CartPage({
  items = [
    { id: '1', name: '北欧陶瓷咖啡杯', spec: '白色 / 350ml', price: 89, count: 1, emoji: '☕' },
    { id: '2', name: '简约马克杯', spec: '米色 / 400ml', price: 59, count: 2, emoji: '🥛' },
  ],
  onCheckout,
}: CartPageProps) {
  const [selected, setSelected] = useState<string[]>(items.map((i) => i.id))

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  const toggleAll = (checked: boolean) => setSelected(checked ? items.map((i) => i.id) : [])

  const total = items
    .filter((i) => selected.includes(i.id))
    .reduce((sum, i) => sum + i.price * i.count, 0)

  return (
    <div className="mx-auto max-w-3xl">
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-titleMd font-medium text-text-primary">购物车</h1>
          <Tag variant="neutral">{selected.length} 件已选</Tag>
        </div>

        {/* 全选 */}
        <label className="mb-4 flex items-center gap-2">
          <Checkbox checked={selected.length === items.length} onChange={toggleAll} />
          <span className="text-bodySm text-text-secondary">全选</span>
        </label>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 rounded-lg border border-border-default p-3"
            >
              <Checkbox checked={selected.includes(item.id)} onChange={() => toggle(item.id)} />
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-bg-secondary text-3xl">
                {item.emoji}
              </div>
              <div className="flex-1">
                <p className="text-bodyMd text-text-primary">{item.name}</p>
                <p className="text-bodySm text-text-secondary">{item.spec}</p>
                <p className="mt-1 font-semibold text-danger">¥{item.price}</p>
              </div>
              <InputNumber value={item.count} min={1} max={99} />
            </div>
          ))}
        </div>

        {/* 结算栏 */}
        <div className="mt-6 flex items-center justify-between border-t border-border-default pt-4">
          <div>
            <span className="text-bodySm text-text-secondary">合计：</span>
            <span className="text-xl font-bold text-danger">¥{total.toFixed(2)}</span>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => onCheckout?.(selected)}
            disabled={selected.length === 0}
          >
            去结算（{selected.length}）
          </Button>
        </div>
      </Card>
    </div>
  )
}
