export interface TreeSelectNode {
  /** 唯一标识 */
  key: string
  /** 标题 */
  title: string
  /** 子节点 */
  children?: TreeSelectNode[]
  /** 是否禁用 */
  disabled?: boolean
}

export interface TreeSelectProps {
  /** 树形数据 */
  data?: TreeSelectNode[]
  /** 选中值（受控） */
  value?: string
  /** 选中变化回调 */
  onChange?: (value: string, node: TreeSelectNode | null) => void
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否可清空 */
  allowClear?: boolean
  /** 外层容器类名 */
  className?: string
}
