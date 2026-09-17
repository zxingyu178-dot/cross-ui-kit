import { PageHeader } from '../index'
import { Button } from '../../Button'

export function States() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础页头</span>
        <div className="rounded-lg border border-border-default bg-bg-card p-6">
          <PageHeader title="页面标题" subTitle="这是页面副标题，用于描述页面内容。" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">带面包屑与操作按钮</span>
        <div className="rounded-lg border border-border-default bg-bg-card p-6">
          <PageHeader
            title="订单详情"
            subTitle="查看订单的详细信息和状态。"
            breadcrumb={<span>首页 / 订单管理 / 订单详情</span>}
            extra={
              <>
                <Button variant="secondary">返回</Button>
                <Button>编辑</Button>
              </>
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">带底部内容</span>
        <div className="rounded-lg border border-border-default bg-bg-card p-6">
          <PageHeader
            title="数据概览"
            subTitle="实时监控关键业务指标。"
            footer={
              <div className="flex gap-4 text-caption text-text-tertiary">
                <span>更新时间：2026-09-17 10:30</span>
                <span>数据来源：实时接口</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
