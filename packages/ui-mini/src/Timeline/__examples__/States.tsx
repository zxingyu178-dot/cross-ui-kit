/** Timeline 示例：默认 + 倒序（mini）。 */
import { View } from '@tarojs/components'
import { Timeline } from '../index'
import type { TimelineItem } from '../Timeline.types'

const ITEMS: TimelineItem[] = [
  {
    time: '2024-01-15',
    title: '项目启动',
    description: '完成需求评审与技术选型。',
    color: 'primary',
  },
  { time: '2024-03-20', title: '基础组件完成', color: 'success', dotType: 'solid' },
  { time: '2024-05-10', title: '反馈类组件补齐', color: 'info' },
  { time: '2024-06-01', title: '待上线', description: '等待测试验收。', color: 'warning' },
]

export function States() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 12 }}>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <View style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>
          默认（outline 圆点）
        </View>
        <Timeline items={ITEMS} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <View style={{ fontSize: 12, color: 'var(--kit-color-text-tertiary)' }}>倒序</View>
        <Timeline items={ITEMS} reverse />
      </View>
    </View>
  )
}
