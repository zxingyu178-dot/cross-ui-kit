import type { ReactNode } from 'react'

export interface MenuItem {
  /** 唯一标识 */
  key: string
  /** 菜单文字 */
  label: string
  /** 菜单图标 */
  icon?: ReactNode
  /** 是否禁用 */
  disabled?: boolean
  /** 子菜单 */
  children?: MenuItem[]
}

export interface MenuProps {
  /** 菜单项 */
  items?: MenuItem[]
  /** 当前选中项 */
  selectedKey?: string
  /** 选中回调 */
  onSelect?: (key: string) => void
  /** 布局模式 */
  mode?: 'horizontal' | 'vertical'
  /** 默认展开的子菜单 key 列表 */
  defaultOpenKeys?: string[]
  /** 外层容器类名 */
  className?: string
}
