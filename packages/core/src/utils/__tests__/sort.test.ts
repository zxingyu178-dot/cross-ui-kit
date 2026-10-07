import { describe, expect, it } from 'vitest'
import { compareValues, sortData } from '../sort'

interface Row {
  name?: string
  age?: number | null
}

describe('compareValues', () => {
  it('数字按大小比较', () => {
    expect(compareValues(3, 5)).toBeLessThan(0)
    expect(compareValues(5, 3)).toBeGreaterThan(0)
    expect(compareValues(5, 5)).toBe(0)
  })

  it('null/undefined 视为最小值', () => {
    expect(compareValues(null, 5)).toBe(-1)
    expect(compareValues(undefined, 5)).toBe(-1)
    expect(compareValues(5, null)).toBe(1)
  })

  it('字符串按 zh-CN 排序（拼音）', () => {
    expect(compareValues('安', '波')).toBeLessThan(0)
    expect(compareValues('b', 'a')).toBeGreaterThan(0)
  })
})

describe('sortData', () => {
  const rows: Row[] = [
    { name: 'c', age: 3 },
    { name: 'a', age: 1 },
    { name: 'b', age: 2 },
  ]

  it('升序 / 降序', () => {
    expect(sortData(rows, 'age', 'asc').map((r) => r.age)).toEqual([1, 2, 3])
    expect(sortData(rows, 'age', 'desc').map((r) => r.age)).toEqual([3, 2, 1])
  })

  it('null 值升序时排在最前', () => {
    const withNull: Row[] = [{ age: 2 }, { age: null }, { age: 1 }]
    expect(sortData(withNull, 'age', 'asc').map((r) => r.age)).toEqual([null, 1, 2])
  })

  it('不修改原数组（返回新数组）', () => {
    const original: Row[] = [{ age: 2 }, { age: 1 }]
    const sorted = sortData(original, 'age', 'asc')
    expect(original.map((r) => r.age)).toEqual([2, 1])
    expect(sorted).not.toBe(original)
  })

  it('key 为空字符串时原样返回', () => {
    expect(sortData(rows, '', 'asc')).toBe(rows)
  })

  it('支持自定义 sorter', () => {
    const byNameLen = (a: Row, b: Row) => (a.name?.length ?? 0) - (b.name?.length ?? 0)
    expect(sortData(rows, 'name', 'asc', byNameLen).map((r) => r.name)).toEqual(['c', 'a', 'b'])
  })
})
