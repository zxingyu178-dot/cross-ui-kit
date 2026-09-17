import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Alert } from '../Alert'

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: { type: 'info', title: '信息提示', description: '这是一条信息性提示。' },
}
export const Success: Story = {
  args: { type: 'success', title: '操作成功', description: '数据已保存。', closable: true },
}
export const Warning: Story = {
  args: { type: 'warning', title: '警告提示', description: '请谨慎操作。' },
}
export const Error: Story = {
  args: { type: 'error', title: '错误提示', description: '请求失败，请重试。', closable: true },
}
export const WithAction: Story = {
  args: {
    type: 'warning',
    title: '需要操作',
    description: '订阅即将到期。',
    action: (
      <Button size="sm" variant="secondary">
        去续费
      </Button>
    ),
  },
}
