import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Empty } from './Empty'

describe('Empty', () => {
  it('渲染标题与描述', () => {
    render(<Empty title="暂无数据" description="可以尝试刷新" />)
    expect(screen.getByText('暂无数据')).toBeInTheDocument()
    expect(screen.getByText('可以尝试刷新')).toBeInTheDocument()
  })

  it('渲染操作区并响应点击', async () => {
    const onClick = vi.fn()
    render(
      <Empty
        title="空"
        action={
          <button type="button" onClick={onClick}>
            刷新
          </button>
        }
      />,
    )
    const btn = screen.getByRole('button', { name: '刷新' })
    btn.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
