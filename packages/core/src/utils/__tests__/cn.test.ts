import { describe, expect, it } from 'vitest'
import { cn } from '../cn'

describe('cn', () => {
  it('合并普通类', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('处理条件类（false / undefined / null 被忽略）', () => {
    const cond = false
    expect(cn('a', cond && 'b', undefined, null)).toBe('a')
  })

  it('tailwind-merge 去重冲突的间距类（后者胜）', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('自定义字号类与文字颜色类分属不同组，二者都保留（关键：防止颜色被字号挤掉）', () => {
    const out = cn('text-body-md', 'text-text-primary')
    expect(out).toContain('text-body-md')
    expect(out).toContain('text-text-primary')
  })

  it('自定义背景色同类冲突时后者胜', () => {
    expect(cn('bg-bg-card', 'bg-bg-hover')).toBe('bg-bg-hover')
  })
})
