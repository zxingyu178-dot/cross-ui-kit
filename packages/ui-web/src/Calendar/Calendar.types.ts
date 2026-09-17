export type CalendarMode = 'date' | 'month' | 'year'

export interface CalendarProps {
  /** 当前选中日期（受控） */
  value?: Date
  /** 默认选中日期（非受控） */
  defaultValue?: Date
  /** 日期变化回调 */
  onChange?: (date: Date) => void
  /** 选择模式（默认 date） */
  mode?: CalendarMode
  /** 是否全屏（默认 false） */
  fullscreen?: boolean
  /** 外层容器类名 */
  className?: string
}
