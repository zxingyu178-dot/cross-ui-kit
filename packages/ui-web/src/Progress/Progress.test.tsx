import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Progress } from './Progress'

describe('Progress', () => {
  it('渲染进度条并反映 aria-valuenow', () => {
    render(<Progress value={40} label="进度" />)
    const bar = screen.getByRole('progressbar', { name: '进度' })
    expect(bar).toHaveAttribute('aria-valuenow', '40')
  })

  it('label 提供可访问名', () => {
    render(<Progress value={10} label="下载进度" />)
    expect(screen.getByRole('progressbar', { name: '下载进度' })).toBeInTheDocument()
  })

  it('showLabel 时显示百分比并以其作为可访问名', () => {
    render(<Progress value={50} showLabel label="进度" />)
    const bar = screen.getByRole('progressbar')
    expect(bar).toHaveAttribute('aria-labelledby')
    expect(screen.getByText('50%')).toBeInTheDocument()
  })
})
