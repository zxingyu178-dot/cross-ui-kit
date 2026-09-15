/** Tabs 示例：受控带内容、非受控、小号、含禁用项、纯头导航（web）。 */
import { useState } from 'react'
import { Tabs } from '../index'

export function States() {
  const [tab, setTab] = useState('overview')

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-body-sm text-text-tertiary">受控（带内容，当前：{tab}）</span>
        <Tabs
          value={tab}
          onValueChange={setTab}
          items={[
            { value: 'overview', label: '概览', content: <p>这里是概览面板内容。</p> },
            { value: 'analytics', label: '分析', content: <p>这里是分析面板内容。</p> },
            { value: 'settings', label: '设置', disabled: true, content: <p>设置（禁用）</p> },
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-body-sm text-text-tertiary">非受控（默认第二项）</span>
        <Tabs
          defaultValue="b"
          items={[
            { value: 'a', label: '标签 A', content: <p>面板 A</p> },
            { value: 'b', label: '标签 B', content: <p>面板 B</p> },
            { value: 'c', label: '标签 C', content: <p>面板 C</p> },
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-body-sm text-text-tertiary">小号 sm</span>
        <Tabs
          size="sm"
          defaultValue="x"
          items={[
            { value: 'x', label: '日', content: <p>日视图</p> },
            { value: 'y', label: '周', content: <p>周视图</p> },
            { value: 'z', label: '月', content: <p>月视图</p> },
          ]}
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-body-sm text-text-tertiary">
          纯头导航（不内置面板，外部按 value 渲染）
        </span>
        <Tabs
          defaultValue="day"
          items={[
            { value: 'day', label: '今日' },
            { value: 'week', label: '本周' },
            { value: 'month', label: '本月' },
          ]}
        />
      </div>
    </div>
  )
}
