import { Descriptions } from '../index'

const USER_ITEMS = [
  { label: '姓名', value: '张三' },
  { label: '手机号', value: '138****8888' },
  { label: '邮箱', value: 'zhangsan@example.com', span: 2 },
  { label: '地址', value: '江苏省徐州市', span: 2 },
  { label: '备注', value: '这是一段较长的备注信息，用于测试描述列表的自动换行和布局效果。' },
]

export function States() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="mb-2 block text-caption text-text-tertiary">基础（3 列）</span>
        <Descriptions title="用户信息" items={USER_ITEMS} />
      </div>
      <div>
        <span className="mb-2 block text-caption text-text-tertiary">带边框（2 列）</span>
        <Descriptions title="订单信息" column={2} bordered items={USER_ITEMS} />
      </div>
    </div>
  )
}
