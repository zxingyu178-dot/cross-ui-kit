import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from '../DatePicker'

const meta: Meta<typeof DatePicker> = {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = { args: { placeholder: '请选择日期' } }
export const WithValue: Story = { args: { defaultValue: new Date(2024, 0, 15) } }
export const ChineseFormat: Story = {
  args: { defaultValue: new Date(), format: 'YYYY年MM月DD日' as const },
}
