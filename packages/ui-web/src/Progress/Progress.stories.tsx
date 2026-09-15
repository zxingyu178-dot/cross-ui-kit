import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './Progress'

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  args: { value: 60 },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Tones: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Progress value={60} tone="primary" />
      <Progress value={60} tone="success" />
      <Progress value={60} tone="warning" />
      <Progress value={60} tone="danger" />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Progress value={45} size="sm" />
      <Progress value={45} size="md" />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Progress value={28} showLabel />
      <Progress value={86} tone="success" showLabel />
    </div>
  ),
}
