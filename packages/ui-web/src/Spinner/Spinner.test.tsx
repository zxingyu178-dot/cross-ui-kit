import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('渲染 role=status', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('accessibilityLabel 提供可访问名', () => {
    render(<Spinner accessibilityLabel="加载中" />)
    expect(screen.getByRole('status', { name: '加载中' })).toBeInTheDocument()
  })
})
