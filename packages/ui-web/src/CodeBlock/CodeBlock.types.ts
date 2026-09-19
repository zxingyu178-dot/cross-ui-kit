export interface CodeBlockProps {
  /** 代码内容 */
  code: string
  /** 语言标签，如 "tsx" */
  language?: string
  /** 是否显示行号 */
  showLineNumbers?: boolean
  /** 是否可复制 */
  copyable?: boolean
  /** 外层容器类名 */
  className?: string
}
