import type { Meta, StoryObj } from '@storybook/react'
import { CodeBlock } from '../CodeBlock'

const meta: Meta<typeof CodeBlock> = {
  title: 'DataDisplay/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof CodeBlock>

export const Default: Story = { args: { code: `const a = 1`, language: 'ts' } }
export const WithLineNumbers: Story = {
  args: { code: `const a = 1\nconst b = 2`, language: 'ts', showLineNumbers: true },
}
