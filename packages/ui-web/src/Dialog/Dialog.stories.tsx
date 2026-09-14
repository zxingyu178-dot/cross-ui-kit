import type { Meta, StoryObj } from 'storybook/react'
import { useState, type ComponentProps } from 'react'
import { Button } from '../Button'
import { Dialog } from './Dialog'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

/** Storybook 交互容器：受控开关 */
function WithTrigger(args: ComponentProps<typeof Dialog> & { triggerText?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>{args.triggerText ?? '打开弹窗'}</Button>
      <Dialog {...args} open={open} onOpenChange={setOpen} />
    </>
  )
}

export const Basic: Story = {
  render: () => <WithTrigger title="确认操作" description="确定要执行此操作吗？" />,
}
export const Alert: Story = {
  render: () => (
    <WithTrigger
      title="删除确认"
      showCancel={false}
      confirmText="我知道了"
      description="删除后不可恢复。"
      triggerText="警告弹窗"
    />
  ),
}
export const Persist: Story = {
  render: () => (
    <WithTrigger
      title="保存修改"
      closeOnOverlayClick={false}
      closeOnEsc={false}
      confirmText="保存"
      description="遮罩与 Esc 不关闭。"
      triggerText="防误触弹窗"
    />
  ),
}
