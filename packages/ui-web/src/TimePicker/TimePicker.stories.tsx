import type { Meta, StoryObj } from '@storybook/react'
import { TimePicker } from '../TimePicker'

const meta: Meta<typeof TimePicker> = {
  title: 'Form/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof TimePicker>

export const Default: Story = { args: { placeholder: '请选择时间' } }
export const WithValue: Story = { args: { defaultValue: '14:30:00' } }
export const HourMinute: Story = { args: { format: 'HH:mm' as const, defaultValue: '09:00' } }
