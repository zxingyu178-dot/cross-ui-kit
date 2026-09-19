import type { Meta, StoryObj } from '@storybook/react'
import { ProgressRing } from '../ProgressRing'

const meta: Meta<typeof ProgressRing> = {
  title: 'Feedback/ProgressRing',
  component: ProgressRing,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof ProgressRing>

export const Default: Story = { args: { value: 65, children: '65%' } }
