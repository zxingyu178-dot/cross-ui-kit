export interface CountdownProps {
  /** 目标时间戳（ms）或剩余毫秒数 */
  value?: number
  /** 格式化字符串：DD天HH时mm分ss秒 */
  format?: string
  /** 倒计时结束回调 */
  onFinish?: () => void
  /** 外层容器类名 */
  className?: string
}

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}
