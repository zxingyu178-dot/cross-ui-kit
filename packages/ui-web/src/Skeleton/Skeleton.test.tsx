import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Skeleton } from './Skeleton'

describe('Skeleton', () => {
  it('text 形态渲染指定行数', () => {
    const { container } = render(<Skeleton variant="text" lines={3} />)
    // 3 个占位行（每行一个 bg-active 块）
    expect(container.querySelectorAll('.bg-bg-active').length).toBe(3)
  })

  it('circle 形态渲染且对辅助技术隐藏', () => {
    render(<Skeleton variant="circle" />)
    const circle = document.querySelector('[aria-hidden="true"]')
    expect(circle).not.toBeNull()
  })

  it('rect 形态渲染且对辅助技术隐藏', () => {
    const { container } = render(<Skeleton variant="rect" />)
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeNull()
  })
})
