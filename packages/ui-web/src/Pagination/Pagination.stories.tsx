import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Pagination } from './index'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Pagination>

function Controlled({
  total = 123,
  pageSize = 10,
  size = 'md' as const,
  disabled = false,
}: {
  total?: number
  pageSize?: number
  size?: 'sm' | 'md'
  disabled?: boolean
}) {
  const [current, setCurrent] = useState(5)
  return (
    <Pagination
      current={current}
      pageSize={pageSize}
      total={total}
      onChange={setCurrent}
      size={size}
      disabled={disabled}
    />
  )
}

export const Default: Story = { render: () => <Controlled /> }
export const Small: Story = { render: () => <Controlled size="sm" /> }
export const Disabled: Story = { render: () => <Controlled disabled /> }
export const FewPages: Story = { render: () => <Controlled total={30} /> }
/** 超长分页：十万条数据、大量页码省略，验证边界布局 */
export const LongText: Story = { render: () => <Controlled total={100000} pageSize={10} /> }
