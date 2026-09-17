export interface CountUpProps {
  /** 目标数值 */
  value: number
  /** 动画时长（ms） */
  duration?: number
  /** 前缀 */
  prefix?: string
  /** 后缀 */
  suffix?: string
  /** 小数位数 */
  decimals?: number
  /** 是否千分位分隔 */
  separator?: boolean
  /** 外层容器类名 */
  className?: string
}
