import type { ReactNode } from 'react'

export interface CascaderOption {
  value: string
  label: ReactNode
  children?: CascaderOption[]
}

export interface CascaderProps {
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  options: CascaderOption[]
  placeholder?: string
  className?: string
}
