import type { Meta, StoryObj } from '@storybook/react'
import { Tree } from '../Tree'

const meta: Meta<typeof Tree> = { title: 'DataDisplay/Tree', component: Tree, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Tree>

const data = [
  { key: '1', title: '父节点 1', children: [{ key: '1-1', title: '子节点 1-1' }] },
  { key: '2', title: '父节点 2' },
]

export const Default: Story = { args: { data, defaultExpandAll: true } }
