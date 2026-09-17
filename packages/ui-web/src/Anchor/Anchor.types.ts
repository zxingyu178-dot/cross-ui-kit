export interface AnchorItem {
  /** 唯一标识 */
  key: string
  /** 锚点文字 */
  title: string
  /** 目标元素 id */
  href: string
}

export interface AnchorProps {
  /** 锚点列表 */
  items?: AnchorItem[]
  /** 是否固定定位 */
  affix?: boolean
  /** 固定时距顶部距离（px） */
  offsetTop?: number
  /** 当前激活的锚点 key（受控） */
  activeKey?: string
  /** 激活变化回调 */
  onChange?: (key: string) => void
  /** 点击锚点回调 */
  onClick?: (key: string, href: string) => void
  /** 外层容器类名 */
  className?: string
}
