import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './index'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: '首页', href: '#' },
        { label: '组件库', href: '#' },
        { label: 'Breadcrumb 面包屑' },
      ]}
    />
  ),
}

export const LongPath: Story = {
  render: () => (
    <Breadcrumb
      items={[
        { label: '首页', href: '#' },
        { label: '分类', href: '#' },
        { label: '子分类', href: '#' },
        { label: '商品', href: '#' },
        { label: '详情' },
      ]}
    />
  ),
}

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb
      separator="›"
      items={[{ label: '工作台' }, { label: '项目' }, { label: '迭代计划' }]}
    />
  ),
}
