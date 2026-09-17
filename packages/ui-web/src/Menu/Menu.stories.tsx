import type { Meta, StoryObj } from '@storybook/react'
import { Menu } from '../Menu'

const meta: Meta<typeof Menu> = { title: 'Navigation/Menu', component: Menu, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Menu>

const items = [
  { key: 'home', label: '首页' },
  {
    key: 'products',
    label: '产品',
    children: [
      { key: 'p1', label: '产品一' },
      { key: 'p2', label: '产品二' },
    ],
  },
  { key: 'about', label: '关于' },
]

export const Horizontal: Story = { args: { items, mode: 'horizontal', selectedKey: 'home' } }
export const Vertical: Story = { args: { items, mode: 'vertical', selectedKey: 'home' } }
