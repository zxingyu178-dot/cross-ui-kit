import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  args: {},
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Rect: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3">
      <Skeleton />
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-24 w-full rounded-lg" />
    </div>
  ),
}

export const Circle: Story = {
  render: () => (
    <div className="flex w-80 flex-row items-center gap-4">
      <Skeleton variant="circle" size="sm" />
      <Skeleton variant="circle" size="md" />
      <Skeleton variant="circle" size="lg" />
    </div>
  ),
}

export const Text: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-4">
      <Skeleton variant="text" lines={3} />
      <Skeleton variant="text" lines={5} />
    </div>
  ),
}

export const CardComposition: Story = {
  render: () => (
    <div className="flex w-80 flex-row items-center gap-3">
      <Skeleton variant="circle" size="md" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-3.5 w-32" />
        <Skeleton variant="text" lines={2} />
      </div>
    </div>
  ),
}
