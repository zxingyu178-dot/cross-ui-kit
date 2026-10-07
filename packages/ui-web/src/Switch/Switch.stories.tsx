import type { Meta, StoryObj } from 'storybook/react'
import { Switch } from './Switch'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: { defaultChecked: true, label: '开关' },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
export const Unchecked: Story = { args: { defaultChecked: false } }
export const Small: Story = { args: { size: 'sm' } }
export const WithLabel: Story = { args: { label: '接收通知' } }
export const Disabled: Story = { args: { disabled: true } }
export const Loading: Story = { args: { loading: true } }
export const LongText: Story = {
  args: {
    label: '这是一个超长的开关标签文本，用于验证超长标签下的换行与布局稳定性'.repeat(2),
  },
}
