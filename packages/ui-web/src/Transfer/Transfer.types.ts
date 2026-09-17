export interface TransferItem {
  /** 唯一标识 */
  key: string
  /** 标题 */
  title: string
  /** 描述 */
  description?: string
  /** 是否禁用 */
  disabled?: boolean
}

export interface TransferProps {
  /** 数据源 */
  dataSource?: TransferItem[]
  /** 右侧选中的 key 列表（受控） */
  targetKeys?: string[]
  /** 右侧选中变化回调 */
  onChange?: (targetKeys: string[]) => void
  /** 左右标题 */
  titles?: [string, string]
  /** 操作按钮文案 */
  operations?: [string, string]
  /** 是否禁用 */
  disabled?: boolean
  /** 外层容器类名 */
  className?: string
}
