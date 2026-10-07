import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Tag } from './Tag'

describe('Tag', () => {
  it('渲染子内容', () => {
    render(<Tag>标签</Tag>)
    expect(screen.getByText('标签')).toBeInTheDocument()
  })

  it('可点击时触发 onClick', async () => {
    const onClick = vi.fn()
    render(<Tag onClick={onClick}>点我</Tag>)
    await userEvent.click(screen.getByRole('button', { name: /点我/ }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('选中态标记 aria-pressed', () => {
    render(<Tag selected>已选</Tag>)
    // aria-pressed 挂在外层标签（文本在内层 span）
    expect(screen.getByText('已选').parentElement).toHaveAttribute('aria-pressed', 'true')
  })

  it('可关闭时点击 × 触发 onClose，且不冒泡到 onClick', async () => {
    const onClose = vi.fn()
    const onClick = vi.fn()
    render(
      <Tag closable onClose={onClose} onClick={onClick}>
        可关闭
      </Tag>,
    )
    await userEvent.click(screen.getByRole('button', { name: '移除标签' }))
    expect(onClose).toHaveBeenCalledTimes(1)
    expect(onClick).not.toHaveBeenCalled()
  })
})
