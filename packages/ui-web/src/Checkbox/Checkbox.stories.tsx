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
