import { useState } from 'react'
import type { ReactNode } from 'react'
import { Button } from '../../Button'
import { Tag } from '../index'
import type { TagVariant } from '../Tag.types'

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-caption text-text-tertiary">{label}</span>
      <div className="flex flex-row flex-wrap items-center gap-2">{children}</div>
    </div>
  )
}

const VARIANTS: TagVariant[] = ['neutral', 'primary', 'success', 'warning', 'danger', 'info']
const FILTERS = ['全部', '电动车', '三轮车', '配件', '售后']
const INITIAL_TAGS = ['智能制造', '新能源', '出口业务', '售后服务', '数字化']

export function States() {
  const [active, setActive] = useState<string[]>(['电动车'])
  const [tags, setTags] = useState<string[]>(INITIAL_TAGS)

  const toggle = (f: string) =>
    setActive((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]))

  return (
    <div className="flex flex-col gap-6">
      <Row label="语义色（soft，默认形态）">
        {VARIANTS.map((v) => (
          <Tag key={v} variant={v}>
            {v}
          </Tag>
        ))}
      </Row>

      <Row label="形态 soft / solid / outline（primary）">
        <Tag variant="primary" tone="soft">
          soft
        </Tag>
        <Tag variant="primary" tone="solid">
          solid
        </Tag>
        <Tag variant="primary" tone="outline">
          outline
        </Tag>
      </Row>

      <Row label="尺寸 sm / md">
        <Tag size="sm">小标签</Tag>
        <Tag size="md">默认标签</Tag>
      </Row>

      <Row label="可选中筛选（点击切换，选中为实心）">
        {FILTERS.map((f) => (
          <Tag key={f} variant="primary" selected={active.includes(f)} onClick={() => toggle(f)}>
            {f}
          </Tag>
        ))}
      </Row>

      <Row label={`可关闭标签（点 × 删除，剩余 ${tags.length} 个）`}>
        {tags.map((t) => (
          <Tag
            key={t}
            variant="neutral"
            tone="outline"
            closable
            onClose={() => setTags((p) => p.filter((x) => x !== t))}
          >
            {t}
          </Tag>
        ))}
        <Button variant="ghost" size="sm" onClick={() => setTags(INITIAL_TAGS)}>
          重置
        </Button>
      </Row>

      <Row label="禁用">
        <Tag disabled>不可点</Tag>
        <Tag variant="primary" closable disabled>
          不可关闭
        </Tag>
      </Row>
    </div>
  )
}
