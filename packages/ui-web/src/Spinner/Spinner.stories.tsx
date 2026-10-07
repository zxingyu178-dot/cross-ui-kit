import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta = {
  title: 'Feedback/Spinner',
  component: Spinner,
  args: {},
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-row items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
}

export const Tones: Story = {
  render: () => (
    <div className="flex flex-row items-center gap-4">
      <Spinner tone="primary" />
      <Spinner tone="muted" />
    </div>
  ),
}

export const Inverse: Story = {
  render: () => (
    <div className="flex items-center gap-2 rounded-md bg-primary-default px-4 py-2">
      <Spinner size="sm" tone="inverse" />
      <span className="text-body-sm text-white">提交中…</span>
    </div>
  ),
}

export const LongText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner accessibilityLabel="这是一个超长的加载状态描述文本，用于验证可访问名称与布局表现" />
      <span className="text-body-sm text-text-secondary">
        这是一段超长的加载提示文本，用于验证换行与布局稳定性。
      </span>
    </div>
  ),
}
