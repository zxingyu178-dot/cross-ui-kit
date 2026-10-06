/**
 * SearchResultPage 搜索结果页（web）—— 搜索框 + 筛选 + 结果列表 + 分页。
 */
import { useState } from 'react'
import { Card, Search, Tag, Pagination } from '@kit/ui-web'

const results = [
  {
    title: 'Button 按钮组件 - CrossUI Kit',
    desc: '按钮用于触发一个操作，支持 primary/secondary/ghost/danger/link 五种变体…',
    tag: '组件',
  },
  {
    title: 'Button 设计规范',
    desc: '按钮的尺寸、状态、禁用、加载样式统一规范，最小高度 36px…',
    tag: '规范',
  },
  {
    title: 'Button 示例代码',
    desc: 'import { Button } from "@kit/ui-web"，通过 variant 控制变体…',
    tag: '代码',
  },
  { title: '按钮组 ButtonGroup', desc: '多个按钮组合使用，支持横向排列和间距控制…', tag: '组件' },
  {
    title: '图标按钮 IconButton',
    desc: '仅包含图标的按钮，用于工具栏、卡片操作等紧凑场景…',
    tag: '组件',
  },
]

export function SearchResultPage() {
  const [keyword, setKeyword] = useState('Button')

  return (
    <Card className="mx-auto max-w-3xl">
      <Search value={keyword} onChange={setKeyword} enterButton enterButtonText="搜索" />

      <div className="mt-4 flex items-center justify-between">
        <p className="text-bodySm text-text-secondary">找到约 128 条结果（用时 0.03 秒）</p>
        <div className="flex gap-2">
          <Tag variant="primary">全部</Tag>
          <Tag variant="neutral">组件</Tag>
          <Tag variant="neutral">规范</Tag>
          <Tag variant="neutral">代码</Tag>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {results.map((r, i) => (
          <div key={i} className="border-b border-border-default pb-3">
            <div className="flex items-center gap-2">
              <Tag variant="info" tone="soft">
                {r.tag}
              </Tag>
              <h3 className="text-bodyMd font-medium text-primary-default hover:underline">
                {r.title}
              </h3>
            </div>
            <p className="mt-1 text-bodySm text-text-secondary">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <Pagination current={1} pageSize={10} total={128} onChange={() => {}} />
      </div>
    </Card>
  )
}
