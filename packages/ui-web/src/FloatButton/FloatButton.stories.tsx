import type { Meta, StoryObj } from '@storybook/react'
import { FloatButton } from '../FloatButton'

const meta: Meta<typeof FloatButton> = {
  title: 'Other/FloatButton',
  component: FloatButton,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof FloatButton>

export const Default: Story = { args: { tooltip: '新建' } }
