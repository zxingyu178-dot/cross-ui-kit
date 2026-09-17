export interface MentionOption {
  /** 唯一标识 */
  key: string
  /** 显示文字 */
  label: string
  /** 描述 */
  description?: string
  /** 头像 */
  avatar?: string
}

export interface MentionsProps {
  /** 输入值 */
  value?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 提及选项列表 */
  options?: MentionOption[]
  /** 触发前缀 */
  prefix?: string
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否可清空 */
  allowClear?: boolean
  /** 选中提及回调 */
  onSelect?: (option: MentionOption) => void
  /** 外层容器类名 */
  className?: string
}
