import type { Meta, StoryObj } from 'storybook/react'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { label: '复选框' },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Indeterminate: Story = { args: { indeterminate: true, checked: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Error: Story = { args: { error: true } }
export const LongText: Story = {
  args: {
    label: '这是一个超长的复选框标签文本，用于验证超长标签下的换行与布局对齐表现'.repeat(2),
  },
}
