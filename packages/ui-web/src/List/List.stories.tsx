import type { Meta, StoryObj } from '@storybook/react'
import { List } from '../List'

const meta: Meta<typeof List> = { title: 'DataDisplay/List', component: List, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof List>

const data = [
  { key: '1', title: '列表项 1', description: '描述信息' },
  { key: '2', title: '列表项 2', description: '描述信息' },
]

export const Default: Story = { args: { dataSource: data } }
export const Bordered: Story = {
  args: { dataSource: data, bordered: true, header: '标题', footer: '底部' },
}
export const Loading: Story = { args: { loading: true, bordered: true } }
export const Empty: Story = { args: { dataSource: [], bordered: true } }
