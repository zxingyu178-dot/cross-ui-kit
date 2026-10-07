import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Dialog } from './Dialog'

describe('Dialog', () => {
  it('open=true 渲染标题与正文', () => {
    render(<Dialog open title="提示" description="确认操作？" onOpenChange={() => {}} />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('提示')).toBeInTheDocument()
    expect(screen.getByText('确认操作？')).toBeInTheDocument()
  })

  it('点击确定触发 onConfirm 并请求关闭', async () => {
    const onConfirm = vi.fn()
    const onOpenChange = vi.fn()
    render(<Dialog open title="t" onConfirm={onConfirm} onOpenChange={onOpenChange} />)
    await userEvent.click(screen.getByRole('button', { name: '确定' }))
    expect(onConfirm).toHaveBeenCalledTimes(1)
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('点击取消触发 onCancel 并请求关闭', async () => {
    const onCancel = vi.fn()
    const onOpenChange = vi.fn()
    render(<Dialog open title="t" onCancel={onCancel} onOpenChange={onOpenChange} />)
    await userEvent.click(screen.getByRole('button', { name: '取消' }))
    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('onConfirm 返回 false 时不关闭', async () => {
    const onOpenChange = vi.fn()
    render(<Dialog open title="t" onConfirm={() => false} onOpenChange={onOpenChange} />)
    await userEvent.click(screen.getByRole('button', { name: '确定' }))
    expect(onOpenChange).not.toHaveBeenCalled()
  })

  it('open=false 不渲染对话框', () => {
    render(<Dialog open={false} title="t" onOpenChange={() => {}} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
