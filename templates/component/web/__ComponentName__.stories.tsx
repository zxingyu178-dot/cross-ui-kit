/**
 * Storybook 故事模板（web 栈必选）：必须覆盖 normal/loading/empty/error/边界值
 * Storybook MCP 会读取这些故事供 AI 理解与测试组件。
 */
import type { Meta, StoryObj } from '@storybook/react'
import { __ComponentName__ } from './__ComponentName__'

const meta = {
  title: 'Components/__ComponentName__',
  component: __ComponentName__,
  args: {
    children: '示例内容',
  },
} satisfies Meta<typeof __ComponentName__>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
export const Loading: Story = { args: { loading: true } }
export const Disabled: Story = { args: { disabled: true } }
export const LongText: Story = { args: { children: '超长文本示例，验证省略与换行策略'.repeat(6) } }
