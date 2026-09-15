import type { ReactNode } from 'react'

export interface EmptyProps {
  /** 主说明（如「暂无数据」），居中弱化显示 */
  title?: ReactNode
  /** 次要描述（补充原因或引导操作），限制最大宽度防超长 */
  description?: ReactNode
  /** 自定义图标/插画，传入则替换默认中性「空文档」几何图形（搜索/断网/错误等场景传对应图标） */
  icon?: ReactNode
  /** 操作区，通常放一个 Button（如「刷新」「新建」），组合传入 */
  action?: ReactNode
  /** 无障碍标签（H5 映射 aria-label） */
  accessibilityLabel?: string
  /** 自定义类名 */
  className?: string
}
