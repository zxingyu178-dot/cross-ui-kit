import type { ReactNode } from 'react'

/** 单个选项卡 */
export interface TabItem {
  /** 唯一值 */
  value: string
  /** 标签头文本（mini 端 TabPane 标题仅支持文本，节点会被转字符串） */
  label: ReactNode
  /** 禁用该选项卡 */
  disabled?: boolean
  /** 面板内容；缺省时只渲染标签头（纯导航） */
  content?: ReactNode
}

/** 尺寸 */
export type TabsSize = 'sm' | 'md'

export interface TabsProps {
  /** 选项卡列表（必填） */
  items: TabItem[]
  /** 受控激活值 */
  value?: string
  /** 非受控初值 */
  defaultValue?: string
  /** 激活值变化（NutUI onChange 适配为 string） */
  onValueChange?: (value: string) => void
  /** 尺寸（默认 md） */
  size?: TabsSize
  /** 容器类名（仅允许 token 化样式） */
  className?: string
}
