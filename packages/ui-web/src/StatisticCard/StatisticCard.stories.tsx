import type { Meta, StoryObj } from '@storybook/react'
import { StatisticCard } from '../StatisticCard'

const meta: Meta<typeof StatisticCard> = {
  title: 'DataDisplay/StatisticCard',
  component: StatisticCard,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof StatisticCard>

export const Default: Story = {
  args: { title: '总销售额', value: '126,560', prefix: '¥', trend: 'up', trendValue: '12.5%' },
}
export const Down: Story = {
  args: { title: '支付笔数', value: '6,560', trend: 'down', trendValue: '3.1%' },
}
