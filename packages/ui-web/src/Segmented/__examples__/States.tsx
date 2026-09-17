import { useState } from 'react'
import { Segmented } from '../index'

export function States() {
  const [mode, setMode] = useState('day')
  const [view, setView] = useState('list')
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">基础（受控）</span>
        <Segmented
          value={mode}
          onChange={setMode}
          options={[
            { label: '日', value: 'day' },
            { label: '周', value: 'week' },
            { label: '月', value: 'month' },
          ]}
        />
        <span className="text-bodySm text-text-secondary">当前：{mode}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">含禁用项</span>
        <Segmented
          value={view}
          onChange={setView}
          options={[
            { label: '列表', value: 'list' },
            { label: '网格', value: 'grid' },
            { label: '看板', value: 'board', disabled: true },
          ]}
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-caption text-text-tertiary">尺寸 / 整体禁用</span>
        <div className="flex flex-wrap items-center gap-3">
          <Segmented
            size="sm"
            defaultValue="a"
            options={[
              { label: '小', value: 'a' },
              { label: '中', value: 'b' },
            ]}
          />
          <Segmented
            size="md"
            defaultValue="a"
            options={[
              { label: '中', value: 'a' },
              { label: '大', value: 'b' },
            ]}
          />
          <Segmented
            size="lg"
            defaultValue="a"
            options={[
              { label: '大', value: 'a' },
              { label: '更大', value: 'b' },
            ]}
          />
          <Segmented
            disabled
            defaultValue="a"
            options={[
              { label: '禁用', value: 'a' },
              { label: '项', value: 'b' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
