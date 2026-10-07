import type { Meta, StoryObj } from 'storybook/react'
import { RadioGroup } from './RadioGroup'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    defaultValue: 'a',
    options: [
      { value: 'a', label: '选项 A' },
      { value: 'b', label: '选项 B' },
      { value: 'c', label: '选项 C（禁用）', disabled: true },
    ],
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
export const Horizontal: Story = { args: { direction: 'horizontal' } }
export const Small: Story = { args: { size: 'sm' } }
export const GroupDisabled: Story = { args: { disabled: true } }
export const LongText: Story = {
  args: {
    options: [
      {
        value: 'a',
        label: '这是一个超长的单选项标签文本，用于验证换行与对齐表现'.repeat(2),
      },
      { value: 'b', label: '选项 B' },
    ],
  },
}
