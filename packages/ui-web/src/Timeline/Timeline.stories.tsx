import type { Meta, StoryObj } from '@storybook/react'
import { Timeline } from '../Timeline'
import type { TimelineItem } from '../Timeline.types'

const items: TimelineItem[] = [
  { time: '2024-01', title: '项目启动', description: '完成需求评审', color: 'primary' },
  { time: '2024-03', title: '开发完成', color: 'success', dotType: 'solid' },
  { time: '2024-06', title: '待上线', color: 'warning' },
]

const meta: Meta<typeof Timeline> = {
  title: 'DataDisplay/Timeline',
  component: Timeline,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Timeline>

export const Default: Story = { args: { items } }
export const Reverse: Story = { args: { items, reverse: true } }
