import type { Meta, StoryObj } from '@storybook/react'
import { Search } from '../Search'

const meta: Meta<typeof Search> = { title: 'Form/Search', component: Search, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Search>

export const Default: Story = { args: { placeholder: '请输入搜索关键词' } }
export const NoButton: Story = { args: { placeholder: '请输入搜索关键词', enterButton: false } }
