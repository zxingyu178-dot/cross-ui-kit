import type { Meta, StoryObj } from '@storybook/react'
import { AutoComplete } from '../AutoComplete'

const options = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
]

const meta: Meta<typeof AutoComplete> = {
  title: 'Form/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof AutoComplete>

export const Default: Story = { args: { options, placeholder: '输入城市名' } }
export const Disabled: Story = { args: { options, defaultValue: '北京', disabled: true } }
