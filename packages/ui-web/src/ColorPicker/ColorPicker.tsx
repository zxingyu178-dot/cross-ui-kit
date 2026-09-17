/**
 * ColorPicker 颜色选择器（web）—— 输入框 + 颜色选择面板（预设色板 + 自定义颜色），
 * 受控优先，点击外部关闭。
 */
import { useEffect, useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { ColorPickerProps } from './ColorPicker.types'

const DEFAULT_PRESETS = [
  '#2563eb',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#06b6d4',
  '#f97316',
  '#ec4899',
  '#64748b',
  '#0f172a',
]

export function ColorPicker({
  value,
  defaultValue,
  onChange,
  presetColors = DEFAULT_PRESETS,
  disabled = false,
  placeholder = '请选择颜色',
  className,
}: ColorPickerProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<string>(defaultValue ?? '')
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const current = isControlled ? value : inner

  const commit = (color: string) => {
    if (!isControlled) setInner(color)
    onChange?.(color)
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

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div
        className={cn(
          'flex h-10 w-full cursor-pointer items-center gap-2 rounded-md border bg-bg-card px-3 text-bodyMd transition-colors',
          open ? 'border-primary-default ring-2 ring-primary-default/20' : 'border-border-default',
          disabled ? 'cursor-not-allowed opacity-50' : '',
        )}
        onClick={() => !disabled && setOpen(!open)}
      >
        <span
          className="h-5 w-5 shrink-0 rounded border border-border-default"
          style={{ backgroundColor: current || 'transparent' }}
        />
        <span className={current ? 'text-text-primary' : 'text-text-tertiary'}>
          {current || placeholder}
        </span>
      </div>
      {open && !disabled ? (
        <div className="absolute z-50 mt-1 w-56 rounded-md border border-border-default bg-bg-card p-3 shadow-lg">
          <div className="mb-3 grid grid-cols-5 gap-2">
            {presetColors.map((color) => (
              <button
                key={color}
                type="button"
                className={cn(
                  'h-8 w-8 rounded border-2 transition-transform hover:scale-110',
                  current === color ? 'border-primary-default' : 'border-transparent',
                )}
                style={{ backgroundColor: color }}
                onClick={() => commit(color)}
                title={color}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={current || '#000000'}
              onChange={(e) => commit(e.target.value)}
              className="h-8 w-10 cursor-pointer rounded border border-border-default bg-transparent"
            />
            <input
              type="text"
              value={current}
              onChange={(e) => commit(e.target.value)}
              placeholder="#2563eb"
              className="h-8 flex-1 rounded border border-border-default bg-bg-card px-2 text-bodySm text-text-primary outline-none focus:border-primary-default"
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}
