import type { ReactNode } from 'react'

export type FormLayout = 'horizontal' | 'vertical' | 'inline'

export interface FormRule {
  /** 是否必填 */
  required?: boolean
  /** 错误提示 */
  message?: string
  /** 最小长度 */
  min?: number
  /** 最大长度 */
  max?: number
  /** 正则校验 */
  pattern?: RegExp
  /** 自定义校验 */
  validator?: (value: unknown) => boolean | string
}

export interface FormItemProps {
  /** 标签 */
  label?: string
  /** 字段名 */
  name?: string
  /** 校验规则 */
  rules?: FormRule[]
  /** 子元素 */
  children?: ReactNode
  /** 是否必填（显示星号） */
  required?: boolean
  /** 标签宽度（px） */
  labelWidth?: number
  /** 外层容器类名 */
  className?: string
}

export interface FormProps {
  /** 布局方式 */
  layout?: FormLayout
  /** 初始值 */
  initialValues?: Record<string, unknown>
  /** 提交成功回调 */
  onFinish?: (values: Record<string, unknown>) => void
  /** 提交失败回调 */
  onFinishFailed?: (errors: Record<string, string>) => void
  /** 标签宽度（px） */
  labelWidth?: number
  /** 子元素 */
  children?: ReactNode
  /** 外层容器类名 */
  className?: string
}
