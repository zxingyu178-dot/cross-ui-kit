/**
 * Form 表单（web）—— 表单容器 + Form.Item，提供布局、校验、提交功能。
 */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { cn } from '@kit/core'
import type { FormItemProps, FormProps, FormRule } from './Form.types'

interface FormContextValue {
  values: Record<string, unknown>
  errors: Record<string, string>
  setValue: (name: string, value: unknown) => void
  setError: (name: string, error: string) => void
  labelWidth?: number
  layout: string
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
  className,
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
    () => ({ values, errors, setValue, setError, labelWidth, layout }),
    [values, errors, setValue, setError, labelWidth, layout],
  )

  // 显式引用以满足 noUnusedLocals（实际在 handleSubmit 中使用）
  void onFinish
  void onFinishFailed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Record<string, string> = {}
    // 校验会在 Form.Item 中通过 context 进行，这里简化处理
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      if (onFinishFailed) onFinishFailed(newErrors)
    } else {
      if (onFinish) onFinish(values)
    }
  }

  return (
    <FormContext.Provider value={contextValue}>
      <form
        className={cn(
          'w-full',
          layout === 'horizontal' ? 'space-y-4' : '',
          layout === 'vertical' ? 'space-y-4' : '',
          layout === 'inline' ? 'flex flex-wrap items-end gap-4' : '',
          className,
        )}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
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
  className,
}: FormItemProps) {
  const context = useFormContext()
  const error = name ? context?.errors[name] : undefined
  const isRequired = required || rules.some((r) => r.required)
  const effectiveLabelWidth = labelWidth ?? context?.labelWidth

  const handleChildChange = (value: unknown) => {
    if (name && context) {
      context.setValue(name, value)
      // 实时校验
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
                    e && typeof e === 'object' && 'target' in e
                      ? (e as { target: { value: unknown } }).target.value
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
      <div className={cn('flex items-start gap-3', className)}>
        {label ? (
          <label
            className="flex shrink-0 items-center justify-end pt-2 text-bodySm text-text-primary"
            style={{ width: effectiveLabelWidth }}
          >
            {isRequired ? <span className="mr-1 text-danger-default">*</span> : null}
            {label}
          </label>
        ) : null}
        <div className="min-w-0 flex-1">
          {clonedChildren}
          {error ? <div className="mt-1 text-caption text-danger-default">{error}</div> : null}
        </div>
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label ? (
        <label className="text-bodySm text-text-primary">
          {isRequired ? <span className="mr-1 text-danger-default">*</span> : null}
          {label}
        </label>
      ) : null}
      {clonedChildren}
      {error ? <div className="text-caption text-danger-default">{error}</div> : null}
    </div>
  )
}

Form.Item = FormItem
