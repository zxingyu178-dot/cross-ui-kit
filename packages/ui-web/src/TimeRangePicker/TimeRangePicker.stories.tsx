import type { Meta, StoryObj } from '@storybook/react'
import { TimeRangePicker } from '../TimeRangePicker'

const meta: Meta<typeof TimeRangePicker> = {
  title: 'Form/TimeRangePicker',
  component: TimeRangePicker,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof TimeRangePicker>

export const Default: Story = { args: {} }
export const Disabled: Story = { args: { value: ['09:00', '18:00'], disabled: true } }
