/**
 * PricingCalculatorPage 价格计算器页（web）—— 套餐选择 + 功能勾选 + 实时报价。
 */
import { useState } from 'react'
import { Card, RadioGroup, Checkbox, Button, Tag } from '@kit/ui-web'

const plans = [
  { label: '免费版 ¥0/月', value: 'free', price: 0 },
  { label: '专业版 ¥99/月', value: 'pro', price: 99 },
  { label: '企业版 ¥299/月', value: 'ent', price: 299 },
]

const addons = [
  { label: '额外存储空间（¥20/10GB）', value: 'storage', price: 20 },
  { label: '高级数据分析（¥50/月）', value: 'analytics', price: 50 },
  { label: '优先技术支持（¥30/月）', value: 'support', price: 30 },
  { label: '自定义域名（¥15/月）', value: 'domain', price: 15 },
]

export function PricingCalculatorPage() {
  const [plan, setPlan] = useState('pro')
  const [picked, setPicked] = useState<string[]>(['storage'])

  const base = plans.find((p) => p.value === plan)?.price ?? 0
  const addonTotal = addons.filter((a) => picked.includes(a.value)).reduce((s, a) => s + a.price, 0)
  const total = base + addonTotal

  const toggle = (v: string) =>
    setPicked((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]))

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Card>
        <h3 className="mb-3 text-titleSm font-medium text-text-primary">1. 选择套餐</h3>
        <RadioGroup
          options={plans.map((p) => ({ label: p.label, value: p.value }))}
          value={plan}
          onValueChange={setPlan}
        />
      </Card>

      <Card>
        <h3 className="mb-3 text-titleSm font-medium text-text-primary">2. 增值服务</h3>
        <div className="flex flex-col gap-3">
          {addons.map((a) => (
            <label key={a.value} className="flex items-center gap-2 text-bodyMd text-text-primary">
              <Checkbox checked={picked.includes(a.value)} onChange={() => toggle(a.value)} />
              {a.label}
            </label>
          ))}
        </div>
      </Card>

      <Card className="flex flex-col">
        <h3 className="mb-3 text-titleSm font-medium text-text-primary">3. 费用明细</h3>
        <div className="flex flex-1 flex-col gap-2 text-bodySm">
          <div className="flex justify-between text-text-secondary">
            <span>套餐费用</span>
            <span>¥{base}/月</span>
          </div>
          <div className="flex justify-between text-text-secondary">
            <span>增值服务</span>
            <span>¥{addonTotal}/月</span>
          </div>
          <Tag variant="info" tone="soft" className="self-start">
            年付享 8 折
          </Tag>
          <div className="mt-auto flex items-baseline justify-between border-t border-border-default pt-3">
            <span className="text-text-primary">合计</span>
            <span className="text-2xl font-bold text-danger">¥{total}/月</span>
          </div>
        </div>
        <Button variant="primary" block className="mt-4">
          立即开通
        </Button>
      </Card>
    </div>
  )
}
