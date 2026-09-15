import type { ReactNode } from 'react'
import { Skeleton } from '../index'

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
      <Row label="矩形块 rect（默认高 16，className 覆盖宽高）">
        <div className="flex flex-col gap-3">
          <Skeleton />
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-24 w-full rounded-lg" />
        </div>
      </Row>

      <Row label="圆形 circle（头像，sm 24 / md 40 / lg 56）">
        <div className="flex flex-row items-center gap-4">
          <Skeleton variant="circle" size="sm" />
          <Skeleton variant="circle" size="md" />
          <Skeleton variant="circle" size="lg" />
        </div>
      </Row>

      <Row label="文本 text（多行，末行收窄 60%）">
        <div className="flex flex-col gap-3">
          <Skeleton variant="text" lines={3} />
          <Skeleton variant="text" lines={5} />
        </div>
      </Row>

      <Row label="典型组合：用户卡片加载态">
        <div className="flex flex-row items-center gap-3">
          <Skeleton variant="circle" size="md" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-3.5 w-32" />
            <Skeleton variant="text" lines={2} />
          </div>
        </div>
      </Row>

      <Row label="典型组合：列表项加载态">
        <div className="flex flex-col gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-row items-center gap-3">
              <Skeleton variant="circle" size="sm" />
              <Skeleton variant="text" lines={1} className="flex-1" />
            </div>
          ))}
        </div>
      </Row>
    </div>
  )
}
