/**
 * ProductDetailPage 商品详情模板（web）—— 图 + 信息 + 规格 + 底部购买栏。
 */
import { useState } from 'react'
import { Button, Card, Tag, Rate, InputNumber, Divider } from '@kit/ui-web'

export interface ProductDetailPageProps {
  name?: string
  price?: number
  originalPrice?: number
  description?: string
  onAddCart?: () => void
  onBuyNow?: () => void
}

export function ProductDetailPage({
  name = '北欧简约陶瓷咖啡杯',
  price = 89,
  originalPrice = 129,
  description = '优质陶瓷材质，手工拉坯，简约设计，适合居家办公使用。',
  onAddCart,
  onBuyNow,
}: ProductDetailPageProps) {
  const [count, setCount] = useState(1)
  const [spec, setSpec] = useState('白色')

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 商品图 */}
        <div className="flex h-80 items-center justify-center rounded-lg bg-gradient-to-br from-amber-50 to-orange-100 text-8xl">
          ☕
        </div>

        {/* 商品信息 */}
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-titleMd font-semibold text-text-primary">{name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <Rate value={4.5} />
              <span className="text-bodySm text-text-secondary">4.9 · 2.3k 评价</span>
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-danger">¥{price}</span>
            <span className="text-bodySm text-text-tertiary line-through">¥{originalPrice}</span>
            <Tag variant="danger" tone="soft">
              限时优惠
            </Tag>
          </div>

          <p className="text-bodySm text-text-secondary">{description}</p>

          <Divider />

          {/* 规格选择 */}
          <div>
            <p className="mb-2 text-bodySm text-text-secondary">颜色：{spec}</p>
            <div className="flex gap-2">
              {['白色', '黑色', '米色'].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSpec(s)}
                  className={`rounded-md border px-4 py-1.5 text-bodySm ${
                    spec === s
                      ? 'border-primary-default text-primary-default'
                      : 'border-border-default text-text-secondary'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* 数量 */}
          <div className="flex items-center gap-3">
            <span className="text-bodySm text-text-secondary">数量：</span>
            <InputNumber value={count} onChange={(v) => setCount(v ?? 1)} min={1} max={99} />
          </div>
        </div>
      </div>

      {/* 底部购买栏 */}
      <Card className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-bodySm text-text-secondary">合计</p>
            <p className="text-xl font-bold text-danger">¥{(price * count).toFixed(2)}</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" size="lg" onClick={onAddCart}>
              加入购物车
            </Button>
            <Button variant="primary" size="lg" onClick={onBuyNow}>
              立即购买
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
