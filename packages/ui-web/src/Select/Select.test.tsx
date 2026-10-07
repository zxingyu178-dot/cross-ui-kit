import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Select } from './Select'

const options = [
  { label: '选项一', value: 'a' },
  { label: '选项二', value: 'b' },
]

describe('Select', () => {
  it('渲染占位文本', () => {
    render(<Select options={options} placeholder="请选择" label="选项" />)
    expect(screen.getByRole('combobox')).toHaveTextContent('请选择')
  })

  it('可见 label 提供可访问名', () => {
    render(<Select options={options} label="城市" />)
    expect(screen.getByRole('combobox', { name: '城市' })).toBeInTheDocument()
  })

  it('打开并选择触发 onChange', async () => {
    const onChange = vi.fn()
    render(<Select options={options} label="选项" onChange={onChange} />)
    await userEvent.click(screen.getByRole('combobox'))
    const option = await screen.findByRole('option', { name: '选项二' })
    await userEvent.click(option)
    expect(onChange).toHaveBeenCalledWith('b')
  })

  it('禁用态不可打开', () => {
    render(<Select options={options} disabled label="选项" />)
    expect(screen.getByRole('combobox')).toBeDisabled()
  })
})
