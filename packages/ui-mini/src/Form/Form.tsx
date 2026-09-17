/**
 * Form 表单（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 表单容器 + Form.Item，提供布局、校验、提交功能。
 */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { Text, View } from '@tarojs/components'
import type { FormItemProps, FormProps, FormRule } from './Form.types'
import './Form.scss'

interface FormContextValue {
  values: Record<string, unknown>
  errors: Record<string, string>
  setValue: (name: string, value: unknown) => void
  setError: (name: string, error: string) => void
  labelWidth?: number
  layout: string
  onFinish?: (values: Record<string, unknown>) => void
  onFinishFailed?: (errors: Record<string, string>) => void
}

const FormContext = createContext<FormContextValue | null>(null)

function useFormContext() {
  return useContext(FormContext)
}

export function validateRule(value: unknown, rule: FormRule): string | null {
  if (rule.required && (value === undefined || value === null || value === '')) {
    return rule.message ?? '此项为必填项'
  }
  if (value !== undefined && value !== null && value !== '') {
    if (rule.min !== undefined && String(value).length < rule.min) {
      return rule.message ?? `最少输入 ${rule.min} 个字符`
    }
    if (rule.max !== undefined && String(value).length > rule.max) {
      return rule.message ?? `最多输入 ${rule.max} 个字符`
    }
    if (rule.pattern && !rule.pattern.test(String(value))) {
      return rule.message ?? '格式不正确'
    }
    if (rule.validator) {
      const result = rule.validator(value)
      if (result === false) return rule.message ?? '校验失败'
      if (typeof result === 'string') return result
    }
  }
  return null
}

export function Form({
  layout = 'vertical',
  initialValues = {},
  onFinish,
  onFinishFailed,
  labelWidth = 100,
  children,
  className = '',
}: FormProps) {
  const [values, setValues] = useState<Record<string, unknown>>(initialValues)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const setValue = useCallback((name: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }, [])

  const setError = useCallback((name: string, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }))
  }, [])

  const contextValue = useMemo(
    () => ({
      values,
      errors,
      setValue,
      setError,
      labelWidth,
      layout,
      ...(onFinish !== undefined ? { onFinish } : {}),
      ...(onFinishFailed !== undefined ? { onFinishFailed } : {}),
    }),
    [values, errors, setValue, setError, labelWidth, layout, onFinish, onFinishFailed],
  )

  return (
    <FormContext.Provider value={contextValue}>
      <View className={`kit-form kit-form--${layout} ${className}`.trim()}>{children}</View>
    </FormContext.Provider>
  )
}

export function FormItem({
  label,
  name,
  rules = [],
  children,
  required,
  labelWidth,
  className = '',
}: FormItemProps) {
  const context = useFormContext()
  const error = name ? context?.errors[name] : undefined
  const isRequired = required || rules.some((r) => r.required)
  const effectiveLabelWidth = labelWidth ?? context?.labelWidth

  const handleChildChange = (value: unknown) => {
    if (name && context) {
      context.setValue(name, value)
      for (const rule of rules) {
        const ruleError = validateRule(value, rule)
        if (ruleError) {
          context.setError(name, ruleError)
          return
        }
      }
    }
  }

  // 克隆子元素并注入 value 和 onChange
  const clonedChildren =
    name && context
      ? (() => {
          const child = Array.isArray(children) ? children[0] : children
          if (child && typeof child === 'object' && 'props' in child) {
            const childProps = child.props as Record<string, unknown>
            return {
              ...child,
              props: {
                ...childProps,
                value: context.values[name] ?? childProps.value,
                onChange: (e: unknown) => {
                  const value =
                    e && typeof e === 'object' && 'detail' in e
                      ? (e as { detail: { value: unknown } }).detail.value
                      : e
                  handleChildChange(value)
                  if (typeof childProps.onChange === 'function') {
                    childProps.onChange(e)
                  }
                },
              },
            }
          }
          return children
        })()
      : children

  if (context?.layout === 'horizontal') {
    return (
      <View className={`kit-form-item kit-form-item--horizontal ${className}`.trim()}>
        {label ? (
          <View className="kit-form-item__label" style={{ width: effectiveLabelWidth }}>
            {isRequired ? <Text className="kit-form-item__required">*</Text> : null}
            <Text>{label}</Text>
          </View>
        ) : null}
        <View className="kit-form-item__content">
          {clonedChildren}
          {error ? <Text className="kit-form-item__error">{error}</Text> : null}
        </View>
      </View>
    )
  }

  return (
    <View className={`kit-form-item kit-form-item--vertical ${className}`.trim()}>
      {label ? (
        <View className="kit-form-item__label kit-form-item__label--vertical">
          {isRequired ? <Text className="kit-form-item__required">*</Text> : null}
          <Text>{label}</Text>
        </View>
      ) : null}
      <View className="kit-form-item__content">
        {clonedChildren}
        {error ? <Text className="kit-form-item__error">{error}</Text> : null}
      </View>
    </View>
  )
}

Form.Item = FormItem
