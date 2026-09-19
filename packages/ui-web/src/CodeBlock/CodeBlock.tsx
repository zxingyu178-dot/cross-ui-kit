/**
 * CodeBlock 代码块（web）—— 暗色代码展示，支持语言标签、行号、复制。
 */
import { useState } from 'react'
import { cn } from '@kit/core'
import type { CodeBlockProps } from './CodeBlock.types'

export function CodeBlock({
  code,
  language = 'text',
  showLineNumbers = false,
  copyable = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* 忽略剪贴板权限错误 */
    }
  }

  const lines = code.split('\n')

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-border-default bg-[#0f172a] text-slate-200',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="text-caption text-slate-400">{language}</span>
        {copyable && (
          <button
            type="button"
            onClick={handleCopy}
            className="text-caption text-slate-400 transition-colors hover:text-white"
          >
            {copied ? '已复制' : '复制'}
          </button>
        )}
      </div>
      <pre className="overflow-x-auto px-4 py-3 text-bodySm leading-relaxed">
        {showLineNumbers ? (
          lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 inline-block w-6 select-none text-right text-slate-600">
                {i + 1}
              </span>
              <code>{line || ' '}</code>
            </div>
          ))
        ) : (
          <code>{code}</code>
        )}
      </pre>
    </div>
  )
}
