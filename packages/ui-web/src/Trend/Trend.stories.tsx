import type { Meta, StoryObj } from '@storybook/react'
import { Trend } from '../Trend'

const meta: Meta<typeof Trend> = {
  title: 'DataDisplay/Trend',
  component: Trend,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Trend>

export const Up: Story = { args: { direction: 'up', value: '12.5%' } }
export const Down: Story = { args: { direction: 'down', value: '3.2%' } }
export const Inverted: Story = { args: { direction: 'up', value: '8.8%', inverted: true } }
