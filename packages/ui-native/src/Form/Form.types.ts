import type { ReactNode } from 'react'
import type { ViewStyle } from 'react-native'

export type FormLayout = 'horizontal' | 'vertical' | 'inline'

export interface FormRule {
  required?: boolean
  message?: string
  min?: number
  max?: number
  pattern?: RegExp
  validator?: (value: unknown) => boolean | string
}

export interface FormItemProps {
  label?: string
  name?: string
  rules?: FormRule[]
  children?: ReactNode
  required?: boolean
  labelWidth?: number
  style?: ViewStyle
}

export interface FormProps {
  layout?: FormLayout
  initialValues?: Record<string, unknown>
  onFinish?: (values: Record<string, unknown>) => void
  onFinishFailed?: (errors: Record<string, string>) => void
  labelWidth?: number
  children?: ReactNode
  style?: ViewStyle
}
