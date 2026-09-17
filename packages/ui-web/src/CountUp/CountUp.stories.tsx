import type { Meta, StoryObj } from '@storybook/react'
import { CountUp } from '../CountUp'

const meta: Meta<typeof CountUp> = {
  title: 'DataDisplay/CountUp',
  component: CountUp,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof CountUp>

export const Default: Story = { args: { value: 12345 } }
export const WithPrefix: Story = { args: { value: 126560, prefix: '¥', decimals: 2 } }
export const Slow: Story = { args: { value: 9999, duration: 3000 } }
