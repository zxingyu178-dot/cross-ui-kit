/**
 * ImportExportPage 数据导入导出页（web）—— 导入上传 + 导出格式选择 + 历史记录。
 */
import { useState } from 'react'
import { Card, Button, RadioGroup, Tag, Checkbox } from '@kit/ui-web'

const history = [
  { name: '成员数据导出', file: 'members_20260918.xlsx', time: '2026-09-18 16:20', by: '赵星宇' },
  { name: '工单数据导入', file: 'workorders.csv', time: '2026-09-17 10:05', by: '李明' },
  { name: '配置备份', file: 'config_backup.json', time: '2026-09-15 18:40', by: '赵星宇' },
]

export function ImportExportPage() {
  const [format, setFormat] = useState('xlsx')
  const [picked, setPicked] = useState<string[]>(['members', 'orders'])

  const toggle = (v: string) =>
    setPicked((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]))

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {/* 导入 */}
      <Card>
        <h3 className="mb-3 text-titleSm font-medium text-text-primary">数据导入</h3>
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border-default py-10">
          <span className="text-4xl">📤</span>
          <p className="mt-2 text-bodyMd text-text-primary">点击或拖拽文件到此处上传</p>
          <p className="text-bodySm text-text-secondary">
            支持 .xlsx / .csv / .json，单文件 ≤ 10MB
          </p>
          <Button variant="primary" size="sm" className="mt-3">
            选择文件
          </Button>
        </div>
        <div className="mt-3 rounded-lg bg-bg-secondary p-3 text-bodySm text-text-secondary">
          <p>
            模板：<button className="text-primary-default">下载导入模板</button>
          </p>
          <p className="mt-1">导入前请先阅读字段说明，避免格式错误。</p>
        </div>
      </Card>

      {/* 导出 */}
      <Card>
        <h3 className="mb-3 text-titleSm font-medium text-text-primary">数据导出</h3>
        <p className="mb-2 text-bodySm text-text-secondary">选择导出数据：</p>
        <div className="flex flex-col gap-2">
          {[
            { label: '成员数据', value: 'members' },
            { label: '工单记录', value: 'orders' },
            { label: '操作日志', value: 'logs' },
            { label: '系统配置', value: 'config' },
          ].map((o) => (
            <label key={o.value} className="flex items-center gap-2 text-bodyMd text-text-primary">
              <Checkbox checked={picked.includes(o.value)} onChange={() => toggle(o.value)} />
              {o.label}
            </label>
          ))}
        </div>

        <p className="mb-2 mt-4 text-bodySm text-text-secondary">导出格式：</p>
        <RadioGroup
          options={[
            { label: 'Excel (.xlsx)', value: 'xlsx' },
            { label: 'CSV (.csv)', value: 'csv' },
            { label: 'JSON (.json)', value: 'json' },
          ]}
          value={format}
          onValueChange={setFormat}
        />
        <Button variant="primary" block className="mt-4" disabled={picked.length === 0}>
          导出 {picked.length} 项数据
        </Button>
      </Card>

      {/* 历史记录 */}
      <Card className="lg:col-span-2">
        <h3 className="mb-3 text-titleSm font-medium text-text-primary">导入导出记录</h3>
        <div className="flex flex-col gap-2">
          {history.map((h, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-lg bg-bg-secondary px-4 py-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">📄</span>
                <div>
                  <p className="text-bodySm font-medium text-text-primary">{h.name}</p>
                  <p className="text-bodySm text-text-tertiary">{h.file}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Tag variant="neutral" tone="soft">
                  {h.by}
                </Tag>
                <span className="text-bodySm text-text-secondary">{h.time}</span>
                <Button variant="ghost" size="sm">
                  下载
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
