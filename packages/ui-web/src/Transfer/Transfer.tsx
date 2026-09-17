/**
 * Transfer 穿梭框（web）—— 左右两个列表 + 中间操作按钮，支持勾选和移动。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { TransferItem, TransferProps } from './Transfer.types'

export function Transfer({
  dataSource = [],
  targetKeys,
  onChange,
  titles = ['源列表', '目标列表'],
  operations = ['>', '<'],
  disabled = false,
  className,
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
    const next = [...currentTarget, ...leftChecked]
    commit(next)
    setLeftChecked([])
  }

  const moveToLeft = () => {
    const next = currentTarget.filter((key) => !rightChecked.includes(key))
    commit(next)
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
    <div className="flex h-48 flex-1 flex-col overflow-hidden rounded-md border border-border-default bg-bg-card">
      <div className="flex items-center justify-between border-b border-border-default bg-bg-muted/50 px-3 py-2">
        <span className="text-bodySm font-medium text-text-primary">
          {isRight ? titles[1] : titles[0]}
        </span>
        <span className="text-caption text-text-tertiary">
          {checked.length}/{items.length}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto p-1">
        {items.length === 0 ? (
          <div className="flex h-full items-center justify-center text-caption text-text-tertiary">
            暂无数据
          </div>
        ) : (
          items.map((item) => (
            <label
              key={item.key}
              className={cn(
                'flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 transition-colors',
                checked.includes(item.key) ? 'bg-primary-default/10' : 'hover:bg-bg-muted/50',
                item.disabled ? 'cursor-not-allowed opacity-50' : '',
              )}
            >
              <input
                type="checkbox"
                checked={checked.includes(item.key)}
                disabled={item.disabled || disabled}
                onChange={() => !item.disabled && !disabled && toggleCheck(item.key, isRight)}
                className="h-4 w-4 accent-primary-default"
              />
              <div className="min-w-0 flex-1">
                <div className="truncate text-bodySm text-text-primary">{item.title}</div>
                {item.description ? (
                  <div className="truncate text-caption text-text-tertiary">{item.description}</div>
                ) : null}
              </div>
            </label>
          ))
        )}
      </div>
    </div>
  )

  return (
    <div className={cn('flex items-center gap-3', className)}>
      {renderList(leftItems, leftChecked, false)}
      <div className="flex flex-col gap-2">
        <button
          type="button"
          disabled={disabled || leftChecked.length === 0}
          onClick={moveToRight}
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-md border text-bodySm transition-colors',
            disabled || leftChecked.length === 0
              ? 'cursor-not-allowed border-border-default bg-bg-muted text-text-tertiary'
              : 'border-primary-default bg-primary-default text-white hover:bg-primary-default/90',
          )}
        >
          {operations[0]}
        </button>
        <button
          type="button"
          disabled={disabled || rightChecked.length === 0}
          onClick={moveToLeft}
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-md border text-bodySm transition-colors',
            disabled || rightChecked.length === 0
              ? 'cursor-not-allowed border-border-default bg-bg-muted text-text-tertiary'
              : 'border-primary-default bg-primary-default text-white hover:bg-primary-default/90',
          )}
        >
          {operations[1]}
        </button>
      </div>
      {renderList(rightItems, rightChecked, true)}
    </div>
  )
}
