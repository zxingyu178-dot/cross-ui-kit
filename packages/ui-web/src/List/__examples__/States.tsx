import { List } from '../index'
import type { ListItem } from '../List.types'
import { Badge } from '../../Badge'

const data: ListItem[] = [
  {
    key: '1',
    title: '任务一',
    description: '完成 UI 设计稿评审',
    extra: <Badge variant="success">已完成</Badge>,
  },
  {
    key: '2',
    title: '任务二',
    description: '开发登录页面',
    extra: <Badge variant="warning">进行中</Badge>,
  },
  {
    key: '3',
    title: '任务三',
    description: '编写单元测试',
    extra: <Badge variant="neutral">待开始</Badge>,
  },
  { key: '4', title: '任务四（禁用）', description: '已取消的任务', disabled: true },
]

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础列表（带边框 + 头部 + 底部）</span>
        <List dataSource={data} bordered header="任务列表" footer={`共 ${data.length} 项`} />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">小尺寸 + 无边框</span>
        <div className="w-80">
          <List dataSource={data.slice(0, 2)} size="sm" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">加载中</span>
        <div className="w-80">
          <List loading bordered />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">空状态</span>
        <div className="w-80">
          <List dataSource={[]} bordered emptyText="还没有任务，快去创建吧" />
        </div>
      </div>
    </div>
  )
}
