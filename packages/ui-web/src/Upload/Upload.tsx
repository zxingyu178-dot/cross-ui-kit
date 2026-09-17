/**
 * Upload 上传（web）—— input type="file" + 文件列表展示 + 删除按钮，
 * 受控优先，支持多选/最大数量/文件类型过滤，实际上传逻辑由业务方通过 onChange 处理。
 */
import { useRef, useState } from 'react'
import { cn } from '@kit/core'
import type { UploadFile, UploadProps } from './Upload.types'

function formatSize(size?: number): string {
  if (!size) return ''
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
  return `${(size / (1024 * 1024)).toFixed(1)} MB`
}

export function Upload({
  value,
  defaultValue,
  onChange,
  accept,
  multiple = false,
  maxCount,
  disabled = false,
  className,
}: UploadProps) {
  const isControlled = value !== undefined
  const [inner, setInner] = useState<UploadFile[]>(defaultValue ?? [])
  const inputRef = useRef<HTMLInputElement>(null)
  const current = isControlled ? value : inner

  const commit = (files: UploadFile[]) => {
    if (!isControlled) setInner(files)
    onChange?.(files)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files
    if (!fileList || fileList.length === 0) return
    const newFiles: UploadFile[] = Array.from(fileList).map((f) => ({
      uid: Math.random().toString(36).slice(2),
      name: f.name,
      size: f.size,
      status: 'done',
      originFile: f,
    }))
    let next = multiple ? [...current, ...newFiles] : newFiles
    if (maxCount) next = next.slice(0, maxCount)
    commit(next)
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleRemove = (uid: string) => {
    commit(current.filter((f) => f.uid !== uid))
  }

  const showAddButton = !maxCount || current.length < maxCount

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleFileChange}
        className="hidden"
      />
      {showAddButton ? (
        <button
          type="button"
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
          className={cn(
            'flex h-10 w-32 items-center justify-center gap-1 rounded-md border border-dashed border-border-default bg-bg-card text-bodySm text-text-secondary transition-colors',
            disabled
              ? 'cursor-not-allowed opacity-50'
              : 'hover:border-primary-default hover:text-primary-default',
          )}
        >
          <span className="text-lg">+</span>
          <span>上传文件</span>
        </button>
      ) : null}
      <div className="flex flex-col gap-1">
        {current.map((file) => (
          <div
            key={file.uid}
            className="flex items-center justify-between rounded-md border border-border-default bg-bg-card px-3 py-2"
          >
            <div className="flex min-w-0 flex-1 items-center gap-2">
              <span className="text-lg">📄</span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-bodySm text-text-primary">{file.name}</div>
                {file.size ? (
                  <div className="text-caption text-text-tertiary">{formatSize(file.size)}</div>
                ) : null}
              </div>
            </div>
            <button
              type="button"
              disabled={disabled}
              onClick={() => handleRemove(file.uid)}
              className={cn(
                'ml-2 flex h-6 w-6 items-center justify-center rounded text-text-tertiary transition-colors',
                disabled
                  ? 'cursor-not-allowed opacity-50'
                  : 'hover:bg-danger-bg hover:text-danger-default',
              )}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
