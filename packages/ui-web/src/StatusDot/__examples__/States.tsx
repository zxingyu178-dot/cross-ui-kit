import { StatusDot } from '../index'

export function States() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <StatusDot tone="success" text="运行中" />
        <StatusDot tone="warning" text="待处理" />
        <StatusDot tone="danger" text="异常" />
        <StatusDot tone="info" text="同步中" />
        <StatusDot tone="neutral" text="已停用" />
        <StatusDot tone="primary" text="主色" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <StatusDot tone="success" outlined />
        <StatusDot tone="danger" outlined text="带描边" />
        <StatusDot tone="info" size={12} text="大圆点 12px" />
      </div>
    </div>
  )
}
