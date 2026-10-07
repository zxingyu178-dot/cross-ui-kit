import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Input } from './Input'

describe('Input', () => {
  it('渲染占位文本', () => {
    render(<Input placeholder="请输入姓名" />)
    expect(screen.getByPlaceholderText('请输入姓名')).toBeInTheDocument()
  })

  it('输入触发 onChange（字符串值）', async () => {
    const onChange = vi.fn()
    render(<Input placeholder="t" onChange={onChange} />)
    await userEvent.type(screen.getByPlaceholderText('t'), 'abc')
    expect(onChange).toHaveBeenCalledWith('a')
    expect(onChange).toHaveBeenLastCalledWith('abc')
  })

  it('受控值正确显示', () => {
    render(<Input value="固定值" onChange={() => {}} />)
    expect(screen.getByDisplayValue('固定值')).toBeInTheDocument()
  })

  it('字符串错误态渲染提示并标记 aria-invalid', () => {
    render(<Input error="必填项不能为空" />)
    expect(screen.getByRole('alert')).toHaveTextContent('必填项不能为空')
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('禁用态不可编辑', () => {
    render(<Input disabled placeholder="d" />)
    expect(screen.getByPlaceholderText('d')).toBeDisabled()
  })
})
