import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Result } from './Result'

const meta = {
  title: 'Feedback/Result',
  component: Result,
  args: {
    status: 'error',
    title: '加载失败',
    description: '网络连接异常，请检查网络后重试。',
    action: <Button size="sm">重新加载</Button>,
  },
} satisfies Meta<typeof Result>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {}

export const Success: Story = {
  args: {
    status: 'success',
    title: '提交成功',
    description: '工单已提交，可在「我的工单」查看处理进度。',
    action: <Button size="sm">查看工单</Button>,
  },
}

export const NotFound: Story = {
  args: {
    status: 'notFound',
    title: '页面不存在',
    description: '你访问的页面已被移除，或地址有误。',
    action: (
      <Button variant="secondary" size="sm">
        返回首页
      </Button>
    ),
  },
}
