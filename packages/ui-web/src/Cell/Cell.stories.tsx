import type { Meta, StoryObj } from '@storybook/react'
import { Cell } from '../Cell'

const meta: Meta<typeof Cell> = { title: 'DataDisplay/Cell', component: Cell, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Cell>

export const Default: Story = {
  args: { title: '账号安全', description: '已绑定手机', icon: '🔒', onClick: () => {} },
}
export const WithRight: Story = { args: { title: '消息通知', right: '已开启', clickable: true } }
