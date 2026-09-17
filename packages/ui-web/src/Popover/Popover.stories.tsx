import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from '../Popover'

const meta: Meta<typeof Popover> = {
  title: 'Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  args: {
    trigger: <button className="rounded border px-3 py-1">点击 ▼</button>,
    content: <div>弹出内容</div>,
  },
}
