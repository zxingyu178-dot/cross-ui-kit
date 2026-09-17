import type { ReactNode } from 'react'

export interface DropdownMenuItem {
  /** 唯一标识 */
  key: string
  /** 菜单项标签 */
  label: ReactNode
  /** 点击回调 */
  onClick?: () => void
  /** 是否禁用 */
  disabled?: boolean
  /** 是否危险操作（红色） */
  danger?: boolean
  /** 图标 */
  icon?: ReactNode
}

export interface DropdownMenuProps {
  /** 触发元素 */
  trigger: ReactNode
  /** 菜单项列表 */
  items: DropdownMenuItem[]
  /** 对齐方式（默认 start） */
  align?: 'start' | 'center' | 'end'
  /** 外层容器类名 */
  className?: string
}
