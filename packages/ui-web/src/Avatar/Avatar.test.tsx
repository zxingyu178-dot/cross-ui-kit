import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('无图片时渲染名称首字', () => {
    render(<Avatar name="张三" />)
    expect(screen.getByText('张')).toBeInTheDocument()
  })

  it('有图片时渲染 img 并带 alt', () => {
    render(<Avatar src="https://example.com/a.png" name="李四" />)
    expect(screen.getByRole('img', { name: '李四' })).toBeInTheDocument()
  })

  it('图片加载失败回退到首字', () => {
    render(<Avatar src="https://example.com/bad.png" name="王五" />)
    fireEvent.error(screen.getByRole('img'))
    expect(screen.getByText('王')).toBeInTheDocument()
  })

  it('方形形态渲染（不报错）', () => {
    render(<Avatar name="赵" shape="square" />)
    expect(screen.getByText('赵')).toBeInTheDocument()
  })
})
