/**
 * DetailPage 详情页模板（web）—— PageHeader + Descriptions + Card + 操作区。
 */
import { Button, Card, Descriptions, Divider, Tag, type DescriptionsItem } from '@kit/ui-web'

export interface DetailPageProps {
  title?: string
  description?: string
  status?: 'active' | 'inactive' | 'pending'
  items?: DescriptionsItem[]
  onEdit?: () => void
  onDelete?: () => void
  onBack?: () => void
}

const statusVariant = { active: 'success', inactive: 'neutral', pending: 'warning' } as const
const statusLabel = { active: '启用', inactive: '停用', pending: '待审' } as const

export function DetailPage({
  title = '详情',
  description,
  status = 'active',
  items = [],
  onEdit,
  onDelete,
  onBack,
}: DetailPageProps) {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-bodySm text-text-secondary hover:text-text-primary"
            onClick={onBack}
          >
            ← 返回
          </button>
          <h1 className="text-titleMd font-medium text-text-primary">{title}</h1>
          <Tag variant={statusVariant[status]}>{statusLabel[status]}</Tag>
        </div>
        <div className="flex gap-2">
          <Button variant="danger" onClick={onDelete}>
            删除
          </Button>
          <Button variant="primary" onClick={onEdit}>
            编辑
          </Button>
        </div>
      </div>

      {description ? <p className="text-bodySm text-text-secondary">{description}</p> : null}

      <Card>
        <Descriptions title="基本信息" items={items} column={2} bordered />
      </Card>

      <Card>
        <div className="mb-3">
          <h2 className="text-titleSm font-medium text-text-primary">其他信息</h2>
        </div>
        <Divider />
        <Descriptions items={items.slice(4)} column={2} />
      </Card>
    </div>
  )
}
