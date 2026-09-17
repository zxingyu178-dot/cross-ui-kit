export interface TransferItem {
  key: string
  title: string
  description?: string
  disabled?: boolean
}

export interface TransferProps {
  dataSource?: TransferItem[]
  targetKeys?: string[]
  onChange?: (targetKeys: string[]) => void
  titles?: [string, string]
  operations?: [string, string]
  disabled?: boolean
  className?: string
}
