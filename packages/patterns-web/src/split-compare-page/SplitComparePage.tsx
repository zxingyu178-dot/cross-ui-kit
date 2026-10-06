/**
 * SplitComparePage 分屏对比页（web）—— 左右两栏方案对比 + 差异高亮 + 结论。
 */
import { Card, Button, Tag, Checkbox } from '@kit/ui-web'

const plans = [
  {
    name: '方案 A · 单体架构',
    tagline: '快速上线，结构简单',
    variant: 'primary' as const,
    rows: [
      { label: '开发周期', a: '2 周', highlight: false },
      { label: '初期成本', a: '低（¥3 万）', highlight: true },
      { label: '扩展性', a: '一般', highlight: false },
      { label: '维护难度', a: '中等', highlight: false },
      { label: '适用规模', a: '中小团队', highlight: false },
    ],
  },
  {
    name: '方案 B · 微服务架构',
    tagline: '弹性扩展，长期演进',
    variant: 'success' as const,
    rows: [
      { label: '开发周期', a: '6 周', highlight: false },
      { label: '初期成本', a: '高（¥12 万）', highlight: false },
      { label: '扩展性', a: '强', highlight: true },
      { label: '维护难度', a: '较高', highlight: false },
      { label: '适用规模', a: '中大型团队', highlight: true },
    ],
  },
]

export function SplitComparePage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-titleSm font-medium text-text-primary">方案对比</h3>
        <label className="flex items-center gap-2 text-bodySm text-text-secondary">
          <Checkbox checked onChange={() => {}} /> 仅显示差异
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {plans.map((p) => (
          <Card key={p.name} className="flex flex-col">
            <div className="mb-4 flex items-center justify-between border-b border-border-default pb-3">
              <div>
                <h4 className="text-bodyMd font-semibold text-text-primary">{p.name}</h4>
                <p className="text-bodySm text-text-secondary">{p.tagline}</p>
              </div>
              <Tag variant={p.variant} tone="soft">
                推荐
              </Tag>
            </div>
            <div className="flex flex-col gap-3">
              {p.rows.map((r) => (
                <div
                  key={r.label}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-bodySm ${
                    r.highlight ? 'bg-primary-default/10' : 'bg-bg-secondary'
                  }`}
                >
                  <span className="text-text-secondary">{r.label}</span>
                  <span
                    className={`font-medium ${r.highlight ? 'text-primary-default' : 'text-text-primary'}`}
                  >
                    {r.a}
                  </span>
                </div>
              ))}
            </div>
            <Button
              variant={p.variant === 'primary' ? 'secondary' : 'primary'}
              block
              className="mt-4"
            >
              选择 {p.name.split(' ')[0]}
            </Button>
          </Card>
        ))}
      </div>

      <Card>
        <h4 className="mb-2 text-bodyMd font-medium text-text-primary">对比结论</h4>
        <p className="text-bodySm text-text-secondary">
          若项目追求快速验证、预算有限，建议选择方案
          A；若面向长期增长、需要支撑高并发与多团队协作，方案 B 的扩展性更具优势。 可采用「先 A 后
          B」的渐进式路线，初期单体上线，业务成熟后再拆分服务。
        </p>
      </Card>
    </div>
  )
}
