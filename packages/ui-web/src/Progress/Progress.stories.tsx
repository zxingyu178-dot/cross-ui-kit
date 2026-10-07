import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  args: { value: 60, label: '进度' },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tones: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Progress value={60} label="主要" tone="primary" />
      <Progress value={60} label="成功" tone="success" />
      <Progress value={60} label="警告" tone="warning" />
      <Progress value={60} label="危险" tone="danger" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Progress value={45} label="小号" size="sm" />
      <Progress value={45} label="中号" size="md" />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Progress value={28} label="进度一" showLabel />
      <Progress value={86} label="进度二" tone="success" showLabel />
    </div>
  ),
}

export const LongText: Story = {
  args: {
    value: 60,
    label: '这是一个超长的进度条标签文本，用于验证换行与布局稳定性',
  },
}
