/**
 * Cascader 级联选择（web）—— div 容器 + 输入框 + 级联面板（多列），
 * 受控优先，支持任意层级，点击叶子节点确认。
 */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { CascaderOption, CascaderProps } from './Cascader.types'

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
  className,
}: CascaderProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string[]>(defaultValue ?? [])
  const [open, setOpen] = useState(false)
  const [activePath, setActivePath] = useState<CascaderOption[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const columns: CascaderOption[][] = [options, ...activePath.map((o) => o.children ?? [])]

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div
        className={cn(
          'flex h-10 w-full cursor-pointer items-center justify-between rounded-md border bg-bg-card px-3 text-bodyMd transition-colors',
          open ? 'border-primary-default ring-2 ring-primary-default/20' : 'border-border-default',
        )}
        onClick={() => setOpen(!open)}
      >
        <span className={displayText ? 'text-text-primary' : 'text-text-tertiary'}>
          {displayText || placeholder}
        </span>
        <span className={cn('text-text-tertiary transition-transform', open ? 'rotate-180' : '')}>
          ▼
        </span>
      </div>
      {open ? (
        <div className="absolute z-50 mt-1 flex max-h-60 overflow-auto rounded-md border border-border-default bg-bg-card shadow-lg">
          {columns.map((col, ci) => (
            <ul
              key={ci}
              className="min-w-[120px] border-r border-border-default py-1 last:border-r-0"
            >
              {col.map((opt) => (
                <li
                  key={opt.value}
                  className={cn(
                    'flex cursor-pointer items-center justify-between px-3 py-2 text-bodySm transition-colors',
                    activePath[ci]?.value === opt.value
                      ? 'bg-primary-default/10 text-primary-default'
                      : 'text-text-secondary hover:bg-bg-muted/50 hover:text-text-primary',
                  )}
                  onClick={() => handleSelect(opt, ci)}
                >
                  <span>{opt.label}</span>
                  {opt.children && opt.children.length > 0 ? (
                    <span className="ml-2 text-text-tertiary">›</span>
                  ) : null}
                </li>
              ))}
            </ul>
          ))}
        </div>
      ) : null}
    </div>
  )
}
