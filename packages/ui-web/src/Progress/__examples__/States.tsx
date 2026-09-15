import type { ReactNode } from 'react'
import { Progress } from '../index'

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
      <Row label="基础（primary，0 / 35 / 72 / 100）">
        <div className="flex flex-col gap-3">
          <Progress value={0} />
          <Progress value={35} />
          <Progress value={72} />
          <Progress value={100} />
        </div>
      </Row>

      <Row label="语义色调（success / warning / danger，均 60%）">
        <div className="flex flex-col gap-3">
          <Progress value={60} tone="success" />
          <Progress value={60} tone="warning" />
          <Progress value={60} tone="danger" />
        </div>
      </Row>

      <Row label="尺寸（sm 4px / md 8px，均 45%）">
        <div className="flex flex-col gap-3">
          <Progress value={45} size="sm" />
          <Progress value={45} size="md" />
        </div>
      </Row>

      <Row label="显示百分比（showLabel）">
        <div className="flex flex-col gap-3">
          <Progress value={28} showLabel />
          <Progress value={86} tone="success" showLabel />
        </div>
      </Row>

      <Row label="自定义 max（max=200，value=130 → 65%）">
        <Progress value={130} max={200} showLabel />
      </Row>
    </div>
  )
}
