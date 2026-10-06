/**
 * DetailDrawerPage 详情抽屉页（web）—— 列表 + 右侧滑出详情抽屉。
 */
import { useState } from 'react'
import { Card, Button, Tag, Descriptions, Divider } from '@kit/ui-web'

const records = [
  {
    id: 'WO-20260918-001',
    title: '控制器固件升级',
    owner: '赵星宇',
    status: '处理中',
    level: '高',
  },
  {
    id: 'WO-20260917-002',
    title: '仪表显示异常排查',
    owner: '李明',
    status: '待处理',
    level: '中',
  },
  { id: 'WO-20260916-003', title: '电池组例行巡检', owner: '王芳', status: '已完成', level: '低' },
]

export function DetailDrawerPage() {
  const [open, setOpen] = useState(true)
  const [current, setCurrent] = useState(records[0])

  return (
    <div className="relative mx-auto max-w-3xl">
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-titleSm font-medium text-text-primary">工单列表</h3>
          <Button variant="primary" size="sm">
            + 新建工单
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          {records.map((r) => (
            <div
              key={r.id}
              className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 ${
                current?.id === r.id
                  ? 'border-primary-default bg-primary-default/5'
                  : 'border-border-default'
              }`}
              onClick={() => {
                setCurrent(r)
                setOpen(true)
              }}
            >
              <div>
                <p className="text-bodyMd font-medium text-text-primary">{r.title}</p>
                <p className="text-bodySm text-text-secondary">
                  {r.id} · {r.owner}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Tag
                  variant={r.level === '高' ? 'danger' : r.level === '中' ? 'warning' : 'success'}
                >
                  {r.level}
                </Tag>
                <Tag
                  variant={
                    r.status === '已完成'
                      ? 'success'
                      : r.status === '处理中'
                        ? 'primary'
                        : 'neutral'
                  }
                >
                  {r.status}
                </Tag>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 遮罩 */}
      {open && (
        <div className="absolute inset-0 rounded-lg bg-black/30" onClick={() => setOpen(false)} />
      )}

      {/* 右侧抽屉 */}
      <div
        className={`absolute right-0 top-0 h-full w-80 transform bg-bg-card shadow-xl transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-border-default p-4">
          <h3 className="text-titleSm font-medium text-text-primary">工单详情</h3>
          <button onClick={() => setOpen(false)} className="text-text-tertiary">
            ×
          </button>
        </div>
        <div className="p-4">
          <Descriptions
            column={1}
            items={[
              { label: '工单编号', value: current?.id ?? '' },
              { label: '标题', value: current?.title ?? '' },
              { label: '负责人', value: current?.owner ?? '' },
              { label: '优先级', value: current?.level ?? '' },
              { label: '状态', value: current?.status ?? '' },
            ]}
          />
          <Divider />
          <h4 className="mb-2 text-bodyMd font-medium text-text-primary">处理记录</h4>
          <div className="flex flex-col gap-2 text-bodySm text-text-secondary">
            <p>· 赵星宇 接单（09-18 09:20）</p>
            <p>· 已联系现场确认现象（10:05）</p>
            <p>· 等待固件包下发（11:30）</p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex gap-2 border-t border-border-default p-4">
          <Button variant="secondary" block size="sm">
            转派
          </Button>
          <Button variant="primary" block size="sm">
            处理完成
          </Button>
        </div>
      </div>
    </div>
  )
}
