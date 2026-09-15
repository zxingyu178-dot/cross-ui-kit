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
