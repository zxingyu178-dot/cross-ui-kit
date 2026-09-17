/**
 * Cascader 级联选择（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 多列级联面板，受控优先，支持任意层级，点击叶子节点确认。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { CascaderOption, CascaderProps } from './Cascader.types'
import './Cascader.scss'

function findLabelsByValue(options: CascaderOption[], values: string[]): React.ReactNode[] {
  const labels: React.ReactNode[] = []
  let currentOptions = options
  for (const v of values) {
    const found = currentOptions.find((o) => o.value === v)
    if (!found) break
    labels.push(found.label)
    currentOptions = found.children ?? []
  }
  return labels
}

export function Cascader({
  value,
  defaultValue,
  onChange,
  options,
  placeholder = '请选择',
  className = '',
}: CascaderProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string[]>(defaultValue ?? [])
  const [open, setOpen] = useState(false)
  const [activePath, setActivePath] = useState<CascaderOption[]>([])
  const current = isControlled ? value : inner

  const labels = findLabelsByValue(options, current)
  const displayText = labels.length > 0 ? labels.join(' / ') : ''

  const commit = (vals: string[]) => {
    if (!isControlled) setInner(vals)
    onChange?.(vals)
  }

  const handleSelect = (option: CascaderOption, level: number) => {
    const newPath = [...activePath.slice(0, level), option]
    setActivePath(newPath)
    if (!option.children || option.children.length === 0) {
      commit(newPath.map((o) => o.value))
      setOpen(false)
      setActivePath([])
    }
  }

  const columns: CascaderOption[][] = [options, ...activePath.map((o) => o.children ?? [])]

  return (
    <View className={`kit-cascader ${className}`.trim()}>
      <View
        className={`kit-cascader__trigger ${open ? 'kit-cascader__trigger--open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <Text className={displayText ? 'kit-cascader__text' : 'kit-cascader__placeholder'}>
          {displayText || placeholder}
        </Text>
        <Text className="kit-cascader__arrow">▼</Text>
      </View>
      {open ? (
        <View className="kit-cascader__panel">
          {columns.map((col, ci) => (
            <View key={ci} className="kit-cascader__column">
              {col.map((opt) => (
                <View
                  key={opt.value}
                  className={`kit-cascader__option ${activePath[ci]?.value === opt.value ? 'kit-cascader__option--active' : ''}`}
                  onClick={() => handleSelect(opt, ci)}
                >
                  <Text>{opt.label}</Text>
                  {opt.children && opt.children.length > 0 ? (
                    <Text className="kit-cascader__option-arrow">›</Text>
                  ) : null}
                </View>
              ))}
            </View>
          ))}
        </View>
      ) : null}
    </View>
  )
}
