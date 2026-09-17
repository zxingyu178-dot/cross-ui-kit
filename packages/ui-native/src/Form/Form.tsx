/**
 * Form 表单（native：iOS / Android）—— Tamagui XStack+YStack+Text 自建，
 * 表单容器 + Form.Item，提供布局、校验、提交功能。
 */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import type { FormItemProps, FormProps, FormRule } from './Form.types'

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
  style,
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
      <YStack width="100%" gap={16} style={style}>
        {children}
      </YStack>
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
  style,
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
                onChangeText: (text: string) => {
                  handleChildChange(text)
                  if (typeof childProps.onChangeText === 'function') {
                    childProps.onChangeText(text)
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
      <XStack alignItems="flex-start" gap={12} style={style}>
        {label ? (
          <XStack
            alignItems="center"
            justifyContent="flex-end"
            paddingTop={8}
            width={effectiveLabelWidth}
            flexShrink={0}
          >
            {isRequired ? (
              <Text fontSize="$bodySm" color="$dangerDefault" marginRight={4}>
                *
              </Text>
            ) : null}
            <Text fontSize="$bodySm" color="$textPrimary">
              {label}
            </Text>
          </XStack>
        ) : null}
        <YStack flex={1} minWidth={0} gap={4}>
          {clonedChildren}
          {error ? (
            <Text fontSize="$caption" color="$dangerDefault">
              {error}
            </Text>
          ) : null}
        </YStack>
      </XStack>
    )
  }

  return (
    <YStack gap={6} style={style}>
      {label ? (
        <XStack alignItems="center">
          {isRequired ? (
            <Text fontSize="$bodySm" color="$dangerDefault" marginRight={4}>
              *
            </Text>
          ) : null}
          <Text fontSize="$bodySm" color="$textPrimary">
            {label}
          </Text>
        </XStack>
      ) : null}
      <YStack flex={1} minWidth={0} gap={4}>
        {clonedChildren}
        {error ? (
          <Text fontSize="$caption" color="$dangerDefault">
            {error}
          </Text>
        ) : null}
      </YStack>
    </YStack>
  )
}

Form.Item = FormItem
