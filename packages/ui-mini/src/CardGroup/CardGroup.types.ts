export interface CardGroupItem {
  key: string
  title?: string
  content?: string
  cover?: string
}

export interface CardGroupProps {
  items?: CardGroupItem[]
  columns?: 1 | 2 | 3 | 4
  gutter?: number
  className?: string
}
