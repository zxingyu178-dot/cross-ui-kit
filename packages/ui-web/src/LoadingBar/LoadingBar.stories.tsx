import type { Meta, StoryObj } from '@storybook/react'
import { LoadingBar } from '../LoadingBar'

const meta: Meta<typeof LoadingBar> = {
  title: 'Feedback/LoadingBar',
  component: LoadingBar,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof LoadingBar>

export const Default: Story = { args: { progress: 60, visible: true } }
