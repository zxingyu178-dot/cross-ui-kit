export interface SearchProps {
  /** 输入值 */
  value?: string
  /** 值变化回调 */
  onChange?: (value: string) => void
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 搜索回调 */
  onSearch?: (value: string) => void
  /** 是否显示搜索按钮 */
  enterButton?: boolean
  /** 搜索按钮文字 */
  enterButtonText?: string
  /** 外层容器类名 */
  className?: string
}
