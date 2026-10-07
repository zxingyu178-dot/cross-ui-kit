import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('渲染标签并与控件关联', () => {
    render(<Checkbox label="同意协议" />)
    expect(screen.getByRole('checkbox', { name: '同意协议' })).toBeInTheDocument()
  })

  it('点击切换并回调 true', async () => {
    const onChange = vi.fn()
    render(<Checkbox label="记住我" onChange={onChange} />)
    await userEvent.click(screen.getByRole('checkbox', { name: '记住我' }))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('受控选中反映 aria-checked', () => {
    render(<Checkbox checked onChange={() => {}} label="已选" />)
    expect(screen.getByRole('checkbox', { name: '已选' })).toHaveAttribute('aria-checked', 'true')
  })

  it('禁用态不可操作', () => {
    render(<Checkbox disabled label="禁用" />)
    expect(screen.getByRole('checkbox', { name: '禁用' })).toBeDisabled()
  })
})
