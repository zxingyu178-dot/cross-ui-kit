import { useCallback, useEffect, useRef, useState } from 'react'

/** 请求状态（可直接映射到 StateContainer 的 loading/error/success；empty 由 data 长度判断） */
export type RequestStatus = 'idle' | 'loading' | 'success' | 'error'

export interface UseRequestOptions<TData, TParams extends unknown[]> {
  /** 请求函数（三栈通用的 async；不得依赖 DOM/小程序/RN API） */
  service: (...params: TParams) => Promise<TData>
  /** 是否手动触发（manual=true 时挂载不自动执行），默认 false */
  manual?: boolean
  /** 自动执行时的初始参数 */
  defaultParams?: TParams
  /** 成功回调 */
  onSuccess?: (data: TData, params: TParams) => void
  /** 失败回调 */
  onError?: (error: unknown, params: TParams) => void
}

export interface UseRequestResult<TData, TParams extends unknown[]> {
  /** 最近一次成功的数据 */
  data: TData | undefined
  /** 最近一次错误 */
  error: unknown
  /** 是否请求中 */
  loading: boolean
  /** 状态机：idle / loading / success / error */
  status: RequestStatus
  /** 发起请求（手动模式用） */
  run: (...params: TParams) => Promise<TData | undefined>
  /** 用最近一次参数重跑（刷新 / 重试） */
  refresh: () => Promise<TData | undefined>
}

/**
 * 请求状态机 hook（headless，三栈共用）。
 * 竞态防护：后发请求覆盖先发结果；service/回调存 ref，run/refresh 引用稳定。
 * 与 StateContainer 配合：status→success/error/loading 直接映射，empty 由 data 为空判断。
 */
export function useRequest<TData, TParams extends unknown[]>(
  options: UseRequestOptions<TData, TParams>,
): UseRequestResult<TData, TParams> {
  const [data, setData] = useState<TData | undefined>(undefined)
  const [error, setError] = useState<unknown>(undefined)
  const [loading, setLoading] = useState<boolean>(!options.manual)
  const [status, setStatus] = useState<RequestStatus>(options.manual ? 'idle' : 'loading')

  const optsRef = useRef(options)
  optsRef.current = options

  const paramsRef = useRef<TParams>((options.defaultParams ?? []) as unknown as TParams)
  const countRef = useRef(0)

  const run = useCallback(async (...params: TParams): Promise<TData | undefined> => {
    const id = ++countRef.current
    paramsRef.current = params
    setLoading(true)
    setStatus('loading')
    setError(undefined)
    try {
      const result = await optsRef.current.service(...params)
      if (id === countRef.current) {
        setData(result)
        setStatus('success')
        setLoading(false)
      }
      optsRef.current.onSuccess?.(result, params)
      return result
    } catch (e) {
      if (id === countRef.current) {
        setError(e)
        setStatus('error')
        setLoading(false)
      }
      optsRef.current.onError?.(e, params)
      return undefined
    }
  }, [])

  const refresh = useCallback(() => run(...(paramsRef.current as TParams)), [run])

  useEffect(() => {
    if (!optsRef.current.manual) {
      void run(...((optsRef.current.defaultParams ?? []) as unknown as TParams))
    }
    // 仅首挂载自动执行一次；后续由 run/refresh 驱动（optsRef/run 均稳定引用）
  }, [run])

  return { data, error, loading, status, run, refresh }
}
