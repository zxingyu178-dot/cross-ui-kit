import type { Meta, StoryObj } from '@storybook/react'
import { TabBar } from '../TabBar'

const meta: Meta<typeof TabBar> = {
  title: 'Navigation/TabBar',
  component: TabBar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof TabBar>

export const Default: Story = {
  args: {
    defaultActiveKey: 'home',
    items: [
      { key: 'home', label: '首页', icon: '⌂' },
      { key: 'order', label: '订单', icon: '☰' },
      { key: 'me', label: '我的', icon: '☺' },
    ],
  },
}
