/**
 * CalendarPage 日历日程页（web）—— 月历 + 日程列表。
 */
import { useState } from 'react'
import { Card, Tag, Button } from '@kit/ui-web'

const weekDays = ['日', '一', '二', '三', '四', '五', '六']
// 2026-10 从周四开始，占位 4 格
const placeholders = 4
const daysInMonth = 31
const marked: Record<number, { label: string; variant: 'primary' | 'success' | 'warning' }> = {
  8: { label: '产品周会', variant: 'primary' },
  12: { label: '版本发布', variant: 'success' },
  15: { label: '客户演示', variant: 'warning' },
  20: { label: '代码评审', variant: 'primary' },
}

const schedules = [
  { time: '09:30', title: '产品周会', place: '会议室 A', variant: 'primary' as const },
  { time: '14:00', title: '客户需求沟通', place: '线上会议', variant: 'warning' as const },
  { time: '16:30', title: 'UI 走查', place: '设计区', variant: 'success' as const },
]

export function CalendarPage() {
  const [selected, setSelected] = useState(8)

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* 月历 */}
      <Card className="lg:col-span-2">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-titleSm font-medium text-text-primary">2026 年 10 月</h3>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              ‹
            </Button>
            <Button variant="ghost" size="sm">
              ›
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center">
          {weekDays.map((w) => (
            <div key={w} className="py-2 text-bodySm font-medium text-text-secondary">
              {w}
            </div>
          ))}
          {Array.from({ length: placeholders }).map((_, i) => (
            <div key={`p${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const mark = marked[day]
            return (
              <button
                key={day}
                type="button"
                onClick={() => setSelected(day)}
                className={`flex aspect-square flex-col items-center justify-center rounded-lg text-bodySm ${
                  selected === day
                    ? 'bg-primary-default text-white'
                    : 'text-text-primary hover:bg-bg-secondary'
                }`}
              >
                {day}
                {mark ? (
                  <span
                    className={`mt-0.5 h-1 w-1 rounded-full ${selected === day ? 'bg-white' : 'bg-primary-default'}`}
                  />
                ) : null}
              </button>
            )
          })}
        </div>
      </Card>

      {/* 日程列表 */}
      <Card>
        <h3 className="mb-1 text-titleSm font-medium text-text-primary">10 月 {selected} 日</h3>
        <p className="mb-4 text-bodySm text-text-secondary">
          {marked[selected]?.label ?? '暂无日程'}
        </p>
        <div className="flex flex-col gap-3">
          {schedules.map((s) => (
            <div key={s.title} className="flex gap-3 border-l-2 border-primary-default pl-3">
              <div>
                <p className="text-bodySm font-medium text-text-primary">{s.title}</p>
                <p className="text-bodySm text-text-secondary">
                  {s.time} · {s.place}
                </p>
              </div>
              <Tag variant={s.variant} tone="soft" className="ml-auto">
                {s.time}
              </Tag>
            </div>
          ))}
        </div>
        <Button variant="secondary" block size="sm" className="mt-4">
          + 新建日程
        </Button>
      </Card>
    </div>
  )
}
