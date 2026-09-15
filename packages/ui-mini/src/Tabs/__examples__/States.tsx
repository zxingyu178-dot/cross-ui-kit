/** Tabs 示例：受控带内容、非受控、小号、含禁用项、纯头导航（mini）。 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import { Tabs } from '../index'

export function States() {
  const [tab, setTab] = useState('overview')

  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12 }}>受控（带内容，当前：{tab}）</Text>
        <Tabs
          value={tab}
          onValueChange={setTab}
          items={[
            { value: 'overview', label: '概览', content: <Text>这里是概览面板内容。</Text> },
            { value: 'analytics', label: '分析', content: <Text>这里是分析面板内容。</Text> },
            {
              value: 'settings',
              label: '设置',
              disabled: true,
              content: <Text>设置（禁用）</Text>,
            },
          ]}
        />
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12 }}>非受控（默认第二项）</Text>
        <Tabs
          defaultValue="b"
          items={[
            { value: 'a', label: '标签 A', content: <Text>面板 A</Text> },
            { value: 'b', label: '标签 B', content: <Text>面板 B</Text> },
            { value: 'c', label: '标签 C', content: <Text>面板 C</Text> },
          ]}
        />
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12 }}>小号 sm</Text>
        <Tabs
          size="sm"
          defaultValue="x"
          items={[
            { value: 'x', label: '日', content: <Text>日视图</Text> },
            { value: 'y', label: '周', content: <Text>周视图</Text> },
            { value: 'z', label: '月', content: <Text>月视图</Text> },
          ]}
        />
      </View>

      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 12 }}>纯头导航（不内置面板）</Text>
        <Tabs
          defaultValue="day"
          items={[
            { value: 'day', label: '今日' },
            { value: 'week', label: '本周' },
            { value: 'month', label: '本月' },
          ]}
        />
      </View>
    </View>
  )
}
