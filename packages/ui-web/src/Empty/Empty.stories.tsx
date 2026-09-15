import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Empty } from './Empty'

const meta = {
  title: 'Feedback/Empty',
  component: Empty,
  args: {
    title: '暂无数据',
    description: '当前列表还没有内容，可尝试调整筛选条件。',
  },
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithAction: Story = {
  args: {
    title: '还没有任何订单',
    description: '完成首笔下单后，订单会展示在这里。',
    action: <Button size="sm">去下单</Button>,
  },
}

export const TitleOnly: Story = {
  args: { title: '暂无搜索记录', description: undefined },
}
