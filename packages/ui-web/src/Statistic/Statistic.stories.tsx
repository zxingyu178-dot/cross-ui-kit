import type { Meta, StoryObj } from '@storybook/react'
import { Statistic } from '../Statistic'

const meta: Meta<typeof Statistic> = {
  title: 'DataDisplay/Statistic',
  component: Statistic,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Statistic>

export const Default: Story = { args: { title: '活跃用户', value: 12345, suffix: '人' } }
export const Decimal: Story = {
  args: { title: '转化率', value: 3.14159, precision: 2, suffix: '%' },
}
export const Loading: Story = { args: { title: '加载中', value: 0, loading: true } }
