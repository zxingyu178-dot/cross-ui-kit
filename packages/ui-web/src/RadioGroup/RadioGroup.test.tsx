import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { RadioGroup } from './RadioGroup'

const options = [
  { label: '选项一', value: 'a' },
  { label: '选项二', value: 'b' },
]

describe('RadioGroup', () => {
  it('渲染全部单选项', () => {
    render(<RadioGroup options={options} />)
    expect(screen.getByRole('radio', { name: '选项一' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: '选项二' })).toBeInTheDocument()
  })

  it('选择触发 onValueChange', async () => {
    const onValueChange = vi.fn()
    render(<RadioGroup options={options} onValueChange={onValueChange} />)
    await userEvent.click(screen.getByRole('radio', { name: '选项二' }))
    expect(onValueChange).toHaveBeenCalledWith('b')
  })

  it('禁用整组时不可选', () => {
    render(<RadioGroup options={options} disabled />)
    expect(screen.getByRole('radio', { name: '选项一' })).toBeDisabled()
  })
})
