export interface AddressOption {
  value: string
  label: string
  children?: AddressOption[]
}

export interface AddressValue {
  province?: string
  city?: string
  district?: string
}

export interface AddressProps {
  /** 选中值 */
  value?: AddressValue
  /** 值变化回调 */
  onChange?: (value: AddressValue) => void
  /** 省市区数据 */
  options?: AddressOption[]
  /** 占位符 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 外层容器类名 */
  className?: string
}
