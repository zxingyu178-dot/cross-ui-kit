import type { Meta, StoryObj } from '@storybook/react'
import { Backdrop } from '../Backdrop'

const meta: Meta<typeof Backdrop> = {
  title: 'Overlay/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Backdrop>

export const Default: Story = { args: { open: true, children: <div>内容</div> } }
