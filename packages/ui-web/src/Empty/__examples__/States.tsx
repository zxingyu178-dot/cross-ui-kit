import type { ReactNode } from 'react'
import { Button } from '../../Button'
import { Empty } from '../index'

function Card({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-border-default bg-bg-page">
      <span className="border-b border-border-default px-4 py-2 text-caption text-text-tertiary">
        {label}
      </span>
      {children}
    </div>
  )
}

/** 自定义「无搜索结果」图形：浅蓝圆底 + 放大镜 SVG */
function SearchEmptyIcon() {
  return (
    <div
      className="flex size-24 items-center justify-center rounded-full bg-primary-bg"
      aria-hidden
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary-default"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  )
}

export function States() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card label="基础空态（默认图形 + 标题 + 描述）">
        <Empty title="暂无数据" description="当前列表还没有内容，可尝试调整筛选条件。" />
      </Card>

      <Card label="带操作（action slot 放 Button）">
        <Empty
          title="还没有任何订单"
          description="完成首笔下单后，订单会展示在这里。"
          action={<Button size="sm">去下单</Button>}
        />
      </Card>

      <Card label="仅标题（无描述、无操作）">
        <Empty title="暂无搜索记录" />
      </Card>

      <Card label="自定义图标（无搜索结果场景）">
        <Empty
          icon={<SearchEmptyIcon />}
          title="未找到相关结果"
          description="换个关键词，或检查拼写后重试。"
          action={
            <Button variant="secondary" size="sm">
              清空筛选
            </Button>
          }
        />
      </Card>
    </div>
  )
}
