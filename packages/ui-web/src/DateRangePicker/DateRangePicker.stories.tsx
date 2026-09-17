import type { Meta, StoryObj } from '@storybook/react'
import { DateRangePicker } from '../DateRangePicker'

const meta: Meta<typeof DateRangePicker> = {
  title: 'Form/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof DateRangePicker>

export const Default: Story = { args: {} }
export const Disabled: Story = { args: { value: ['2026-01-01', '2026-12-31'], disabled: true } }
