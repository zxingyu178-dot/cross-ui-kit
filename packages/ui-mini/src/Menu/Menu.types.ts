export interface MenuItem {
  key: string
  label: string
  disabled?: boolean
  children?: MenuItem[]
}

export interface MenuProps {
  items?: MenuItem[]
  selectedKey?: string
  onSelect?: (key: string) => void
  mode?: 'horizontal' | 'vertical'
  defaultOpenKeys?: string[]
  className?: string
}
