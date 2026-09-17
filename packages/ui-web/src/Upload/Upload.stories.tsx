import type { Meta, StoryObj } from '@storybook/react'
import { Upload } from '../Upload'

const meta: Meta<typeof Upload> = { title: 'Form/Upload', component: Upload, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Upload>

export const Default: Story = { args: {} }
export const Multiple: Story = { args: { multiple: true, maxCount: 5 } }
export const ImageOnly: Story = { args: { accept: 'image/*', multiple: true } }
