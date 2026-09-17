import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from '../Drawer'

const meta: Meta<typeof Drawer> = { title: 'Overlay/Drawer', component: Drawer, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Drawer>

export const Right: Story = {
  args: { open: true, title: '右侧抽屉', children: '抽屉内容', placement: 'right' },
}
export const Left: Story = {
  args: { open: true, title: '左侧抽屉', children: '抽屉内容', placement: 'left' },
}
export const Bottom: Story = {
  args: { open: true, title: '底部抽屉', children: '抽屉内容', placement: 'bottom' },
}
