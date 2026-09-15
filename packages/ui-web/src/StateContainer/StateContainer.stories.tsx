import type { Meta, StoryObj } from '@storybook/react'
import { StateContainer } from './StateContainer'

const normal = (
  <ul className="flex flex-col gap-2 p-6">
    {['工单 #1', '工单 #2', '工单 #3'].map((r) => (
      <li
        key={r}
        className="rounded-md border border-border-default px-4 py-3 text-body-sm text-text-primary"
      >
        {r}
      </li>
    ))}
  </ul>
)

const meta = {
  title: 'Feedback/StateContainer',
  component: StateContainer,
  args: { children: normal },
} satisfies Meta<typeof StateContainer>

export default meta
type Story = StoryObj<typeof meta>

export const LoadingSkeleton: Story = { args: { status: 'loading' } }

export const LoadingSpinner: Story = { args: { status: 'loading', loadingMode: 'spinner' } }

export const EmptyState: Story = { args: { status: 'empty' } }

export const ErrorState: Story = {
  args: { status: 'error', onRetry: () => undefined },
}

export const Success: Story = { args: { status: 'success' } }
