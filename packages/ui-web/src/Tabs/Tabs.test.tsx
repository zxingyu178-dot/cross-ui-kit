import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Tabs } from './Tabs'

const items = [
  { label: '标签一', value: 'a', content: '内容一' },
  { label: '标签二', value: 'b', content: '内容二' },
]

describe('Tabs', () => {
  it('渲染标签头，默认显示首个内容', () => {
    render(<Tabs items={items} defaultValue="a" />)
    expect(screen.getByRole('tab', { name: '标签一' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: '标签二' })).toBeInTheDocument()
    expect(screen.getByText('内容一')).toBeInTheDocument()
  })

  it('切换标签显示对应内容并回调', async () => {
    const onValueChange = vi.fn()
    render(<Tabs items={items} defaultValue="a" onValueChange={onValueChange} />)
    await userEvent.click(screen.getByRole('tab', { name: '标签二' }))
    expect(onValueChange).toHaveBeenCalledWith('b')
    expect(await screen.findByText('内容二')).toBeInTheDocument()
  })

  it('禁用标签不可点击', () => {
    render(
      <Tabs
        items={[{ label: '标签二', value: 'b', content: '内容二', disabled: true }]}
        defaultValue="b"
      />,
    )
    expect(screen.getByRole('tab', { name: '标签二' })).toBeDisabled()
  })
})
