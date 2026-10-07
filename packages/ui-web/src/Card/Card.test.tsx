import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Card, CardContent, CardFooter, CardHeader } from './Card'

describe('Card', () => {
  it('渲染基础卡片与内容', () => {
    render(
      <Card>
        <CardContent>卡片正文</CardContent>
      </Card>,
    )
    expect(screen.getByText('卡片正文')).toBeInTheDocument()
  })

  it('渲染标题、描述与底部', () => {
    render(
      <Card>
        <CardHeader title="卡片标题" description="卡片描述" />
        <CardFooter>卡片底部</CardFooter>
      </Card>,
    )
    expect(screen.getByText('卡片标题')).toBeInTheDocument()
    expect(screen.getByText('卡片描述')).toBeInTheDocument()
    expect(screen.getByText('卡片底部')).toBeInTheDocument()
  })

  it('elevated 形态不报错并渲染', () => {
    render(
      <Card variant="elevated" data-testid="c">
        x
      </Card>,
    )
    expect(screen.getByTestId('c')).toBeInTheDocument()
  })
})
