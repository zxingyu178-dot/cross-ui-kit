import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useRequest } from '../useRequest'

interface Deferred<T> {
  promise: Promise<T>
  resolve: (value: T) => void
  reject: (error: unknown) => void
}

function deferred<T>(): Deferred<T> {
  let resolve!: (value: T) => void
  let reject!: (error: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

describe('useRequest', () => {
  it('挂载自动执行，成功后更新数据与状态', async () => {
    const service = vi.fn(async () => 'ok')
    const { result } = renderHook(() => useRequest({ service }))
    expect(result.current.status).toBe('loading')
    expect(result.current.loading).toBe(true)
    await waitFor(() => expect(result.current.status).toBe('success'))
    expect(result.current.data).toBe('ok')
  })

  it('manual 模式挂载不执行，调用 run 后成功', async () => {
    const service = vi.fn(async (value: string) => value)
    const { result } = renderHook(() => useRequest({ service, manual: true }))
    expect(result.current.status).toBe('idle')
    expect(service).not.toHaveBeenCalled()
    let out: string | undefined
    await act(async () => {
      out = await result.current.run('payload')
    })
    expect(out).toBe('payload')
    expect(result.current.status).toBe('success')
  })

  it('竞态：后发请求胜出，失效的旧请求不触发 onSuccess', async () => {
    const d1 = deferred<string>()
    const d2 = deferred<string>()
    let calls = 0
    const service = vi.fn(() => {
      calls += 1
      return calls === 1 ? d1.promise : d2.promise
    })
    const onSuccess = vi.fn()
    const { result } = renderHook(() => useRequest({ service, manual: true, onSuccess }))

    await act(async () => {
      void result.current.run()
      void result.current.run()
    })

    // 第二个请求（最新）先返回
    await act(async () => {
      d2.resolve('second')
      await d2.promise
    })
    expect(result.current.data).toBe('second')

    // 第一个请求（已失效）后返回：数据不变，且不应再触发 onSuccess
    await act(async () => {
      d1.resolve('first')
      await d1.promise
    })
    expect(result.current.data).toBe('second')
    expect(onSuccess).toHaveBeenCalledTimes(1)
    expect(onSuccess).toHaveBeenCalledWith('second', expect.anything())
  })

  it('失败时进入 error 状态并触发 onError', async () => {
    const err = new Error('boom')
    const service = vi.fn(async () => {
      throw err
    })
    const onError = vi.fn()
    const { result } = renderHook(() => useRequest({ service, onError }))
    await waitFor(() => expect(result.current.status).toBe('error'))
    expect(result.current.error).toBe(err)
    expect(onError).toHaveBeenCalledWith(err, expect.anything())
  })

  it('refresh 用最近参数重跑并更新数据', async () => {
    let n = 0
    const service = vi.fn(async () => {
      n += 1
      return `v${n}`
    })
    const { result } = renderHook(() => useRequest({ service }))
    await waitFor(() => expect(result.current.data).toBe('v1'))
    await act(async () => {
      await result.current.refresh()
    })
    expect(result.current.data).toBe('v2')
  })
})
