import { Popover } from '../index'

export function States() {
  return (
    <div className="flex flex-wrap items-start gap-6">
      <Popover
        trigger={
          <button className="rounded-md border border-border-default bg-bg-card px-3 py-2 text-bodyMd text-text-primary hover:bg-bg-muted">
            点击弹出 ▼
          </button>
        }
        content={
          <div className="flex flex-col gap-2">
            <div className="text-bodyMd font-medium text-text-primary">弹出标题</div>
            <div className="text-bodySm text-text-secondary">
              这是弹出层的内容区域，可以放置任意 React 节点。
            </div>
          </div>
        }
      />
      <Popover
        trigger={
          <button className="rounded-md border border-border-default bg-bg-card px-3 py-2 text-bodyMd text-text-primary hover:bg-bg-muted">
            上方弹出 ▲
          </button>
        }
        side="top"
        content={<div className="text-bodySm text-text-secondary">从上方弹出的内容。</div>}
      />
      <Popover
        trigger={
          <button className="rounded-md border border-border-default bg-bg-card px-3 py-2 text-bodyMd text-text-primary hover:bg-bg-muted">
            右对齐弹出 ▶
          </button>
        }
        align="end"
        content={<div className="text-bodySm text-text-secondary">右对齐弹出的内容。</div>}
      />
    </div>
  )
}
