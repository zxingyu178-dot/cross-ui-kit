import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Switch } from './Switch'

describe('Switch', () => {
  it('渲染标签并与控件关联', () => {
    render(<Switch label="接收通知" />)
    expect(screen.getByRole('switch', { name: '接收通知' })).toBeInTheDocument()
  })

  it('点击切换并回调 true', async () => {
    const onCheckedChange = vi.fn()
    render(<Switch label="开关" onCheckedChange={onCheckedChange} />)
    await userEvent.click(screen.getByRole('switch', { name: '开关' }))
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('受控开态反映 aria-checked', () => {
    render(<Switch checked label="已开" onCheckedChange={() => {}} />)
    expect(screen.getByRole('switch', { name: '已开' })).toHaveAttribute('aria-checked', 'true')
  })

  it('loading 期间点击不回调', async () => {
    const onCheckedChange = vi.fn()
    render(<Switch loading label="加载中" onCheckedChange={onCheckedChange} />)
    await userEvent.click(screen.getByRole('switch', { name: '加载中' }))
    expect(onCheckedChange).not.toHaveBeenCalled()
  })
})
