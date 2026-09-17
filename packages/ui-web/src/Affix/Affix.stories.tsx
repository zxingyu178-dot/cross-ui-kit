import type { Meta, StoryObj } from '@storybook/react'
import { Affix } from '../Affix'
import { Button } from '../../Button'

const meta: Meta<typeof Affix> = { title: 'Other/Affix', component: Affix, tags: ['autodocs'] }
export default meta
type Story = StoryObj<typeof Affix>

export const Top: Story = {
  args: { offsetTop: 20 },
  render: (args) => (
    <Affix {...args}>
      <Button>固定在顶部</Button>
    </Affix>
  ),
}
