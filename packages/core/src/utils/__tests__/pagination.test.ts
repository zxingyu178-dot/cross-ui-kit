import { describe, expect, it } from 'vitest'
import { getPageCount, getPageList } from '../pagination'

describe('getPageCount', () => {
  it('按页大小计算总页数（向上取整）', () => {
    expect(getPageCount(95, 10)).toBe(10)
    expect(getPageCount(100, 10)).toBe(10)
    expect(getPageCount(1, 10)).toBe(1)
  })

  it('total 为 0 时至少 1 页', () => {
    expect(getPageCount(0, 10)).toBe(1)
  })

  it('pageSize 非法（<=0）时按 1 处理，不产生 Infinity/0', () => {
    expect(getPageCount(10, 0)).toBe(10)
  })
})

describe('getPageList', () => {
  it('页数较少时完整列出，无省略号', () => {
    expect(getPageList(1, 5)).toEqual([1, 2, 3, 4, 5])
  })

  it('当前页靠近开头：只在右侧出现省略号', () => {
    expect(getPageList(1, 20)).toEqual([1, 2, 'ellipsis', 20])
  })

  it('当前页在中间：两侧都出现省略号', () => {
    expect(getPageList(10, 20)).toEqual([1, 'ellipsis', 9, 10, 11, 'ellipsis', 20])
  })

  it('当前页靠近末尾：只在左侧出现省略号', () => {
    expect(getPageList(20, 20)).toEqual([1, 'ellipsis', 19, 20])
  })

  it('current 超出范围时收敛到末页', () => {
    expect(getPageList(99, 20)).toEqual([1, 'ellipsis', 19, 20])
  })
})
