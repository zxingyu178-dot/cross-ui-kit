export interface CountdownProps {
  value?: number
  format?: string
  onFinish?: () => void
  className?: string
}

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
}
