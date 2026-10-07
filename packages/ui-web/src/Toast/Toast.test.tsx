import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Toast } from './Toast'

describe('Toast', () => {
  it('open=true 显示消息', () => {
    render(<Toast open message="保存成功" onOpenChange={() => {}} />)
    expect(screen.getByText('保存成功')).toBeInTheDocument()
  })

  it('open=false 不显示消息', () => {
    render(<Toast open={false} message="保存成功" onOpenChange={() => {}} />)
    expect(screen.queryByText('保存成功')).not.toBeInTheDocument()
  })

  it('loading 类型渲染（无文本断言，仅不报错）', () => {
    render(<Toast open type="loading" message="加载中" onOpenChange={() => {}} />)
    expect(screen.getByText('加载中')).toBeInTheDocument()
  })
})
