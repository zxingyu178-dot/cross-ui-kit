/** Badge 示例：soft/solid/outline 三形态 × 六语义色、两种尺寸、可点击（web）。 */
import { useState } from 'react'
import { Badge } from '../index'
import type { BadgeTone, BadgeVariant } from '../Badge.types'

const VARIANTS: BadgeVariant[] = ['primary', 'success', 'warning', 'danger', 'info', 'neutral']
const LABEL: Record<BadgeVariant, string> = {
  primary: '主要',
  success: '成功',
  warning: '警告',
  danger: '危险',
  info: '信息',
  neutral: '中性',
}
const TONES: BadgeTone[] = ['soft', 'solid', 'outline']

export function States() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col gap-6">
      {TONES.map((tone) => (
        <div key={tone} className="flex flex-col gap-2">
          <span className="text-body-sm text-text-tertiary">{tone}</span>
          <div className="flex flex-wrap items-center gap-2">
            {VARIANTS.map((v) => (
              <Badge key={v} variant={v} tone={tone}>
                {LABEL[v]}
              </Badge>
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <span className="text-body-sm text-text-tertiary">尺寸</span>
        <div className="flex flex-wrap items-center gap-2">
          <Badge size="md" variant="primary">
            md 标签
          </Badge>
          <Badge size="sm" variant="success">
            sm 标签
          </Badge>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-body-sm text-text-tertiary">可点击</span>
        <Badge variant="primary" tone="solid" onClick={() => setCount((c) => c + 1)}>
          点我 {count}
        </Badge>
      </div>
    </div>
  )
}
