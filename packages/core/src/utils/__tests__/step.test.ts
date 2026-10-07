import { describe, expect, it } from 'vitest'
import { deriveStepStatus, isConnectorActive } from '../step'

describe('deriveStepStatus', () => {
  it('index < current 为 finish', () => {
    expect(deriveStepStatus(0, 2)).toBe('finish')
    expect(deriveStepStatus(1, 2)).toBe('finish')
  })

  it('index === current 为 process', () => {
    expect(deriveStepStatus(2, 2)).toBe('process')
  })

  it('index > current 为 wait', () => {
    expect(deriveStepStatus(3, 2)).toBe('wait')
  })

  it('显式 override 优先于推导', () => {
    expect(deriveStepStatus(0, 2, 'error')).toBe('error')
    expect(deriveStepStatus(5, 2, 'finish')).toBe('finish')
  })
})

describe('isConnectorActive', () => {
  it('已完成步的连线高亮', () => {
    expect(isConnectorActive(0, 2)).toBe(true)
  })

  it('当前步(process)的连线不高亮', () => {
    expect(isConnectorActive(2, 2)).toBe(false)
  })

  it('override 为 error 时不高亮', () => {
    expect(isConnectorActive(0, 2, 'error')).toBe(false)
  })
})
