/**
 * Storybook 故事（web）：Storybook 接入后自动收录；MCP 据此向 AI 暴露 props 与交互。
 * 必须覆盖 normal/loading/disabled/边界值。
 */
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './index'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: '按钮',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'link'],
    },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary' } }
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button variant="primary">主要</Button>
      <Button variant="secondary">次要</Button>
      <Button variant="ghost">幽灵</Button>
      <Button variant="danger">危险</Button>
      <Button variant="link">链接</Button>
    </div>
  ),
}
export const Loading: Story = { args: { loading: true, children: '提交中' } }
export const Disabled: Story = { args: { disabled: true } }
export const Block: Story = { args: { block: true }, render: (a) => <Button {...a} block /> }
export const LongText: Story = {
  args: { children: '这是一个超长按钮文本，用于验证换行、省略与布局稳定性'.repeat(2) },
}
