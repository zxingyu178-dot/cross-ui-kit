import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { TextArea } from './TextArea'

describe('TextArea', () => {
  it('输入触发 onChange', async () => {
    const onChange = vi.fn()
    render(<TextArea placeholder="t" onChange={onChange} />)
    await userEvent.type(screen.getByPlaceholderText('t'), '你好')
    expect(onChange).toHaveBeenLastCalledWith('你好')
  })

  it('showCount 显示字数，maxLength 显示上限', () => {
    render(<TextArea showCount maxLength={10} value="测试" onChange={() => {}} />)
    expect(screen.getByText('2/10')).toBeInTheDocument()
  })

  it('禁用态不可编辑', () => {
    render(<TextArea disabled placeholder="d" />)
    expect(screen.getByPlaceholderText('d')).toBeDisabled()
  })
})
