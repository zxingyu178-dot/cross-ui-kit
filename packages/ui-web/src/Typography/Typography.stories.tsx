import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from '../Typography'

const meta: Meta<typeof Typography> = {
  title: 'DataDisplay/Typography',
  component: Typography,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = { args: { variant: 'body', children: '正文内容' } }
