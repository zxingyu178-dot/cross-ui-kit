import type { Meta, StoryObj } from 'storybook/react'
import { useState } from 'react'
import { Button } from '../Button'
import { Toast, type ToastPosition, type ToastType } from './Toast'

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

function Demo() {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<ToastType>('success')
  const [position, setPosition] = useState<ToastPosition>('center')
  const trigger = (t: ToastType, p: ToastPosition = 'center') => {
    setType(t)
    setPosition(p)
    setOpen(true)
  }
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => trigger('success')}>成功</Button>
      <Button variant="danger" onClick={() => trigger('error')}>
        错误
      </Button>
      <Button variant="secondary" onClick={() => trigger('warning')}>
        警告
      </Button>
      <Button variant="ghost" onClick={() => trigger('success', 'top')}>
        顶部
      </Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        type={type}
        message="提示内容示例"
        position={position}
      />
    </div>
  )
}

export const Basic: Story = { render: () => <Demo /> }

/** 超长消息：验证 Toast 在超长文本下的换行、截断与布局（同时满足 ≥2 story） */
function LongDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>超长消息</Button>
      <Toast
        open={open}
        onOpenChange={setOpen}
        message={'这是一条超长的提示消息，用于验证 Toast 在超长文本下的换行、截断与布局稳定性。'.repeat(
          2,
        )}
      />
    </>
  )
}
export const LongText: Story = { render: () => <LongDemo /> }
