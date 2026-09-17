import type { Meta, StoryObj } from '@storybook/react'
import { BackTop } from '../BackTop'

const meta: Meta<typeof BackTop> = {
  title: 'Other/BackTop',
  component: BackTop,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof BackTop>

export const Default: Story = { args: { visibilityHeight: 200 } }
