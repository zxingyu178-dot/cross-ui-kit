import type { ReactNode } from 'react'
import { Spinner } from '../index'

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-caption text-text-tertiary">{label}</span>
      {children}
    </div>
  )
}

export function States() {
  return (
    <div className="flex flex-col gap-5">
      <Row label="尺寸（sm 16 / md 24 / lg 32）">
        <div className="flex flex-row items-center gap-4">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </Row>

      <Row label="色调（primary / muted）">
        <div className="flex flex-row items-center gap-4">
          <Spinner tone="primary" />
          <Spinner tone="muted" />
        </div>
      </Row>

      <Row label="反白 inverse（主色底 / 深色底上）">
        <div className="flex flex-row items-center gap-4">
          <div className="flex items-center gap-2 rounded-md bg-primary-default px-4 py-2">
            <Spinner size="sm" tone="inverse" />
            <span className="text-body-sm text-white">提交中…</span>
          </div>
          <div className="flex items-center gap-2 rounded-md bg-bg-inverse px-4 py-2">
            <Spinner size="sm" tone="inverse" />
            <span className="text-body-sm text-text-inverse">加载中…</span>
          </div>
        </div>
      </Row>

      <Row label="带文字（水平排列）">
        <div className="flex flex-row items-center gap-2">
          <Spinner size="sm" />
          <span className="text-body-sm text-text-secondary">正在加载数据，请稍候</span>
        </div>
      </Row>
    </div>
  )
}
