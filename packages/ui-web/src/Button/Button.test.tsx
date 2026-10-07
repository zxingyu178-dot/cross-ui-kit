import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('渲染子内容', () => {
    render(<Button>保存</Button>)
    expect(screen.getByRole('button', { name: '保存' })).toBeInTheDocument()
  })

  it('点击触发 onClick', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>确定</Button>)
    await userEvent.click(screen.getByRole('button', { name: '确定' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('禁用时不响应点击', async () => {
    const onClick = vi.fn()
    render(
      <Button disabled onClick={onClick}>
        禁用
      </Button>,
    )
    const btn = screen.getByRole('button', { name: '禁用' })
    expect(btn).toBeDisabled()
    await userEvent.click(btn)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('加载时禁用并标记 aria-busy', () => {
    render(<Button loading>提交</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
    expect(btn).toHaveAttribute('aria-busy', 'true')
  })
})
