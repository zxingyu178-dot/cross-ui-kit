/**
 * Transfer 穿梭框（mini：小程序 / 移动 H5）—— View+Text 自建，
 * 左右两个列表 + 中间操作按钮，支持勾选和移动。
 */
import { Text, View } from '@tarojs/components'
import { useState } from 'react'
import type { TransferItem, TransferProps } from './Transfer.types'
import './Transfer.scss'

export function Transfer({
  dataSource = [],
  targetKeys,
  onChange,
  titles = ['源列表', '目标列表'],
  operations = ['>', '<'],
  disabled = false,
  className = '',
}: TransferProps) {
  const isControlled = targetKeys !== undefined
  const [innerTarget, setInnerTarget] = useState<string[]>([])
  const [leftChecked, setLeftChecked] = useState<string[]>([])
  const [rightChecked, setRightChecked] = useState<string[]>([])
  const currentTarget = isControlled ? targetKeys : innerTarget

  const leftItems = dataSource.filter((item) => !currentTarget.includes(item.key))
  const rightItems = dataSource.filter((item) => currentTarget.includes(item.key))

  const commit = (keys: string[]) => {
    if (!isControlled) setInnerTarget(keys)
    onChange?.(keys)
  }

  const moveToRight = () => {
    commit([...currentTarget, ...leftChecked])
    setLeftChecked([])
  }

  const moveToLeft = () => {
    commit(currentTarget.filter((key) => !rightChecked.includes(key)))
    setRightChecked([])
  }

  const toggleCheck = (key: string, isRight: boolean) => {
    if (isRight) {
      setRightChecked((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
      )
    } else {
      setLeftChecked((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
      )
    }
  }

  const renderList = (items: TransferItem[], checked: string[], isRight: boolean) => (
    <View className="kit-transfer__list">
      <View className="kit-transfer__list-header">
        <Text className="kit-transfer__list-title">{isRight ? titles[1] : titles[0]}</Text>
        <Text className="kit-transfer__list-count">
          {checked.length}/{items.length}
        </Text>
      </View>
      <View className="kit-transfer__list-body">
        {items.length === 0 ? (
          <View className="kit-transfer__empty">
            <Text>暂无数据</Text>
          </View>
        ) : (
          items.map((item) => (
            <View
              key={item.key}
              className={`kit-transfer__item ${checked.includes(item.key) ? 'kit-transfer__item--checked' : ''} ${item.disabled ? 'kit-transfer__item--disabled' : ''}`}
              onClick={() => !item.disabled && !disabled && toggleCheck(item.key, isRight)}
            >
              <View
                className={`kit-transfer__checkbox ${checked.includes(item.key) ? 'kit-transfer__checkbox--checked' : ''}`}
              />
              <View className="kit-transfer__item-content">
                <Text className="kit-transfer__item-title">{item.title}</Text>
                {item.description ? (
                  <Text className="kit-transfer__item-desc">{item.description}</Text>
                ) : null}
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  )

  return (
    <View className={`kit-transfer ${className}`.trim()}>
      {renderList(leftItems, leftChecked, false)}
      <View className="kit-transfer__operations">
        <View
          className={`kit-transfer__btn ${disabled || leftChecked.length === 0 ? 'kit-transfer__btn--disabled' : 'kit-transfer__btn--active'}`}
          onClick={() => !disabled && leftChecked.length > 0 && moveToRight()}
        >
          <Text>{operations[0]}</Text>
        </View>
        <View
          className={`kit-transfer__btn ${disabled || rightChecked.length === 0 ? 'kit-transfer__btn--disabled' : 'kit-transfer__btn--active'}`}
          onClick={() => !disabled && rightChecked.length > 0 && moveToLeft()}
        >
          <Text>{operations[1]}</Text>
        </View>
      </View>
      {renderList(rightItems, rightChecked, true)}
    </View>
  )
}
