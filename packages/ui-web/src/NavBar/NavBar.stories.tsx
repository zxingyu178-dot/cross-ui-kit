import type { Meta, StoryObj } from '@storybook/react'
import { NavBar } from '../NavBar'

const meta: Meta<typeof NavBar> = {
  title: 'Navigation/NavBar',
  component: NavBar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof NavBar>

export const Default: Story = { args: { title: '详情', onBack: () => {} } }
export const NoBack: Story = { args: { title: '订单', showBack: false } }
