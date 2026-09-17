export interface AnchorItem {
  key: string
  title: string
  href: string
}

export interface AnchorProps {
  items?: AnchorItem[]
  affix?: boolean
  offsetTop?: number
  activeKey?: string
  onChange?: (key: string) => void
  onClick?: (key: string, href: string) => void
  className?: string
}
