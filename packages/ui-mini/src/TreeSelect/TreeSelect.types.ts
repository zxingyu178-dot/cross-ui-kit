export interface TreeSelectNode {
  key: string
  title: string
  children?: TreeSelectNode[]
  disabled?: boolean
}

export interface TreeSelectProps {
  data?: TreeSelectNode[]
  value?: string
  onChange?: (value: string, node: TreeSelectNode | null) => void
  placeholder?: string
  disabled?: boolean
  allowClear?: boolean
  className?: string
}
