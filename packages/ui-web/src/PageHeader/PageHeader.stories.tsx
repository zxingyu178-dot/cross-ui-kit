import type { Meta, StoryObj } from '@storybook/react'
import { PageHeader } from '../PageHeader'

const meta: Meta<typeof PageHeader> = {
  title: 'Navigation/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof PageHeader>

export const Default: Story = { args: { title: '页面标题', subTitle: '页面副标题描述' } }
export const WithBreadcrumb: Story = {
  args: { title: '订单详情', subTitle: '查看订单详情', breadcrumb: '首页 / 订单 / 详情' },
}
