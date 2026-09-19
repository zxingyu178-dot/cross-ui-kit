import { ProgressRing } from '../index'

export function States() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <ProgressRing value={30}>30%</ProgressRing>
      <ProgressRing value={65} tone="success">
        65%
      </ProgressRing>
      <ProgressRing value={85} tone="warning">
        85%
      </ProgressRing>
      <ProgressRing value={95} tone="danger">
        95%
      </ProgressRing>
      <ProgressRing value={50} size={120} strokeWidth={12}>
        <span className="text-title-sm font-medium">50%</span>
      </ProgressRing>
    </div>
  )
}
