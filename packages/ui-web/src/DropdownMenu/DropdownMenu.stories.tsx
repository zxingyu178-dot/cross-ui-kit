import type { Meta, StoryObj } from '@storybook/react'
import { DropdownMenu } from '../DropdownMenu'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Overlay/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  args: {
    trigger: <button className="rounded border px-3 py-1">操作 ▼</button>,
    items: [
      { key: 'edit', label: '编辑' },
      { key: 'delete', label: '删除', danger: true },
    ],
  },
}
